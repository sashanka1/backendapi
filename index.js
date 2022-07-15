 const express = require ("express");
 const cors = require ("cors")

 const app = express();
 app.use(cors());
 app.use(express.json());

 const carcont = require ("./controllers/car.controller")

app.use("/car", carcont);
// app.use("/carcount", carcont)
 module.exports  = app;