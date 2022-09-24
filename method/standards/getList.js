const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
    try {
        const {limitNum} = req.query
        const data = await standardModel.find({}).limit(limitNum || 50)
        return res.json({
            code:1,
            message:"获取成功",
            result:data
        })
    } catch (err) {
        return res.json({
            code: 0,
            message:"获取失败",
            result:err
        })
    } finally {
    }

}