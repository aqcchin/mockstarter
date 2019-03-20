const mongoose = require('mongoose');
const db = require('./index.js');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  images: [String],
  text: [String],
  rctext: [String]
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
