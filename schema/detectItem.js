const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const detectItemSchema = schema({
    id: {
        type: String,
        required: true
    },
    detectItem: {
        type: Array
    },
})

const detectItemModel = model('DetectItems', detectItemSchema)

module.exports = {
    detectItemModel
}