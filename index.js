const express = require('express')
const app = express()

app.get('/page', (request, response) => {
  response.sendFile('./page.html', {root: __dirname})
})

app.listen(3000, () => console.log('Server is running...'))
 