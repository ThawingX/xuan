const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    const { key } = req.body
    // TODO：搜索内容检索，标准号 || 中文标准名称 || 英文标注名称
    if(!key){
        return res.send('invalid request')
    }
    const standard = await standardModel.findOne({ key })
    if (standard) {
        return res.json(standard)
    }
    return res.send('该标准不存在')
}