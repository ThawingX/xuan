const { subOptionsModel } = require('../../schema/subOptions')
module.exports = async function (req, res, next) {
    try {
    const { optionName } = req.query
        const result = await subOptionsModel.findOne({ optionName })
        if (result) {
            const { subOption } = result
            return res.json(subOption)
        }
    } catch (err) {
        return res.send(err)
    }

    res.send('getOption ok')
}