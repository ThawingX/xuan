const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        const result = await standardModel.find({}).limit(50)
        res.json(result)
    } catch (err) {
        res.send(err)
    } finally {
    }

}