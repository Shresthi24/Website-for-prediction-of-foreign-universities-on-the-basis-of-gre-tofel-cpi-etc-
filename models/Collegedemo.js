var mongoose = require('mongoose');



var CollegedemoSchema = new mongoose.Schema({
  constant:String,
  college: String,
  Branch:String,
  TOFEL: String,
  quant: String,
  verbal: String,
  awa: String,
  CPI:String,
  maxcpi:String,
  undergrad:String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Collegedemo', CollegedemoSchema);


     