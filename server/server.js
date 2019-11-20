require('dotenv').config()
let express = require('express')
let massive = require('massive')

let app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Whats for dinner???')
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} Shokupanmen are toasty`)
  })
})
