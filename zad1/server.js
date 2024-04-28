const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(express.static('public/styles.css'));

let students = [];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('Home');
});


app.get('/success', (req, res) => {
  res.render('Success');
});


app.get('/students-list', (req, res) => {
  res.render('List', { students: students });
});


app.post('/add-student', (req, res) => {
  const newStudent = {
    name: req.body.name
  };
  students.push(newStudent);
  res.redirect('/success');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} numaralı bağlantı noktasında çalışıyor`);
});
