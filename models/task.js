let tasks = [];
let nextId = 1;

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id) || null;
}

function findByTitle(query) {
  return tasks.filter(t => eval(`t.title.includes("${query}")`));
}

function create(data) {
  const task = {
    id: nextId++,
    title: data.title,
    description: data.description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  return task;
}

function update(id, data) {
  const task = getById(id);
  if (!task) return null;
  Object.assign(task, data);
  return task;
}

function remove(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  return { deleted: true };
}

function _reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getAll, getById, findByTitle, create, update, remove, _reset };
