const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/lifecheck', (req, res) => {
  res.send('Pretty Healthy so far!')
})

app.listen(app.get('port'), () => {
  console.log(`The App listening on port ${app.get('port')}`)
})