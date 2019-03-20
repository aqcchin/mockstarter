const Project = require('../database/model.js');

module.exports = {
  get: function(req, res) {
    console.log('In GET...');

    // Retrieves a random project from the database
    Project.countDocuments((err, count) => {
      if (err) {
        console.log('Error', err);
      }
    
      // console.log('in count', count);
    
      var randomNum = Math.floor(Math.random() * count);

      Project.findOne().skip(randomNum)
      .then(data => {
        // console.log(data, 'data')
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('Error', err);
      });
    });
  },

  post: function(req, res) {
    console.log('In POST...');
  },

  delete: function(req, res) {
    console.log('In DELETE...');
  }
}