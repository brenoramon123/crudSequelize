const Express = require("express");
const app = Express();
app.set("port",3000);
const { engine } = require('express-handlebars');
const conn = require("./db/conn");
const Livro = require("./models/Livro")

//MIDDLEWARES
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(Express.static("public"));
app.use(Express.json())
const LivroRotas = require("./routes/livros.routes");
app.use(Express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('addUser');
});

app.use("/livros",LivroRotas)




app.listen(app.get("port"),()=>{
    try{
        console.log(`conectado a porta ${app.get("port")}`)
    }catch(error){
        console.log("deu erro")
    }
})