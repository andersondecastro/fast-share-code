module.exports = {
    hello: (req, res) => {
        res.send('essa é uma resposta')
    },
    users: (req, res) => {
        res.send([{name:'Anderson'}, {name: 'Dimitre'}])
    },
    insert: (req, res) => {
        res.send('foi inserido algo!')
    },
    insertUser: (req, res) => {
        const user = req.body
        res.send(user)
    }
}