 const express = require ("express");
 const cors = require ("cors")

 const app = express();

 app.use(express.json());
 app.use(cors());
 const carcont = require ("./controllers/car.controller")
 const todod = require("./controllers/todo.controller")
 const aqua = require("./controllers/aqua.controllers")
 const cart = require("./controllers/cart.controllers")
 const {register,login,UpdateAddress} = require("./controllers/auth.controller")

app.use("/car", carcont);
 app.use("/todo", todod);
 app.use("/aquap",aqua);
 app.use("/cartp",cart);
 app.post("/register", register)

app.post("/login", login)
app.patch("/update_address/:id",UpdateAddress)
// app.use("/carcount", carcont)
 module.exports  = app;