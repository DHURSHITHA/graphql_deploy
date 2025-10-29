const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  status: { type: String, enum: ['TODO','IN_PROGRESS','DONE'], default: 'TODO' },
  dueDate: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
