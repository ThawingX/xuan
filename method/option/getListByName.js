const { subOptionsModel } = require('../../schema/subOptions')
module.exports = async function (req, res, next) {
    const { optionName } = req.query
    const result = await subOptionsModel.findOne({ optionName })
    if(result){
        const { subOption } = result
        return res.json(subOption)
    }
        
    res.send('getOption ok')
}