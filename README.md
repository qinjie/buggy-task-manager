# Task Manager

A simple Express.js task management API with a web UI.

## Setup

```bash
npm install
```

## Running

```bash
# Start the server
npm start

# Start with auto-reload (development)
npm run dev
```

The app runs on `http://localhost:3000`.

## Testing

```bash
npm test
```

## API Endpoints

- `GET /api/tasks` -- List all tasks
- `GET /api/tasks/:id` -- Get a task by ID
- `GET /api/tasks/search?q=query` -- Search tasks by title
- `POST /api/tasks` -- Create a new task
- `PATCH /api/tasks/:id` -- Update a task
- `DELETE /api/tasks/:id` -- Delete a task
- `PUT /api/tasks/:id/complete` -- Toggle task completion
- `GET /api/health` -- Health check
