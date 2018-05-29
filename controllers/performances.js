const Performance = require('../models/performance');

function performanceIndex(req, res, next){
  Performance
    .find()
    .exec()
    .then(performances => res.json(performances))
    .catch(next);
}

function performanceCreate(req, res, next){
  // req.body.createdBy = req.currentUser;
  Performance
    .create(req.body)
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

module.exports = {
  index: performanceIndex,
  create: performanceCreate,
  show: performanceShow,
  update: performanceUpdate,
  delete: performanceDelete
};
