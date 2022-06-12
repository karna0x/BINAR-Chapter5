// imports
const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routers = require('./routers/app')
const loginAPI = require("./controllers/app")

app.use(routers)

app.use(loginAPI)

//static files
app.use(express.static('public'))
app.use('/css/', express.static(__dirname + 'public/css'))
app.use('/js/', express.static(__dirname + 'public/js'))
app.use('/img/', express.static(__dirname + 'public/img'))
app.use('/assets/', express.static(__dirname + 'public/assets'))

//set views
// app.set('views', './views')
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/game', (req, res) => {
//     res.render('game')
// })

// app.get('/login', (req, res) => {
//     res.render('loginpage')
// })

// app.get("/users", (req, res) => {
//     res.json(users);
// })


// listen on port 3000
app.listen(port, () => console.info(`Listening on port 3000`))