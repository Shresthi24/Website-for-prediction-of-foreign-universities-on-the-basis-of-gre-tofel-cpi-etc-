var mongoose = require('mongoose');



var CollegeSchema = new mongoose.Schema({
  constant:String,
  college: String,
  Branch:String,
  TOFEL: String,
  quant: String,
  verbal: String,
  awa: String,
  CPI:String,
  project:String,
  internship:String,
  research:String,
  undergrad:String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('College', CollegeSchema);


     