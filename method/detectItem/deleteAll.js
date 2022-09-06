const { detectItemModel } = require('../../schema/detectItem')
module.exports = async function (req, res, next) {
    const { id } = req.body
    if (!id) {
        return res.send('request is invalid')
    }
    const findRes = await detectItemModel.deleteOne({ id })
    if (findRes) {
        return res.json(findRes)
    }
    return res.send('该id不存在')
}