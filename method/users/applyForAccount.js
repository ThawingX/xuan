const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')

module.exports = async function (req, res, next) {
    try {
        const form = req.body
        const { IDNumber } = form
        if(!IDNumber){
            return res.send('invalid request')
        }
        if (await userModel.findOne({ IDNumber })) {
            return res.send('该身份证已经使用过了')
        }
        const result = await appliedAccountsModel.create(form)
        return res.send('apply ok')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}