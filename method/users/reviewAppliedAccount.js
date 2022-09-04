const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')
const stringRandom = require('string-random')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 ,通过身份证判断
    const { IDNumber, role } = req.body
    const result = await appliedAccountsModel.findOne({ IDNumber }, { _id: 0, __v: 0 })
    if (!result) {
        return res.send('审核列表里面没有该用户，创建失败')
    }
    try {
        const form = JSON.parse(JSON.stringify(result))
        const [{ id: lastUserId }] = await userModel.find().sort({ id: -1 }).limit(1)
        form["id"] = lastUserId + 1
        form["account"] = `bzzx-${form.id.toString().padStart(3, '0')}`
        const lastFourId = form.IDNumber.slice(-4)
        form["password"] = `${stringRandom(3, { numbers: false })}-${lastFourId}`
        if (await userModel.findOne({ IDNumber: form.IDNumber })) {
            return res.send('该身份证已经使用过了')
        }
        form["role"] = role
        const createRes = await userModel.create(form)
        if (createRes) {
            const {acknowledged,deletedCount} = await appliedAccountsModel.deleteOne({ IDNumber })
            if(acknowledged && deletedCount >0){
                console.log('临时表内的数据删除成功')
            }
            if(acknowledged){
                console.log('已经删除')
            }
        }
        return res.send('create ok')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}