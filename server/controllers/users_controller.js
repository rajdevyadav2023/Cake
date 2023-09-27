const jwt = require('jsonwebtoken')
const Users = require('../models/users_model');
const { hashing_password, compare_password } = require('../util/password_helper')

// Intance for signup api
const signUpUser = async ( request, response ) => {

    const { name, email } = request.body;

    if( !name && !email && !request.body.password ) return response.status(400).send(
        {
            status: 400,
            message: "Fields are required"
        }
    )

    if( !name ) return response.status(400).send(
        {
            status: 400,
            message: "Name is required"
        }
    )

    if( !email ) return response.status(400).send(
        {
            status: 400,
            message: "Email are required"
        }
    )

    if( !request.body.password ) return response.status(400).send(
        {
            status: 400,
            message: "Password are required"
        }
    )

    try {

        const userExisted = await Users.findOne( { email } )

        if(userExisted) return response.status(409).send(
            {
                status: 409,
                message: "This email is already registered"
            }
        )

        const password = hashing_password( request.body.password )

        const newUser = await Users.create( { name, email, password } )

        newUser.save()

        response.status(201).send(
            {
                status: 201,
                message: "Registered Successfully"
            }
        )

    } catch ( err ) {

        response.status(400).send(
            {
                status: 400,
                message: "An Error Has Occured: " + err
            }
        )

    }

}

// Instance for login api
const loginUser = async ( request, response ) => {

    const { email, password } = request.body

    if( !email && !password ) return response.status(400).send(
        {
            status: 400,
            message: "Fields are required"
        }
    )

    if( !email ) return response.status(400).send(
        {
            status: 400,
            message: "Email are required"
        }
    )

    if( !password ) return response.status(400).send(
        {
            status: 400,
            message: "Password are required"
        }
    )

    const userDb = await Users.findOne( { email } )

    if( !userDb ) return response.status(401).send(
        {
            status: 401,
            message: "Wrong Credentials"
        }
    )

    const isValid = compare_password( password, userDb.password )

    if( !isValid ) return response.status(401).send(
        {
            status: 401,
            message: "Wrong Credentials"
        }
    )

    const values = {
        id: userDb._id,
        name: userDb.name,
        email: userDb.email
    }

    const token = jwt.sign( { values }, process.env.SECRET, { expiresIn: "2d" } )

    response.status(200).send(
        {
            message: "Logged In Successfully",
            token
        }
    )

}

module.exports = {
    signUpUser,
    loginUser
}