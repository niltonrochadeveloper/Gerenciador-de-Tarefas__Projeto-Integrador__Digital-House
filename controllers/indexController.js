
const models = require('../models/')

const bcrypt = require('bcryptjs')

const controller = {
    index: async (req, res) => {
        try {

        if(req.session.authenticated) {
           
        

        const todasAsAreasDeTrabalho = await models.Areas.findAll({
                
            where: {
                usuarioId: req.session.authenticated.id
            },
            include: [
                {
                    association: 'quadros',
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
            
        })

        somaDeTarefas = 0        

        for(var i=0; i < todasAsAreasDeTrabalho[0].dataValues.quadros.length; i++) {
            somaDeTarefas += (todasAsAreasDeTrabalho[0].dataValues.quadros[i].dataValues.tarefas.length)
        }

        const qtdeDeQuadros = todasAsAreasDeTrabalho[0].dataValues.quadros.length

        res.render('index', {
            title: 'Task Manager PRO',
            areaId: req.params.id,
            qtdeDeQuadros,
            somaDeTarefas,
            todasAsAreasDeTrabalho,
            authenticated: req.session.authenticated,
            isAdmin: req.session.isAdmin
        })
    } else {
        res.redirect('/login')
    }


    } catch(erro) {
        res.redirect('/')
    }

    },
    areasdetrabalho: async (req, res) => {
        try {

            if(req.session.authenticated) {
    
            const usuario = await models.Usuarios.findOne({
                whre: {
                    email: req.session.authenticated.email
                },
                include: [
                    {
                        association: "areas",
                    where: {
                        id: req.session.authenticated.id
                    }
                }
                ]
            })
    
            const areaDeTrabalho = await models.Areas.findOne({
                
                where: {
                    usuarioId: req.session.authenticated.id
                }              
                
            })
    
            const tags = await models.Tags.findAll()
            const rascunhos = await models.Rascunhos.findAll()
    
            const todasAsAreasDeTrabalho = await models.Areas.findAll({
                
                where: {
                    usuarioId: req.session.authenticated.id
                }              
                
            })
    
            
    
            const quadrosAreaDeTrabalho = await models.Quadros.findAll({
                where: {
                areaId: areaDeTrabalho.id || req.params.id
            },
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
    
        })
    
        
        // console.log(todasAsAreasDeTrabalho)
           
            res.render('area', {
                title: 'Task Manager PRO' + req.params.id,
                areaId: req.params.id,
                usuario,
                tags,
                rascunhos,
                todasAsAreasDeTrabalho,
                areaDeTrabalho,
                quadrosAreaDeTrabalho,
                authenticated: req.session.authenticated,
                isAdmin: req.session.isAdmin
            })
    
        } else {
            res.redirect('/login')
        }
    
    } catch(erro) {
        res.redirect('/')
    }
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


