const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/description')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

module.exports = router;
