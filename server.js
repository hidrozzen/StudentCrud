const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// Serve index.html from same folder
app.use(express.static(__dirname)); // Serve static files (like index.html)

let students = []; // In-memory store

// CREATE
app.post('/students', (req, res) => {
  students.push(req.body);
  res.json({ message: 'Student added' });
});

// READ ALL
app.get('/students', (req, res) => {
  res.json(students);
});

// READ ONE
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s && s.id === req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  res.json(student);
});

// UPDATE
app.put('/students/:id', (req, res) => {
  const index = students.findIndex(s => String(s.id) === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });

  students[index] = {
    ...req.body,
    id: req.params.id
  };
  res.json({ message: 'Updated' });
});

// DELETE
app.delete('/students/:id', (req, res) => {
  students = students.filter(s => String(s.id) !== req.params.id);
  res.json({ message: 'Deleted!' });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
