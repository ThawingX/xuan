const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')
const stringRandom = require('string-random')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 ,通过身份证判断
    try {
        const result = await appliedAccountsModel.find({})
        if (result) {
            return res.json({
                code: 1,
                message: "查找成功",
                result
            })
        }
        return res.json({
            code:0,
            message:"没有正在申请的用户",
            result
        })
    } catch (err) {
        return res.json({
            code:0,
            message:"查找失败，请稍后重试",
            result:err
        })
    } finally { }
}