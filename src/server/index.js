import express from 'express';

const app = express();

app.get('/server.js', (req, res) => {
  res.status(403).send(null);
});
app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on %s', port));
