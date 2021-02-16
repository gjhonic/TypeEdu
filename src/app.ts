import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/public',express.static('public'));

app.get('/', (req, res) => {
    res.render('view/index.ejs');
});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});