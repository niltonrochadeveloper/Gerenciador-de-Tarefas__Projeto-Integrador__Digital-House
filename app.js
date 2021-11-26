const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//criando link para o diretório public (css, js, imagens e outros)
app.use(express.static(path.join(__dirname, 'public')))

// importando a rota a utilizar na Home
const indexRouter = require('./routes/index')

//usando a rota importada
app.get('/', indexRouter)
app.post('/', indexRouter)


//servidor local onde vai rodar a aplicação
app.listen(port, () => {
    console.log('Rodando na url http://localhost:' + port)
})
