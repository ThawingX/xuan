const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')
const stringRandom = require('string-random')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 ,通过身份证判断
    // reject 拒绝  allow 通过
    try {
        const { IDNumber, role, doMethod } = req.body
        // 判断 找回密码还是申请账号
        // 判断 允许还是拒绝
        // 校验身份证是否存在
        // 创建用户
        
    } catch (err) {
        return res.json({
            code: 0,
            message: "失败",
            result: err
        })
    } finally { }
}