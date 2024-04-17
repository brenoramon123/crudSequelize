const express = require('express');
const router = express.Router();


const Livro = require('../models/Livro');

// Rota para adicionar um livro
router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        const novoLivro = await Livro.create(req.body);
        res.render("home");
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar livro');
    }
});

router.get("/",async (req, res) => {
    try {
        const livro = await Livro.findAll({raw:true});
        console.log(livro)
        res.status(201).render("home",{livro});
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao mostrar livros');
    }
})

router.get("/verMais/:id",async (req, res) => {
    try {
        const id = req.params.id
        const livro = await Livro.findOne({raw:true, where:{id:id}});
        console.log(livro)
        res.render("detalhe",{livro});
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao mostrar livros');
    }
})
module.exports = router;