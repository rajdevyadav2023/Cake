const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        phone: {
            type: mongoose.SchemaTypes.String,
            required: false,
            unique: true
        },
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
            unique: true
        },
        address: {
            type: mongoose.SchemaTypes.String,
            required: false
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('users', userSchema)