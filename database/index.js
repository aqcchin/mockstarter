const mongoose = require('mongoose');
const Project = require('./model.js');

mongoose.connect('mongodb://mongo/mongo-description');
// mongoose.connect('mongodb://localhost:27017/description');


const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error connecting to database...'));
db.once('open', () => {
  console.log('Connected to the database!')
})

var saveData = function(data) {
  data.forEach(item => {
    var project = new Project(item);

    project.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Saved to the database!');
      }
    });
  });
};

module.exports = { db, saveData };