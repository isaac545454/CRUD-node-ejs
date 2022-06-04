const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const mongoose = require('mongoose')

const linkRouter = require('./rotas/rotas')


mongoose.connect("mongodb://localhost:27017/links")
const db = mongoose.connection


db.on("err", ()=>{console.log('houve um erro')})
db.once('open', ()=>{console.log("conectado")})
app.set('view engine',  'ejs')
app.set('views', path.join(__dirname, 'template'))

app.use("/", express.json(), linkRouter)


app.listen(port, ()=>{console.log("servidor rodando")})