const { userModel } = require('../../schema/users')
const bcrypt = require('bcrypt')
module.exports = async function (req, res, next) {
    try {
        // 暂时使用账号密码判断
        const { account, password } = req.body
        const user = await userModel.findOne({ account })
        if (!user) {
            return res.json({
                code: 0,
                message: '没有这个用户！',
                result: user
            })
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.json({
                code: 0,
                message: '密码错误',
                result: user
            })
        }
        return res.json({
            code: 1,
            message: '登录成功',
            result: user
        })
    } catch (err) {
        res.json({
            code: 0,
            message: '失败'
        })
    }
}