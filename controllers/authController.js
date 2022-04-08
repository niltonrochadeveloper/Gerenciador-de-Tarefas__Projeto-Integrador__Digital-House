
const models = require('../models/')

var bcrypt = require ('bcryptjs')
var salt = bcrypt.genSaltSync(10)


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
    autenticar_post: async (req, res) => {

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
    cadastrar: async (req, res) => {
        try {
            res.render('cadastrar', {
                title: "Cadastrar Novo Usuário no Task Manager PRO",
                layout: 'no'
            })
        } catch(erro) {
            res.redirect('/login')
        }
    },
    cadastrar_novo_usuario_post: async (req, res) => {
        try {

            var erros = []
            var erroNomeNaoPodeSerVazio = []
            var erroSobreNaoPodeSerVazio = []
            // var erroNomeNaoPodeSerVazio = []
            // var erroNomeNaoPodeSerVazio = []
                        
            const { nome, sobre, email, senha, confirmarSenha } = req.body


            if(!nome || typeof nome == undefined || nome == null || nome == "") {
                erroNomeNaoPodeSerVazio.push({nomeNaoPodeSerVazio: "O campo nome não pode ser vazio"})
            }

            if(!sobre || typeof sobre == undefined || sobre == null || sobre == "") {
                erroSobreNaoPodeSerVazio.push({sobreNaoPodeSerVazio: "O campo sobre não pode ser vazio"})
            }

            if(!email || typeof email == undefined || email == null || email == "") {
                erros.push({emailNaoPodeSerVazio: "O campo e-mail não pode ser vazio"})
            }

            if(!senha || typeof senha == undefined || senha == null || senha == "") {
                erros.push({senhaNaoPodeSerVazio: "O campo senha não pode ser vazio"})
            }

            if(!confirmarSenha || typeof confirmarSenha == undefined || confirmarSenha == null || confirmarSenha == "") {
                erros.push({confirmarSenhaNaoPodeSerVazio: "O campo confirmarSenha não pode ser vazio"})
            }

            var confirmarSenhaHash = bcrypt.hashSync(confirmarSenha, salt)
            const senhaConfirmada = bcrypt.compareSync(senha, confirmarSenhaHash);

            if(!senhaConfirmada) {
                erros.push({senhaNaoConfere: "Senha digitada não confere"})
            } else {
                var senhaHash = bcrypt.hashSync(senha, salt)
            }

            if(erros.length > 0) {
                // res.send(erros)
                res.render('cadastrar', {
                    title: "Cadastrar Novo Usuário no Task Manager PRO",
                    layout: 'no',
                    nome: nome,
                    sobre: sobre,
                    email: email,
                    erroNomeNaoPodeSerVazio: erroNomeNaoPodeSerVazio[0],
                    erroSobreNaoPodeSerVazio: erroSobreNaoPodeSerVazio[0]

                })
            } else {

                const novoUsuarioCriadoComSucesso = await models.Usuarios.create({
                    nome: nome,                
                    sobre: sobre,
                    email: email,
                    senha: senhaHash,
                })

                if(novoUsuarioCriadoComSucesso) {
                    res.send('usuário criado com sucesso!')
                } else {
                    res.render('cadastrar', {
                        title: "Cadastrar Novo Usuário no Task Manager PRO",
                        layout: 'no',
                        nome: nome,
                        sobre: sobre,
                        email: email,
                        erroNomeNaoPodeSerVazio: erroNomeNaoPodeSerVazio[0],
                        erroSobreNaoPodeSerVazio: erroSobreNaoPodeSerVazio[0]
    
                    })
                }

            }

            

            // if(!novoUsuarioCriadoComSucesso) {
            //     res.re
            // }



        } catch(erro) {
            res.redirect('/cadastrar')
        }
    },
    logout: async (req, res) => {

        req.session.destroy() 
        res.status(200).redirect('/')

    }
}


module.exports = controller


