const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', (req, res) => {
  res.json(Task.getAll());
});

router.get('/search', (req, res) => {
  const results = Task.findByTitle(req.query.q);
  res.json(results);
});

router.get('/:id', (req, res) => {
  const task = Task.getById(parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

router.post('/', (req, res) => {
  const task = Task.create(req.body);
  res.status(201).json(task);
});

router.patch('/:id', (req, res) => {
  const task = Task.update(parseInt(req.params.id), req.body);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

router.delete('/:id', (req, res) => {
  const result = Task.remove(parseInt(req.params.id));
  res.json(result);
});

router.put('/:id/complete', (req, res) => {
  const task = Task.getById(parseInt(req.params.id));
  task.completed = !task.completed;
  res.json(task);
});

module.exports = router;
