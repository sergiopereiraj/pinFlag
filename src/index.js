import express from 'express'

import './config/environment'
import routes from './routes'
import './models'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/', routes)

const startServer = () => {
  app.listen(port, () => {
    console.log(`API running on http://127.0.0.1:${port}/`)
  })
}

// Rutas

app.get('/personajes', (req, res) => {
  axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/',
    responseType: 'json'
  })
    .then(function (response) {
      const resultado = response.data.results
      res.send(resultado)
    })
    .catch(error => {
      console.log(error)
    })
}
)

app.post('/nuevo', (req, res) => {
  // como enviar con sequelize
  res.send(req.body)
})

app.get('/buscador', (req, res) => {
  // filtrar por algun parametro
  res.send('Busca tu personaje')
})

startServer()
