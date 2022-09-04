const { userModel } = require('../../schema/users')
const bcrypt = require('bcrypt')
module.exports = async function (req, res, next) {
    // 暂时使用账号密码判断
    const { account, password } = req.body
    const user = await userModel.findOne({ account })
    if (!user) {
        return res.send('没有这个用户！')
    }
    if (!bcrypt.compareSync(password, user.password)) {
        return res.send('密码错误')
    }
    return res.send('登录成功')
}