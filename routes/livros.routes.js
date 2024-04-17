const express = require('express');
const router = express.Router();


const Livro = require('../models/Livro');

// Rota para adicionar um livro
router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        const novoLivro = await Livro.create(req.body);
        res.status(201).send(novoLivro);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar livro');
    }
});

module.exports = router;