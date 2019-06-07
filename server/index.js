require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive')

      const app = express()
      const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

      app.use(express.json())
      app.use(session({
          secret: SESSION_SECRET,
          saveUninitialized: false,
          resave: false,
          cookie: {
              maxAge: 1000 * 60 * 60
          }
      }))

      massive(CONNECTION_STRING).then((database) => {
          app.set('db', database)
          console.log("Database good to go!")
          app.listen(SERVER_PORT, () => console.log(`Hulk Smashing on ${SERVER_PORT}`))
      })