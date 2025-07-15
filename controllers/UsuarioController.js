const path = require("path");
const bcryptjs = require ("bcryptjs")
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();


class UsuarioController {
    static async cadastrar(req,res) {
       const { nome, email, senha } = req.body;

       const hashSenha = await bcryptjs.hashSenha(senha, 10);

      const usuario = await prisma.usuario.create({
       
        data: {
          nome,
          email,
          senha: hashSenha, 
      }
      });
       res.json({
         usuarioId: usuario.id,
       });
    }


    static async login (req,res) {
      try {
        const { email, senha } = req.body;

        if ( !email || !senha ) {
          return res.status(400).json({ msg: "Email e senha são obrigatórios!"});
        }

        const usuario = await prisma.findUique({
          where: { email },
        });

        if ( !usuario ){
          return res.status(400).json({ msg: "Usuário não existe! "});
        }
        const correto = await bcryptjs.compare(senha, usuario.senha);
        if ( !correto ) {
          return res.status(400).json
        }
      }
    }
}

module.exports = UsuarioController;