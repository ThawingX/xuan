const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        const form = req.body
        const { id } = form
        if (!id) {
            return res.send('invalid request')
        }
        if (await standardModel.findOne({ id })) {
            return res.send('该标准已经存在（请注意标准号）')
        }
        const result = await standardModel.create(form)
        if (result) {
            return res.send('create ok')
        }
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}