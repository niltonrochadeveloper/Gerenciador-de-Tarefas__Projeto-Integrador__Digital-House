
const models = require('../models')

const controller = {
    trocar_tarefa_de_quadro_post: async (req, res) => {
        try {

            if(!req.session.authenticated) {
                res.redirect('/login')
            }
            
            const tarefa = await models.Tarefas.findByPk(req.params.id)   
            
            tarefa.quadroId = req.body.quadroId
            
            const teste = await tarefa.save()

            // res.send(teste)

            const areaDeTrabalho = await models.Areas.findOne({
                
                where: {
                    usuarioId: req.session.authenticated.id
                }              
                
            })

            req.flash('success_msg', 'Tarefa alterada de quadro com sucesso')
            res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)

        } catch(erro) {
            res.redirect('/')
        }
    },
    atualizar_dados_de_usuario_post: async (req, res) => {
        try {
            if(!req.session.authenticated) {
                res.redirect('/')
            }



            const areaDeTrabalho = await models.Areas.findOne({
                
                where: {
                    usuarioId: req.session.authenticated.id
                }              
                
            })

            req.flash('success_msg', 'Usuário alterado com sucesso')
            res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)

        } catch(erro) {
            res.redirect('/')
        }
    },
    atualizar_dados_de_area_post: async (req, res) => {
        try {
            if(req.session.authenticated) {
                res.send('atualizar tarefa de quadro')
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    },
    atualizar_quadro_post: async (req, res) => {
        try {
            if(req.session.authenticated) {
                res.send('atualizar tarefa de quadro')
            } else {
                res.redirect('/')
            }
        } catch(erro) {
            res.redirect('/')
        }
    },
    atualizar_tarefa_de_quadro_post: async (req, res) => {
        try {
            if(!req.session.authenticated) {
                res.redirect('/')
            }

            const tarefa = await models.Tarefas.findByPk(req.params.id)   
            
            if(req.body.titulo) {
                tarefa.titulo = req.body.titulo
            }

            if(req.body.conteudo) {
                tarefa.conteudo = req.body.conteudo
            }

            if(req.body.prazo) {
                tarefa.prazo = req.body.prazo
            }

            if(req.body.rascunhoId) {
                tarefa.rascunhoId = req.body.rascunhoId
            }

            if(req.body.quadroId) {
                tarefa.quadroId = req.body.quadroId
            }

            if(req.body.tagId) {
                tarefa.tagId = req.body.tagId
            }

            // res.send(req.body)
            
            const teste = await tarefa.save()

            // res.send(teste)

            const areaDeTrabalho = await models.Areas.findOne({
                
                where: {
                    usuarioId: req.session.authenticated.id
                }              
                
            })

            req.flash('success_msg', 'Tarefa alterada com sucesso')
            res.redirect('/area-de-trabalho/' + areaDeTrabalho.id)

        } catch(erro) {
            res.redirect('/')
        }
    },
    atualizar_comentario_de_tarefa_post: async (req, res) => {
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


