import express from 'express';
const app = express();

app.use(express.static('public', { 'extensions': ['html', 'js'] }));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});