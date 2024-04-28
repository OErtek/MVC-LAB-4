exports.getNotFoundPage = (req, res) => {
    res.status(404).render('NotFound', {
        pageTitle: 'Not Found',
        message: 'Page not found'
    });
};
