const { userModel } = require('../../schema/users')
const stringRandom = require('string-random')
module.exports = async function (req, res, next) {
    try {
        const form = req.body 
        const [{ id: lastUserId }] = await userModel.find().sort({ id: -1 }).limit(1)
        form["id"] = lastUserId + 1
        form["account"] = `bzzx-${form.id.toString().padStart(3, '0')}`
        const lastFourId = form.IDNumber.slice(-4)
        form["password"] = `${stringRandom(3, { numbers: false })}-${lastFourId}`
        console.log(form)
        if (await userModel.findOne({ IDNumber: form.IDNumber })) {
            return res.send('该身份证已经使用过了')
        }
        const result = await userModel.create(form)
        return res.send('create ok')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}