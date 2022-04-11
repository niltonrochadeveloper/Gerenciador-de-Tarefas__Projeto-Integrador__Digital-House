
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
    },
    criar_tarefa_post: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const dadosParaCriarONovaTarefa = {
                    titulo: req.body.titulo,
                    conteudo: req.body.conteudo,
                    link: req.body.link,
                    quadroId: req.body.quadroId,
                    usuarioId: req.body.usuarioId,
                    rascunhoId: req.body.rascunhod,
                    comentarioId: req.body.comentarioId
                }

                const novaTarefaCriada = await models.Tarefa.create(dadosParaCriarONovaTarefa)

                res.redirect('/')
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    },
    criar_comentario_post: async (req, res) => {
        try {
            if(req.session.authenticated) {

                const dadosParaCriarONovoComentario = {
                    conteudo: req.body.conteudo,
                    link: req.body.link,
                    arquivoId: req.body.arquivoId,
                    usuarioId: req.body.usuarioId,
                    tarefaId: req.body.tarefaId
                }

                const novoComentarioCriado = await models.COmentarios.create(dadosParaCriarONovoComentario)

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


