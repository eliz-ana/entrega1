const express = require("express");
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");

const app = express();
const PORT = 8080;

app.use(express.json());

// Usamos los routers montados en sus rutas base
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
