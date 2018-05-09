var mongoose = require('mongoose');

var StudentdemoSchema = new mongoose.Schema({
  college: String,
  spl:String,
  TOFEL: String,
  quant: String,
  verbal: String,
  awa: String,
  CPI:String,
  maxcpi:String,
  undergrad:String,
  inserteddoc:{type:String, default:'1'},
  result:{type:String, default:'1'},
  diaplay:{type:String, default:'1'},
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Studentdemo', StudentdemoSchema);


     