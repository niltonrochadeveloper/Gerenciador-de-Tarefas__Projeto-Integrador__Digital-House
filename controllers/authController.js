
const models = require('../models/')
const bcrypt = require('bcryptjs')

const controller = {
    login: async (req, res) => {

        try {

            if(!req.session.authenticated) {
                res.render('login', {
                    layout: 'no',
                    authenticated: req.session.authenticated
                })

            } else {

                res.redirect('/')

            }       

        } catch(erro) {

            res.redirect('/')

        }

    },
    autenticar: async (req, res) => {

        try {

            const { email, senha } = req.body

            const usuario = await models.Usuarios.findOne({
                where: {
                    email: email
                }
            })

            if (!usuario) {
                var usuarioNaoCadastrado = true
            }

            if (usuario) {

                var result = bcrypt.compareSync(senha, usuario.senha); 

                if (!result) {
                    var senhaErrada = true
                } 

            }
            
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

                res.locals.authenticated.push(logado)

                if(res.locals.authenticated[0].autenticado.admin === 1) {
                    res.locals.isAdmin.push(true)
                    req.session.isAdmin = true
                }                

                req.session.authenticated = logado.autenticado

                // console.log(res.locals.authenticated[0])
                // console.log(res.locals.isAdmin[0])
                // console.log("Senha correta  ");

                res.redirect('/')

            } else {

                // console.log(res.locals.authenticated)
                // console.log("Senha errada");

                res.render('login', {
                    layout: 'no',
                    usuarioNaoCadastrado: usuarioNaoCadastrado,
                    senhaErrada: senhaErrada
                })
                   
                

            }            

        } catch(erro) {

            res.send(erro + ' não logou' + result)

        }

    },
    logout: async (req, res) => {

        req.session.destroy() 
        res.status(200).redirect('/')

    }
}


module.exports = controller


