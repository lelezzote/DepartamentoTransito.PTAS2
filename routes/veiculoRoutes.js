const router = require("express").Router();

const VeiculoController = require("../controllers/UsuarioController");

router.post("/cadastro", VeiculoController.cadastrar);

router.get("/todos", VeiculoController.buscarTodos);

module.exports = router;