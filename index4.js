import express from 'express';
const app = express();
app.listen(8080)
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/:id', (req, res) => {
    const id=req.params.id;
    res.send(id)
});
app.get('/:id/:name', (req, res) => {
    const id=req.params.id;
    const name=req.params.name;
    res.send(id+name);
});
app.get("/id/:id/name/:name", (req, res) => {
    const id=req.params.id;
    const name=req.params.name;
    res.send(id+name);
<<<<<<< HEAD
})
=======
})
>>>>>>> 879ae8ca2c81637c2742616085ae37fb35e794b1
