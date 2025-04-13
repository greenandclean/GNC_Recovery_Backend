const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mock routes
app.post('/login', (req, res) => {
  res.json({ message: 'Login successful', token: 'mock-token' });
});

app.post('/add-executive', (req, res) => {
  res.json({ message: 'Executive added successfully' });
});

app.post('/add-ptp', (req, res) => {
  res.json({ message: 'PTP added successfully' });
});

app.get('/executive/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'John Doe', status: 'Active' });
});

app.get('/ptp', (req, res) => {
  res.json([{ id: 1, date: '2024-04-10', remarks: 'Will pay soon' }]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
