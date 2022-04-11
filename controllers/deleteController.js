const models = require('../models')

const controller = {
    deletar_quadro_get_params: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const deletarQuadro = await models.Quadros.destroy({
                    where: {
                        id: req.params.id
                    }
                })

                res.redirect('/')
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    }
}


module.exports = controller


