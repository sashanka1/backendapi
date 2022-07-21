 const express = require ("express");
 const cors = require ("cors")

 const app = express();

 app.use(express.json());
 app.use(cors());
 const carcont = require ("./controllers/car.controller")
 const todod = require("./controllers/todo.controller")

app.use("/car", carcont);
 app.use("/todo", todod)
// app.use("/carcount", carcont)
 module.exports  = app;