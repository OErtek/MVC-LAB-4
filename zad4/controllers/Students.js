let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('AddNewStudent', {
        pageTitle: 'Add New Student'
    });
};

exports.addNewStudent = (req, res) => {
    const newStudent = {
        id: nextId++,
        fullName: req.body.fullName,
        code: req.body.code,
        fieldOfStudies: req.body.fieldOfStudies
    };
    students.push(newStudent);
    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', {
        pageTitle: 'Success',
        message: 'Student added successfully!'
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', {
        pageTitle: 'Student List',
        students: students
    });
};
