import express from 'express'
const app = express()
app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/home', (req, res) => {
    res.send('This is the home page')
})

app.get('/users', (req, res) => {
    res.send('This is the users page')
})