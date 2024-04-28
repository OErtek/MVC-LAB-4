let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('AddNewStudent', {
        title: 'Add Student',
        heading: 'Add Student'
    });
};

exports.addNewStudent = (req, res) => {
    const newStudent = {
        id: nextId++,
        name: req.body.name
    };
    students.push(newStudent);
    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', {
        title: 'Success',
        message: 'Student added successfully!'
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', {
        title: 'Student List',
        students: students
    });
};
