const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const subOptionSchema = schema({
    optionName:{
        type:String,
        required:true
    },
    subOption:{
        type:Array
    },
})

const subOptionsModel = model('subOptions', subOptionSchema)

module.exports = {
    subOptionsModel
}