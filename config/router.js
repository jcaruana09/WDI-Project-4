const router = require('express').Router();
const performances = require('../controllers/performances');
const auth = require('../controllers/auth');

router.route('/performances')
  .get(performances.index)
  .post(performances.create);

router.route('/performances/:id')
  .get(performances.show)
  .post(performances.reviewCreate)
  .put(performances.update)
  .delete(performances.delete);

router.delete('/performances/:id/reviews/:reviewId', performances.reviewDelete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
