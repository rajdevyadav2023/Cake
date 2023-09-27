const hashing = require('bcryptjs')

const hashing_password = ( password ) => {

    const salt = hashing.genSaltSync()
    return hashing.hashSync( password, salt )

}

const compare_password = ( password, hashedPassword ) => {

    return hashing.compareSync ( password, hashedPassword )

}

module.exports = {
    hashing_password,
    compare_password
}