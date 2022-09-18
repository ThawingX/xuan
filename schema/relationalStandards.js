const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const relationalStandardSchema = schema({
    id: {
        type: String,
        required: true,
        index: { unique: true }
    },
    subStandards: {
        type: Array
    },
    time: {
        type: String
    }
})

const relationalStandardModel = model('relationalStandards', relationalStandardSchema)

module.exports = {
    relationalStandardModel
}