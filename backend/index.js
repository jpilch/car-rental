const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from MotoRent API!').end()
})

app.get('/api/cars', (req, res) => {
    res.json({'test': 'test'})
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})