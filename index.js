const express = require ("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Departamento de Trânsito");
}); 

const veiculoRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos", veiculoRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
const UsuarioController = require('./controller/UsuarioController');
app.use("/usuarios", usuarioRoutes);

app.get("/areaLogada", UsuarioController.verificarAuteticacao, (req, res) => {
    res.json({
        msg:"Você está logado com ID: "
        + req.usuarioID
        + "Você está permitido a acessar essa area logada"
    });
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Erro:" + JSON.stringify(err));
    } else {
        console.log("Aplicação rodando em http://localhost:8000");
    }
});






