const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


class VeiculoController {
    static async cadastrar(req,res) {
      const veiculo = await prisma.veiculo.create({
       
        data: {
          placa: req.body.placa,
          modelo: req.body.modelo,
          cor: req.body.cor,
          ano: parseInt(req.body.ano),
        }
      });
       res.json({
         veiculoId: veiculo.id,
       });
    }


    static async buscarTodos(req,res) {
       const where = {};
       if(req.params.id = null){
        where.id = parseInt(req.params.id);
       }
       const veiculos = await prisma.veiculo.findMany({
        where: where,
       });
       res.json({
        veiculos,
       });
    }
}

module.exports = VeiculoController;