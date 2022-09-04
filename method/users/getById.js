const { userModel } = require('../../schema/users')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 
    const { id } = req.query
    const user = await userModel.findOne({ id })
    if (user) {
        return res.json(user)
    }
    return res.send('该用户不存在')
}