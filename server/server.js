require('dotenv').config()
let express = require('express')
let massive = require('massive')
let session = require('express-session')
const ctrl = require('./controllers/controller')
const postCtrl = require('./controllers/postController')

let app = express()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
)

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.delete('/auth/logout', ctrl.logout)
app.get('/api/user', ctrl.getSession)

app.post('/todo/post/:id', postCtrl.addPost)
app.put('/todo/edit/:id', postCtrl.editPost)
app.delete('/todo/remove/:id', postCtrl.deletePost)
app.get('/todo/list', postCtrl.getPosts)

app.post('/api/insert', ctrl.glads)
app.get('/api/schools', ctrl.getSchools)

app.post('/api/goodies', ctrl.goodies)
app.get('/api/companies', ctrl.getCompanies)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Whats for dinner???')
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} Shokupanmen are toasty`)
  })
})
