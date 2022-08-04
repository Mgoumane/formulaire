const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
app.engine('handlebars', engine({extname:'.handlebars', defaultLayout : "main"}));
app.set("view engine", "handlebars");

app.get("/", (req,res)=>{
    res.render("home")
})
app.get("/login", (req, res) => {
    res.render("login");
});

app.use(express.urlencoded({ extended: true }))
app.post("/login/register", (req, res) => {
    console.log(req.body);
    res.redirect("/")
});



app.listen(8000,(req, res)=> {
    console.log('Serveur lancé')
})
