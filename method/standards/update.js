const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        // 科研人员鉴权
        const form = req.body
        const { id } = form
        if (!id) {
            return res.send('invalid request')
        }
        const { acknowledged, modifiedCount, upsertedId, upsertedCount, matchedCount } = await standardModel.updateOne({ id }, form)
        if (acknowledged && modifiedCount > 0) {
            return res.send('修改完毕')
        }
        if (acknowledged && matchedCount) {
            return res.send('与原内容一致，未作修改')
        }
        if (acknowledged) {
            return res.send('没有这个标准')
        }
        return res.send('操作失败')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}