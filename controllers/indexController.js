
const models = require('../models/')

const bcrypt = require('bcryptjs')

const controller = {
    index: async (req, res) => {

        if(req.session.authenticated) {

        // const usuarioEmail = "nilton.silva@grupocard.com.br"
        // const areaSelecionada = 2

        // const usuarioEmail = req.query.email
        // const areaSelecionada = req.query.areaId

        const usuario = await models.Usuarios.findOne({
            where: {
                email: req.session.authenticated.email
            },
            include: [
                {
                    association: "areas",
                    where: {
                        id: req.session.authenticated.id
                    },
                    include: [
                        {
                        association: "quadros",
                        include: [
                            { 
                                association: "tarefas",
                                include: [
                                    {
                                        association: "usuarios"
                                    },
                                    {
                                        association: "tags"
                                    },
                                    {
                                        association: "rascunhos"
                                    },
                                    {
                                        association: "comentarios",
                                        include: [
                                            {
                                                association: "usuarios"
                                            }
                                        ]
                                    }
                                ]
                            }          
                        ]
                        }
                    ]
                }
            ]
            
        })
    

        // console.log(areaDeTrabalho.areas[0].quadros)
        // res.send(areaDeTrabalho)

        const areaDeTrabalho = usuario.areas[0].quadros

        res.render('index', {
            title: 'Task Manager PRO',
            areaDeTrabalho: areaDeTrabalho,
            authenticated: req.session.authenticated,
            isAdmin: req.session.isAdmin
        })

    } else {
        res.redirect('/login')
    }

    },
    areasdetrabalho: async (req, res) => {

    },
    adicionarQuadro: async (req, res) => {

        const { titulo, descricao, areaId, tarefaId } = req.body

        await models.Usuario.create({
            titulo: titulo,
            descricao: descricao,
            areaId: areaId,
            tarefaId: tarefaId
        })

        res.redirect('/')

    },
    rascunhos: async (req, res) => {
        
    }
}


module.exports = controller


