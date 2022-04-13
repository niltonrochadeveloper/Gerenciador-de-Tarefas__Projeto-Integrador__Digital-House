
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

                // req.flash('success_msg', 'Usuário logado.')
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
            req.flash('error_msg', 'Houve algum erro na página. Erro: '+ erro)
            res.redirect('/login')
        }
    },
    cadastrar_novo_usuario_post: async (req, res) => {
        try {

            var erroNomeNaoPodeSerVazio = []
            var erroSobreNaoPodeSerVazio = []
            var erroEmailNaoPodeSerVazio = []
            var erroEmailJaExiste = []
            var erroSenhaNaoPodeSerVazio = []
            var erroConfirmarSenhaNaoPodeSerVazio = []
            var erroSenhaNaoConfere = []
                        
            const { nome, sobre, email, senha, confirmarSenha } = req.body

            if(!nome || typeof nome == undefined || nome == null || nome == "") {
                erroNomeNaoPodeSerVazio.push({nomeNaoPodeSerVazio: "O campo nome não pode ser vazio"})
            }

            if(!sobre || typeof sobre == undefined || sobre == null || sobre == "") {
                erroSobreNaoPodeSerVazio.push({sobreNaoPodeSerVazio: "O campo sobre não pode ser vazio"})
            }

            const emailJaExiste = await models.Usuarios.findOne({
                where: {
                    email: email
                }
            })

            if(emailJaExiste) {
                erroEmailJaExiste.push({emailJaExiste: "Este e-mail está sendo usado por outro usuário."})
            }

            if(!email || typeof email == undefined || email == null || email == "") {
                erroEmailNaoPodeSerVazio.push({emailNaoPodeSerVazio: "O campo e-mail não pode ser vazio"})
            }

            if(!senha || typeof senha == undefined || senha == null || senha == "") {
                erroSenhaNaoPodeSerVazio.push({senhaNaoPodeSerVazio: "O campo senha não pode ser vazio"})
            }

            if(!confirmarSenha || typeof confirmarSenha == undefined || confirmarSenha == null || confirmarSenha == "") {
                erroConfirmarSenhaNaoPodeSerVazio.push({confirmarSenhaNaoPodeSerVazio: "O campo confirmar Senha não pode ser vazio"})
            }

            var confirmarSenhaHash = bcrypt.hashSync(confirmarSenha, salt)
            const senhaConfirmada = bcrypt.compareSync(senha, confirmarSenhaHash);

            if(!senhaConfirmada) {
                erroSenhaNaoConfere.push({senhaNaoConfere: "Senha digitada não confere"})
            } else {
                var senhaHash = bcrypt.hashSync(senha, salt)
            }

            if(erroNomeNaoPodeSerVazio.length > 0 || erroSobreNaoPodeSerVazio.length > 0 || erroEmailNaoPodeSerVazio.length > 0 || erroEmailJaExiste.length > 0 || erroSenhaNaoPodeSerVazio.length > 0 || erroConfirmarSenhaNaoPodeSerVazio.length > 0 || erroSenhaNaoConfere.length > 0) {
                         
                res.render('cadastrar', {
                    title: "Cadastrar Novo Usuário no Task Manager PRO",
                    layout: 'no',
                    nome: nome,
                    sobre: sobre,
                    email: email,
                    erroNomeNaoPodeSerVazio: erroNomeNaoPodeSerVazio[0],
                    erroSobreNaoPodeSerVazio: erroSobreNaoPodeSerVazio[0],
                    erroEmailNaoPodeSerVazio: erroEmailNaoPodeSerVazio[0],
                    erroEmailJaExiste: erroEmailJaExiste[0],
                    erroSenhaNaoPodeSerVazio: erroSenhaNaoPodeSerVazio[0],
                    erroConfirmarSenhaNaoPodeSerVazio: erroConfirmarSenhaNaoPodeSerVazio[0],
                    erroSenhaNaoConfere: erroSenhaNaoConfere[0]

                })

            } else {

                const novoUsuarioCriadoComSucesso = await models.Usuarios.create({
                    nome: nome,    
                    email: email,            
                    sobre: sobre,
                    senha: senhaHash,
                })


               async function autenticandoNovoUsuario() {
                   
                const usuario = await models.Usuarios.findOne({
                    where: {
                        email: email
                    }
                })
                
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

                const createNovaArea = await models.Areas.create({
                    titulo: 'Nova Área de ' + logado.autenticado.nome,
                    descricao: '',
                    link: '',
                    usuarioId: logado.autenticado.id
                })

               }

               await autenticandoNovoUsuario().then(sucesso => {
                    req.flash('success_msg', 'Usuário Criado e Autênticado.')
                    res.redirect('/')
               }).catch(erro => {
                   req.flash('error_msg', 'Houve algum erro na autênticaçao: Erro:' + erro)
                   res.redirect('/cadastrar')
               })

            }

        } catch(erro) {

            res.send(erro)
        }

    },
    
    logout: async (req, res) => {
        
        req.session.destroy()
        res.status(200).redirect('/')

    }
}


module.exports = controller


