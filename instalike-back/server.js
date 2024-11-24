import express from "express";
import routes from "./src/routes/postRoutes.js";

// Criando uma instância da aplicação Express
const app = express();
app.use(express.static("uploads"));
routes(app)

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});


//node --watch server.js
// npm run dev