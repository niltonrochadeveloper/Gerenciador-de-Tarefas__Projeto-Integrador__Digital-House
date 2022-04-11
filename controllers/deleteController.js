const models = require('../models')

const controller = {
    deletar_usuario_get_params: async (req, res) => {
        try {
            if(req.session.isAdmin) {

                const deletarUsuario = await models.Usuario.destroy({
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
    },
    deletar_area_get_params: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const deletarArea = await models.Areas.destroy({
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
    },
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
    },
    deletar_tarefa_get_params: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const deletarTarefa = await models.Tarefas.destroy({
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
    },
    deletar_comentario_get_params: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const deletarComentario = await models.Comentarios.destroy({
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


