const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        const data = await standardModel.find({}).limit(50)
        return res.json({ data })
    } catch (err) {
        return res.send(err)
    } finally {
    }

}