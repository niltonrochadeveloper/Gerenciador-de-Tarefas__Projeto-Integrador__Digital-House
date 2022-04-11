
const models = require('../models')

const controller = {
    atualizar_tarefa_de_quadro_post: async (req, res) => {
        try {
            if(req.session.authenticated) {
                res.send('atualizar tarefa de quadro')
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    }
}


module.exports = controller


