const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const AppliedAccountsSchema = schema({
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
    type:{
        type:String,
        required:true
    },
    typeName:{
        type:String,
    }
})

const appliedAccountsModel = model('AppliedAccounts', AppliedAccountsSchema)

module.exports = {
    appliedAccountsModel
}