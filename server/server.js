const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, '..', 'public');

app.use(express.static(publicDirectory));

app.get('/{*splat}', (request, response) => {
  response.sendFile(path.join(publicDirectory, 'index.html'));
});

app.listen(port, () => {
  console.log(`Phone Plus is running at http://localhost:${port}`);
});
