
const models = require('../models')

const controller = {
    criar_quadro_post: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const dadosParaCriarONovoQuadro = {
                    titulo: req.body.titulo,
                    descricao: req.body.descricao,
                    areaId: req.body.areaId
                }

                const novoQuadroCriado = await models.Quadros.create(dadosParaCriarONovoQuadro)

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


