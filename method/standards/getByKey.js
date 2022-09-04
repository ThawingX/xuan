const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    const { key } = req.body
    // TODO：关键词检索
    if(!key){
        return res.send('invalid request')
    }
    const standard = await standardModel.findOne({ key })
    if (standard) {
        return res.json(standard)
    }
    return res.send('该标准不存在')
}