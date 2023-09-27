const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
            unique: true
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('users', userSchema)