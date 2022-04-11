
const models = require('../models/')

const bcrypt = require('bcryptjs')

const controller = {
    index: async (req, res) => {

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

        const todasAsAreasDeTrabalho = await models.Areas.findAll({
            
            where: {
                usuarioId: req.session.authenticated.id
            }              
            
        })

        const quadrosAreaDeTrabalho = await models.Quadros.findAll({
            where: {
            AreaId: areaDeTrabalho.id
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
       
        res.render('index', {
            title: 'Task Manager PRO',
            usuario: usuario,
            todasAsAreasDeTrabalho: todasAsAreasDeTrabalho,
            areaDeTrabalho: areaDeTrabalho,
            quadrosAreaDeTrabalho: quadrosAreaDeTrabalho,
            authenticated: req.session.authenticated,
            isAdmin: req.session.isAdmin
        })

    } else {
        res.redirect('/login')
    }

    },
    areasdetrabalho: async (req, res) => {
        try{

            if(!req.session.authenticated) {
                res.redirect('/')
            }

            const idDoQuadro= req.params.id

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

        const todasAsAreasDeTrabalho = await models.Areas.findAll({
            
            where: {
                usuarioId: req.session.authenticated.id
            }              
            
        })

        const quadrosAreaDeTrabalho = await models.Quadros.findAll({
            where: {
            AreaId: areaDeTrabalho.id
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

       
    res.render('index', {
        title: 'Task Manager PRO',
        usuario: usuario,
        todasAsAreasDeTrabalho: todasAsAreasDeTrabalho,
        areaDeTrabalho: areaDeTrabalho,
        quadrosAreaDeTrabalho: quadrosAreaDeTrabalho,
        authenticated: req.session.authenticated,
        isAdmin: req.session.isAdmin
    })

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


