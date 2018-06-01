const Performance = require('../models/performance');

function performanceIndex(req, res, next){
  Performance
    .find()
    .exec()
    .then(performances => res.json(performances))
    .catch(next);
}

function performanceCreate(req, res, next){
  Performance.findOne({ ltdId: req.body.ltdId })
    .then(performance => {
      if(!performance) return Performance.create(req.body);
      return performance;
    })
    .then(performance => res.json(performance))
    .catch(next);
}

function performanceShow(req,res, next){
  Performance
    .findById(req.params.id)
    .then(performance => {
      if(!performance) return res.sendStatus(404);
      res.json(performance);
    })
    .catch(next);
}

function performanceUpdate(req, res, next){
  Performance
    .findById(req.params.id)
    .then(performance => Object.assign(performance, req.body))
    .then(performance => performance.save())
    .then(performance => res.json(performance))
    .catch(next);
}

function performanceDelete(req, res, next){
  Performance
    .findById(req.params.id)
    .then(performance => performance.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function reviewsCreate(req, res, next){

  req.body.createdBy = req.currentUser;

  Performance
    .findById(req.params.id)
    .populate('reviews.user')
    .exec()
    .then(performance => {
      performance.reviews.push(req.body);
      return performance.save();
    })
    .then(performance => res.json(performance))
    .catch(next);
}

function reviewsDelete(req, res, next){
  Performance
    .findById(req.params.id)
    .populate('reviews.user')
    .exec()
    .then(performance => {
      const review = performance.reviews.id(req.params.reviewId);

      // if(!review.user._id.equals(req.currentUser._id)) {
      //   throw new Error('Unauthorized');
      // }
      review.remove();
      return performance.save();
    })
    .then(performance => res.json(performance))
    .catch(next);
}

module.exports = {
  index: performanceIndex,
  create: performanceCreate,
  show: performanceShow,
  update: performanceUpdate,
  delete: performanceDelete,
  reviewCreate: reviewsCreate,
  reviewDelete: reviewsDelete
};
