
const models = require('../models')

const controller = {
    criar_quadro_post: async (req, res) => {
        try {
            if(req.session.authenticated) {

                if(req.body.titulo == null || typeof req.body.titulo == undefined || !req.body.titulo || req.body.titulo == "") {
                    var titulo = "Quadro Sem Título"
                } else {
                    var titulo = req.body.titulo
                }

                const dadosParaCriarONovoQuadro = {
                    titulo: titulo,
                    descricao: req.body.descricao,
                    areaId: req.body.areaId
                }

                const novoQuadroCriado = await models.Quadros.create(dadosParaCriarONovoQuadro)

                req.flash('success_msg', 'Quadro criado com sucesso')
                res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    },
    criar_tarefa_post: async (req, res) => {
        try {
            if(!req.session.authenticated) {
                req.flash('error_msg', 'Vocë precisa fazer login.')
                res.redirect('/login')
            }

            if(req.body.titulo == null || typeof req.body.titulo == undefined || !req.body.titulo || req.body.titulo == "") {
                var titulo = "Sem Título"
            } else {
                var titulo = req.body.titulo
            }

            if(req.body.prazo == null || typeof req.body.prazo == undefined || !req.body.prazo || req.body.prazo == "") {
                var prazo = new Date()
            } else {
                var prazo = req.body.prazo
            }

                const dadosParaCriarONovaTarefa = {
                    titulo: titulo,
                    conteudo: req.body.conteudo,
                    link: req.body.link,
                    prazo: prazo,
                    quadroId: req.body.quadroId,
                    usuarioId: req.body.usuarioId,
                    tagId: req.body.tagId,
                    rascunhoId: req.body.rascunhoId,
                    comentarioId: req.body.comentarioId
                }

                console.log(dadosParaCriarONovaTarefa)

                const novaTarefaCriada = await models.Tarefas.create(dadosParaCriarONovaTarefa)

                console.log(novaTarefaCriada)

                const areaDeTrabalho = await models.Areas.findOne({
                
                    where: {
                        usuarioId: req.session.authenticated.id
                    }              
                    
                })



                req.flash('success_msg', 'Tarefa criada com sucesso')
                res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)
            
        } catch(erro) {
            req.flash('error_msg', 'Náo foi possivel criar o quadro. Erro: '+ erro)

            res.redirect('/')
        }
    },
    criar_comentario_post: async (req, res) => {
        try {
            if(!req.session.authenticated) {
                res.redirect('/')
            }


                const dadosParaCriarONovoComentario = {
                    conteudo: req.body.conteudo,
                    link: "'/' + {{dataValues.tarefaId}} + '/' + {{dataVAlues.usuarioId}}",
                    arquivoId: JSON.parse(req.body.tarefaId),
                    usuarioId: req.session.authenticated.id,
                    tarefaId: JSON.parse(req.body.tarefaId)
                }

                const areaDeTrabalho = await models.Areas.findOne({
                
                    where: {
                        usuarioId: req.session.authenticated.id
                    }              
                    
                })

                // res.send(dadosParaCriarONovoComentario)

                const novoComentarioCriado = await models.Comentarios.create(dadosParaCriarONovoComentario)

                req.flash('success_msg', 'Comentário criado com sucesso')
                res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)
            
        } catch(erro) {
            res.redirect('/')
        }
    }
}


module.exports = controller


