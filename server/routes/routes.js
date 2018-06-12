const express = require('express');
const Worker = require('../model/worker');

const router = express.Router();

function sendError(res) {
  return function (e) {
    return res.status(500).send(e);
  };
}

router.get('/workers', function (req, res) {
  Worker.find()
    .exec()
    .then((workers) => {
      return res.json(workers);
    })
    .catch(sendError(res));
});

router.post('/workers', function (req, res) {
  const worker = new Worker(req.body);
  worker.save()
    .then((newWorker) => {
      res.send(newWorker);
    })
    .catch(sendError(res));
});

router.delete('/workers/:worker_id', function (req, res) {
  Worker.remove({ _id: req.params.worker_id })
    .then(() => {
      return res.json({ message: 'worker removed succesfully' });
    })
    .catch(sendError(res));
});

router.put('/workers/:worker_id', function (req, res) {
  Worker.findByIdAndUpdate(req.params.worker_id, req.body, { new: true })
    .exec()
    .then((worker) => {
      return res.send(worker);
    })
    .catch(sendError(res));
});

module.exports = router;
