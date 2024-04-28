
exports.getAddNewStudentPage = (req, res) => {
    res.render('AddNewStudent', {
        title: 'Yeni öğrenci ekle',
        heading: 'Yeni öğrenci ekle'
    });
};


exports.addNewStudent = (req, res) => {
 
    const fullName = req.body.fullName;
    const code = req.body.code;
    const name = req.body.name;
    const fieldOfStudies = req.body.fieldOfStudies;

    

    
    res.send('Öğrenci başarıyla eklendi!');
};
