const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


class VeiculoController {
    static async cadastrar(req,res) {
      const veiculo = await prisma.veiculo.create({
       
        data: {
          placa: req.body.placa,
          modelo: req.body.modelo,
          ano: parseInt(req.body.ano),
          cor: req.body.cor,
        }
      });
       res.json({
         veiculoId: veiculo.id,
       });
    }


    static buscarTodos(req,res) {}
}

module.exports = VeiculoController;