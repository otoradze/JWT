const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/jwtAuth');

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getTasksById,
} = require('../controllers/tasks');

router.get('/', authenticateToken, getAllTasks);
router.post('/', createTask);
// -----------
router.get('/:id', getTask);
router.get('/tasks/:id', getTasksById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
