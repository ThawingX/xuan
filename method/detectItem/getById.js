const { detectItemModel } = require('../../schema/detectItem')
module.exports = async function (req, res, next) {
    try {
        const { id } = req.query
        if (!id) {
            return res.send(`request is invalid id is ${id}`)
        }
        const findRes = await detectItemModel.findOne({ id })
        if (findRes) {
            return res.json(findRes)
        }
        return res.send('该检测项不存在')
    } catch (err) {
        return res.send(err)
    }
}