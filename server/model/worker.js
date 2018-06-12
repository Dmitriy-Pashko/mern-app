const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkersSchema = new Schema({
  name: String,
  bdate: Number,
  position: String,
  salary: Number,
});

module.exports = mongoose.model('workers_list', WorkersSchema, 'workers_list');
