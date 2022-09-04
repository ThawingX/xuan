const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    const { id } = req.query
    if (!id) {
        return res.send('invalid request')
    }
    const { acknowledged, deletedCount } = await standardModel.deleteOne({ id })
    if (acknowledged && deletedCount > 0) {
        return res.send('标准删除成功')
    }
    if (acknowledged) {
        return res.send('标准已经删除')
    }
    return res.send('该标准不存在')
}