const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET_KEY = 'super-secret-api-key-12345';

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    secretKey: SECRET_KEY
  });
});

app.use('/api/tasks', taskRoutes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Task Manager running on http://localhost:${PORT}`);
  });
}

module.exports = app;
