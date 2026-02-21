import e from "express";
import express from "express";
const app = express();
app.listen(8080);
const users=[
    {
        id:1,
        name:"ashu",
        email:"bathiniashwithagoud@gmail.com",
    },
    {
        id:2,
        name:"akshu",
        email:"bathiniakshithagoud@gmail.com",
    },
    {
        id:3,
        name:"abhi",
        email:"bathiniabhiramgoud@gmail.com",
    },
];
app.get("/", (req, res) => {
    res.json(users);
});
app.get("/:id", (req, res) => {
    const id=Number(req.params.id);
    const result=users.find((user)=>user.id === id);
    res.json(result);
});
app.post("/", (req, res) => {
    const user=req.body;
    users.push(user);
    res.json(users);
});
app.delete("/:id", (req, res) => {
    const id=Number(req.params.id);
    users=users.filter((user)=>user.id !== id);
    res.json(users);
});