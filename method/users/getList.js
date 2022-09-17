const { userModel } = require('../../schema/users')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 
    const users = await userModel.find({ id: { $gt: 0 } }, { password: 0, IDNumber: 0 })
    if (users) {
        return res.json(users)
    }
    return res.send('该用户不存在')
}