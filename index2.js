import express from 'express'
const app = express()
app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send('Hello World')
});
app.post('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send('This is the response from POST request')
});