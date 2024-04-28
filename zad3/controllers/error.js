exports.getNotFoundPage = (req, res) => {
    res.status(404).render('NotFound', {
        title: 'NotFound',
        message: 'Not Found this page'
    });
};
