const express = require('express');

const PORT = 5050;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const server = app.listen(PORT, () => {
    console.log(`Example app listening at ${PORT}`);
  });

module.exports = server; 