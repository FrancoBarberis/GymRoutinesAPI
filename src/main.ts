// MAIN SE ENCARGA DE:
// cargar variables de entorno
// levantar la BD
// inicializar contenedores de DI
// iniciar el server

import { app } from "./infrastructure/http/server.js";

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);
