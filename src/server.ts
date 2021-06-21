import express from 'express';

const app = express();
const port = 3000;

app.get('/test', (request, response) => {
  return response.json({ message: 'Olá NLW Togheter' })
})

app.post('/test-post', (request, response) => {
  return response.json({ message: 'Olá NLW Togheter method: post' })
})

app.listen(port, () => console.log(`Server on: http://localhost:${port}`))
