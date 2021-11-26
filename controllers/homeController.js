
const homeController = {
    index: (req, res) => {
        return res.render('index', {title: 'Home'})
    }
}


module.exports = homeController


