const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


const studentController = require('./controllers/Students');


app.get('/', studentController.getAddNewStudentPage);

app.post('/add-student', studentController.addNewStudent);


const errorController = require('./controllers/error');
app.use(errorController.getNotFoundPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı bağlantı noktasında çalışıyor`);
});
