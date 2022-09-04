const { rolePermsModel } = require('../../schema/rolePerms')

module.exports = async function (req, res, next) {
    // 鉴权,管理员 
    const { role } = req.body
    const { acknowledged, deletedCount } = await rolePermsModel.deleteOne({ role })
    if (acknowledged && deletedCount > 0) {
        return res.send('角色删除成功')
    }
    if (acknowledged) {
        return res.send('角色已经删除')
    }
    return res.send('该角色不存在')
}