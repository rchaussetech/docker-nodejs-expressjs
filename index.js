// IMPORTAÇÃO DOS MODULOS DO NPM
const http = require("http")
const express = require("express")

// CRIAÇÃO DO EXPRESS APP
const app = express()

// DEFINIÇÃO DA ROTA BASE
app.get("/", (req, res) => res.send("Olá Mundo!"))

// CRIAÇÃO DO SERVIDOR HTTP
const server = http.createServer(app)

// FAZ O SERVIDOR RESPONDER NA PORTA 3000
server.listen(3000, () => console.log('Servidor rodando na porta %s.', 3000))
