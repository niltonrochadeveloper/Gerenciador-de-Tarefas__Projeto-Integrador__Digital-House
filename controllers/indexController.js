
const models = require('../models/')

const bcrypt = require('bcryptjs')

const controller = {
    index: async (req, res) => {

        // if(authenticated) {

        const usuarioEmail = "jornalista.nilton@gmail.com"
        const areaSelecionada = 1

        // const usuarioEmail = "nilton.silva@grupocard.com.br"
        // const areaSelecionada = 2

        // const usuarioEmail = req.query.email
        // const areaSelecionada = req.query.areaId

        const usuario = await models.Usuarios.findOne({
            where: {
                email: usuarioEmail
            },
            include: [
                {
                    association: "areas",
                    where: {
                        id: areaSelecionada
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
            areaDeTrabalho: areaDeTrabalho
        })

    // } else {
    //     res.redirect('/login')
    // }

    },
    login: async (req, res) => {
        res.render('login', {
            layout: 'no'
        })
    },
    autenticar: async (req, res) => {

        try {

            const { email, senha } = req.body

            const usuario = await models.Usuarios.findOne({
                where: {
                    email: email
                }
            })

            var result = bcrypt.compareSync(senha, usuario.senha);


        
            if (result) {
                console.log("Senha correta  ");
            } else {
                console.log("Senha errada");
            }

            res.redirect('/')

        } catch(erro) {

            res.send(erro + '   não logou')

        }

        

    },
    areasdetrabalho: async (req, res) => {

    },
    quadros: async (req, res) => {
        
    },
    rascunhos: async (req, res) => {
        
    }
}


module.exports = controller


