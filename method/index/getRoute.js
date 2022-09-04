const { rolePermsModel } = require('../../schema/rolePerms')
module.exports = async function (req, res, next) {
    const { role } = req.body
    if (!role) {
        return res.send('request is invalid')
    }
    const findRes = await rolePermsModel.findOne({ role })
    if (findRes) {
        const { menus } = findRes
        return res.json(menus)
    }
    return res.send('该用户不存在')
}