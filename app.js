const express = require('express')
const app = express()
const { router } = require('./router/standard-entry')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3300

app.use(jsonParser)
app.use(urlencodedParser)
// app.use(expressFormidable())
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})