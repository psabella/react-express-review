// connect the controller to the router
const controller = require('./controller');
// use docs to know more
const router = require('express').Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  // : is a placeholder for req.params
  // (if it was a ?, it would be a placeholder for req.query)
  .route('/:index')
  .delete(controller.delete)

module.exports = router;