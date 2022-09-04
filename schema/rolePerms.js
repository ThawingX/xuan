const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const rolePermsSchema = schema({
    roleName:{
        type:String
    },
    role:{
        type:String
    },
    menus:{
        type:Array
    },
    perms:{
        type:Array
    }
})

const rolePermsModel = model('RolePerms', rolePermsSchema)

module.exports = {
    rolePermsModel
}