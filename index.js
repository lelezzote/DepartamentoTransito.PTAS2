const express = require ("express");
const app = express();
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Departamento de Trânsito");
}); 

const veiculoRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos", veiculoRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
const UsuarioController = require('./controllers/UsuarioController');
app.use("/usuarios", usuarioRoutes);

app.get("/areaLogada", UsuarioController.verificarAutenticacao, (req, res) => {
    res.json({
        msg:
        "Você está logado com o o ID" +
        req.usuarioId +
        "e está permitido a acessar essa área"
    });
});

app.get("/areaAdmin", UsuarioController.verificarAutenticacao, UsuarioController.verificaAdmin, (req, res) => {
    res.json({
        msg:
        "Você é um administrador"
    });
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Erro:" + JSON.stringify(err));
    } else {
        console.log("Aplicação rodando em http://localhost:8000");
    }
});






