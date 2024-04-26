const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); 
});


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
