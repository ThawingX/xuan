const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const StandardSchema = schema({
    id: {
        type: String,
        required: true,
        index: { unique: true }
    },
    chName: {
        type: String,
    },
    enName: {
        type: String,

    },
    standardType: {
        type: String
    },
    state: {
        type: String
    },
    property: {
        type: String
    },
    city: {
        type: String
    },
    CCS: {
        type: String
    },
    ICS: {
        type: String
    },
    administrativeDepartment: {
        type: String
    },
    responsibleDepartment: {
        type: String
    },
    replaceStandard: {
        type: String
    },
    comment: {
        type: String
    },
    url: {
        type: String
    },
    industryClassfication: {
        type: String
    },
    implementationTime: {
        type: Date
    },
    releaseTime: {
        type: Date
    },
})

const standardModel = model('Standard', StandardSchema)

module.exports = {
    standardModel
}