const { rolePermsModel } = require('../../schema/rolePerms')

module.exports = async function (req, res, next) {
    try {
        const form = req.body
        const { roleName, role, menus, perms } = form
        if (await rolePermsModel.findOne({ role })) {
            return res.send('已经有该角色了')
        }
        const result = await rolePermsModel.create(form)
        return res.send('create ok')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}