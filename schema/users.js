const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model
const bcrypt = require('bcrypt')
const SALT = 5

const UsersSchema = schema({
    id: {
        type: Number,
        required: true,
        index: { unique: true }
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    IDNumber: {
        type: String,
        required: true,
        index: { unique: true }
    },
    account: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true,
        set(val){
            return bcrypt.hashSync(val,SALT)
        }

    },
    role: {
        type: String
    },
})

const userModel = model('User', UsersSchema)

module.exports = {
    userModel
}