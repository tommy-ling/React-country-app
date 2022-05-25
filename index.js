const express = require('express')
const cors = require('cors')
const axios = require('axios')

const port = process.env.PORT || 3001

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  const response = await axios.get('https://restcountries.com/v3/all?fields=name,population,region,subregion,capital,currencies,languages,borders,flags,tld,cca3')
  const { data } = response
  res.send(data)
})

app.listen(port, () => {console.log(`Server on port ${port}`)})