const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const studentController = require('./controllers/Students');

app.get('/', studentController.getAddNewStudentPage);
app.post('/add-student', studentController.addNewStudent);
app.get('/success', studentController.getAddingNewStudentSuccessPage);
app.get('/students-list', studentController.getStudentsListPage);

const errorController = require('./controllers/error');
app.use(errorController.getNotFoundPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
