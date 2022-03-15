const express = require('express')
const app = express()
const path = require('path')
const { handlebars, engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()
const port = process.env.PORT_ENV

var bcrypt = require('bcryptjs')
var saltRounds = 10
var salt = bcrypt.genSaltSync(saltRounds)
// var hash = bcrypt.hashSync(senha, salt);

//json
app.use(express.json());

//configurações

var minute = 60000


// config session
app.use(session({
    secret: 'meu_segredo',
    cookie: {
        maxAge: minute * 60,
    },
    resave: true,
    saveUninitialized: true
}));

//cookies
app.use(cookieParser());



//config
app.set('views', path.join(__dirname, 'views'))

//template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Body Parser
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// app.use(bodyParser.json())

//criando link para o diretório public (css, js, imagens e outros)
app.use(express.static(path.join(__dirname, 'public')))

// importando a rota a utilizar na Home
const indexRouter = require('./routes/index')

//usando a rota importada
app.get('/', indexRouter)


//servidor local onde vai rodar a aplicação
app.listen(port, () => {
    console.log('Rodando na url http://localhost:' + port)
})
