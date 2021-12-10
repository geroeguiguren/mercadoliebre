const express = require ("express");
const path = require ("path");


const app = express ();

app.listen (8000, () => console.log ("Servidor corriendo en el puerto 8000"));

app.use (express.static(path.join (__dirname, "public")))

app.get ("/", (req,res) => {

    res.sendFile (path.join(__dirname, "views/home.html"))
})

app.get ("/register", (req,res) => {

    res.sendFile (path.join(__dirname, "views/register.html"))
})