const Task = require('../models/Task');

module.exports = {
  tasks: async ({ status }) => {
    const filter = {};
    if (status) filter.status = status;
    return await Task.find(filter).sort({ createdAt: -1 });
  },

  task: async ({ id }) => {
    return await Task.findById(id);
  },

  createTask: async ({ input }) => {
    const task = new Task({
      title: input.title,
      description: input.description || '',
      dueDate: input.dueDate || null
    });
    return await task.save();
  },

  updateTask: async ({ id, input }) => {
    const updated = await Task.findByIdAndUpdate(id, input, { new: true });
    return updated;
  },

  deleteTask: async ({ id }) => {
    const res = await Task.findByIdAndDelete(id);
    return !!res;
  },

  changeStatus: async ({ id, status }) => {
    const updated = await Task.findByIdAndUpdate(id, { status }, { new: true });
    return updated;
  }
};




