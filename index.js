const express = require("express")
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const f = require("./functions")
const config = require("./config")

mongoose.connect(config.DBPATH, {useNewUrlParser: true, useUnifiedTopology: true})

const Accounts = mongoose.model('Accounts', { name: String, active: Boolean })

app.use(bodyParser.json())

app.get('/', f.hello)
app.get('/users', f.users)
app.post('/', f.insert)
app.post('/users', f.insertUser)
app.post('/accounts', (req, res) => {
    const data = req.body
    const account = new Accounts(data)
    account.save().then(() => res.send('Conta Salva!'))    
})
app.get('/accounts', async (req, res) => {
    const account = await Accounts.find({})
    res.send(account)
})
app.get('/accounts/:id', async (req, res) => {
    const account = await Accounts.findOne({_id:req.params.id})
    res.send(account)
})
app.put('/accounts/:id', async (req, res) => {
    const data = req.body
    const account = await Accounts.updateOne({_id:req.params.id}, data)
    res.send(account)
})

app.listen(config.PORT, () => {
    console.log(`Ouvindo na porta ${config.PORT}`)
})