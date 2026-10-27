const request = require('supertest');
const app = require('../server');
const Task = require('../models/task');

beforeEach(() => {
  Task._reset();
});

describe('GET /api/tasks', () => {
  test('returns empty array when no tasks exist', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('returns all tasks', async () => {
    Task.create({ title: 'Task 1' });
    Task.create({ title: 'Task 2' });
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });
});

describe('GET /api/tasks/:id', () => {
  test('returns a task by id', async () => {
    Task.create({ title: 'Test Task' });
    const res = await request(app).get('/api/tasks/1');
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Test Task');
  });

  test('returns 404 for non-existent task', async () => {
    const res = await request(app).get('/api/tasks/999');
    expect(res.status).toBe(404);
  });
});

describe('POST /api/tasks', () => {
  test('creates a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'New Task', description: 'A test task' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New Task');
    expect(res.body.completed).toBe(false);
  });
});
