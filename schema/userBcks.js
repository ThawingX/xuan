const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

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
    },
    role: {
        type: String
    },
})

const userBckModel = model('userBcks', UsersSchema)

module.exports = {
    userBckModel
}