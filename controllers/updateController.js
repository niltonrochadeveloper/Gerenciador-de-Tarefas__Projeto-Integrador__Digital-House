
const models = require('../models')

const controller = {
    atualizar_dados_de_usuario_post: async (req, res) => {
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
            if(req.session.authenticated) {
                res.send('atualizar tarefa de quadro')
            } else {
                res.redirect('/')
            }
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


