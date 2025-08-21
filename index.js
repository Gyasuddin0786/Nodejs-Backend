require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2><br><p>This is the about page of our simple Express app.</p>')    
})
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
