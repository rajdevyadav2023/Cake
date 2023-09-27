const jwt = require('jsonwebtoken')
const Users = require('../models/users_model');
const { hashing_password, compare_password } = require('../util/password_helper')

// Intance for signup api
const signUpUser = async ( request, response ) => {

    const 
        phone = '',
        address = '';

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

        const newUser = await Users.create( { name, phone, email, address, password } )

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

    // Destructuring the payload from user input
    const { email, password } = request.body

    // Guard Clauses: That says if email or password is not presented, you will be required
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

    // Get the data in the database that matches the email
    const userDb = await Users.findOne( { email } )

    // if userDb is null that means, the email did not match any data in the database
    if( !userDb ) return response.status(401).send(
        {
            status: 401,
            message: "Wrong Credentials"
        }
    )

    // if email is match from the data in the database, then checks if the user password matches the database password data
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

    // A token will be sent to front-end / client and if decoded, values will be " id, name, email "
    const token = jwt.sign( { values }, process.env.SECRET, { expiresIn: "2d" } )

    response.status(200).send(
        {
            message: "Logged In Successfully",
            token
        }
    )

}

const userProfile = async ( request, response ) => {

    // Checks if there's a "Authorization" made from client's fetch
    const method = request.headers.authorization;

    // If no authorization, return this to client
    if( !method ) return response.status(400).send(
        {
            status: 401,
            message: "You are not authorized"
        }
    )

    // Otherwise, get the token in the authorization bearer
    const bearer = request.headers.authorization.split(" ")[1]

    // But if the authorization is presented but no value in the bearer, return this instead
    if( !bearer ) return response.status(401).send(
        {
            status: 401,
            mesage: "You are not authorized"
        }
    )

    try {

        // Otherwise, verify the token if presented
        const oldToken = jwt.verify( bearer, process.env.SECRET );

        // Get the user data in the database by id
        const fetchhUser = await Users.findById( oldToken._id )

        // userDetails a payload for jwt token
        const userDetails = {
            id: fetchhUser._id,
            name: fetchhUser.name,
            phone: fetchhUser.phone,
            email: fetchhUser.email,
            address: fetchhUser.address,
        }

        // New Token Instance
        const newToken = jwt.sign( { usersDetails }, process.env.SECRET, { expiresIn: "2d" } )

        // Response to client
        response.status(200).send(
            {
                status: 200,
                message: "User is verified",
                token: newToken
            }
        )

    } catch ( err ) {

        response.status(401).send(
            {
                status: 400,
                mesage: "Your token is either expired or invalid therefore, you are not authorized"
            }
        )

    }



}

module.exports = {
    signUpUser,
    loginUser,
    userProfile
}