const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const StandardSchema = schema({
    id: String,
    chName: String,
    enName: String,
    type: String,
    state: String,
    property: String,
    city: String,
    CCS: String,
    ICS: String,
    administrativeDepartment: String,
    responsibleDepartment: String,
    releaseDepartment: String,
    comment: String,
    url: String,
    industryClassfication: String,
    ICSClassfication: String,
    implementationTime: Date,
    releaseTime: Date,
})

const standardModel = model('Standard', StandardSchema)

module.exports = {
    standardModel
}