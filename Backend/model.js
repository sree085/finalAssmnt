//Write missing code here
const mongoose=require('mongoose')

const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const EmpData = mongoose.model('employee', schema);
module.exports = EmpData;