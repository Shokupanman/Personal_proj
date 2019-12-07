require('dotenv').config()
let express = require('express')
let massive = require('massive')
let session = require('express-session')
const ctrl = require('./controllers/controller')
const postCtrl = require('./controllers/postController')
const stripeLoader = require('stripe')

let app = express()

const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  STRIPE_SECRET
} = process.env

app.use(express.static(`${__dirname}/../build`))
const path = require('path') // Usually moved to the start of file

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
)
app.use(require('body-parser').text())

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

const stripe = new stripeLoader(STRIPE_SECRET)

app.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 300,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })
    console.log(status)
    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Whats for dinner???')
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} Shokupanmen are toasty`)
  })
})
