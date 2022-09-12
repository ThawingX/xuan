const { userModel } = require('../../schema/users')
module.exports = async function (req, res, next) {
    try {
        // 暂时通过账号获取用户信息
        const { account } = req.query
        console.log(req.body)
        if (!account) {
            return res.json({
                code: 0,
                message: "invalid request",
                result: account
            })
        }
        const user = await userModel.findOne({ account })
        if (user) {
            return res.json({
                code: 1,
                message: "查询信息成功",
                result: user
            })
        }
        return res.json({
            code: 0,
            message: "没有此用户",
            result: user
        })
    } catch (err) {
        console.log(err)
        return res.json({
            code: 0,
            message: "查询失败，请联系管理员",
            result: err
        })
    }
}