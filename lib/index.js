import express from 'express'
let app = express()

app.set('port', process.env.PORT || 3000)
app.listen()
console.log(`listening on ${app.get('port')}...`)
