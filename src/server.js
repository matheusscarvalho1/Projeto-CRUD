const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/')


const db = mongoose.connection

db.once('open', () => {
    console.log('Conectado no banco de dados!')
})

db.on('error', console.error.bind(console, 'connection error: '))

//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})

// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log (`Server is listening on port ${port}`))