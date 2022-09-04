const { userModel } = require('../../schema/users')
module.exports = async function (req, res, next) {
    try {
        // 管理员鉴权
        const oId = req.query.id
        const form = req.body
        const { acknowledged, modifiedCount, upsertedId, upsertedCount, matchedCount } = await userModel.updateOne({ 'id': oId }, form)
        console.log(result)
        if (acknowledged && modifiedCount > 0) {
            return res.send('修改完毕')
        }
        if (acknowledged && matchedCount) {
            return res.send('与原内容一致，未作修改')
        }
        if (acknowledged) {
            return res.send('没有这个用户')
        }
        return res.send('操作失败')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}