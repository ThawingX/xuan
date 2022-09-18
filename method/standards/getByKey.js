const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        const { key } = req.query
        // TODO：关键词检索
        if (!key) {
            return res.send('invalid request')
        }
        const standard = await standardModel.find({ $or: [{ id: key }, { chName: key }] })
        
        if (standard.length) {
            return res.json({
                code: 1,
                message: 'OK',
                result: standard
            })
        }
        return res.json({
            code:0,
            message:'该标准不存在',
            result:standard
        })
    } catch (err) {
        return res.json({
            code: 0,
            message: '操作失败',
            result: err
        })
    }
}