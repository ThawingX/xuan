const mongoose = require("mongoose")
const model = mongoose.model

const StandardSchema = mongoose.Schema({
  key: String,
  chName: String,
  enName: String,
  state: String,
  CCS: String,
  ICS: String,
  pubDate: String,
  doDate: String,
  mainDepartment: String,
  centialDepartment: String,
  pubDepartment: String,
  comment: String,
  type: String,
  url:String,
})

const Standard = model('Standard',StandardSchema )

module.exports = {
  Standard
}