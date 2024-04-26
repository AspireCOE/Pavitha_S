const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(Incoming request: ${req.method} ${req.url});
  next();
});
app.post('/submit', (req, res) => {
  console.log('Form data:', req.body);
  res.send('Form submitted successfully!');
});
app.listen(port, () => {
  console.log(Server listening at http://localhost:${port});
});
