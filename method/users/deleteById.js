const { userModel } = require('../../schema/users')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 
    const { id } = req.query
    const { acknowledged, deletedCount } = await userModel.deleteOne({ id })
    if (acknowledged && deletedCount > 0) {
        return res.send('用户删除成功')
    }
    if(acknowledged){
        return res.send('用户已经删除')
    }
    return res.send('该用户不存在')
}