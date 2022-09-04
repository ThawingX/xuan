const { subOptionsModel } = require('../../schema/subOptions')
module.exports = async function (req, res, next) {
    const { optionName } = req.query
    const result = await subOptionsModel.find({ optionName })
    console.log(result)
    res.send('getOption ok')
}