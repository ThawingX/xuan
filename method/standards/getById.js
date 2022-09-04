const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    const { id } = req.query
    if(!id){
        return res.send('invalid request')
    }
    const standard = await standardModel.findOne({ id })
    if (standard) {
        return res.json(standard)
    }
    return res.send('该标准不存在')
}