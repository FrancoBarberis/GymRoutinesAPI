// infrastructure/http/server.ts
// SE ENCARGA DE CREAR LA APP CON EXPRESS Y DEFINIR MIDDLEWARES

import express from "express";

export const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Hola mundo");
});