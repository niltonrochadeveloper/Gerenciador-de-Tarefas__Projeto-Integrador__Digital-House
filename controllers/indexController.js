
const models = require('../models/')

const bcrypt = require('bcryptjs')

const controller = {
    index: async (req, res) => {

        if(req.session.authenticated) {

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
            areaDeTrabalho: areaDeTrabalho,
            authenticated: req.session.authenticated,
            isAdmin: req.session.isAdmin
        })

    } else {
        res.redirect('/login')
    }

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

                const logado = {
                    autenticado: {
                    id: usuario['id'],
                    nome: usuario['nome'],
                    email: usuario['email'],
                    sobre: usuario['sobre'],
                    admin: usuario['nivelId']
                }

                }

                // var verdadeiro = true
                res.locals.authenticated.push(logado)
                


                if(res.locals.authenticated[0].autenticado.admin === 1) {
                    res.locals.isAdmin.push(true)
                    req.session.isAdmin = true
                }

                
                req.session.authenticated = logado.autenticado

                console.log(res.locals.authenticated[0])
                console.log(res.locals.isAdmin[0])

                console.log("Senha correta  ");
            } else {
                console.log(res.locals.authenticated)
                console.log("Senha errada");
            }

            res.redirect('/')

        } catch(erro) {

            res.send(erro + '   não logou')

        }

        

    },
    logout: async (req, res) => {
        req.session.destroy(function(err){
            if(err){
               console.log(err);
            }else{
                // req.end();
                res.redirect('/login');
            }
         });

         res.redirect('/login');

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


