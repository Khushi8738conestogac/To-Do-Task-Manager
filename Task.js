const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low'
  },
  status: {
    type: String,
    enum: ['Incomplete', 'Complete'],
    default: 'Incomplete'
  }
});

module.exports = mongoose.model('Task', TaskSchema);
