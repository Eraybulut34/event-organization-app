import express from 'express';

const app = express();
const port = 3000

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('API çalışıyor!');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});