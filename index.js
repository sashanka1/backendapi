 const express = require ("express");
 const cors = require ("cors")

 const app = express();

 app.use(express.json());
 app.use(cors({
    origin: ['https://aqua-world.vercel.app', "http://localhost:3000","https://todo-without-backend.netlify.app","https://todo-with-backend-sashanka.netlify.app"]
 }));
 const carcont = require ("./controllers/car.controller")
 const todod = require("./controllers/todo.controller")
 const aqua = require("./controllers/aqua.controllers")
 const cart = require("./controllers/cart.controllers")
 const order = require("./controllers/order.controllers")
 const {register,login,UpdateAddress,userdata,deleteaddress} = require("./controllers/auth.controller")

app.use("/car", carcont);
 app.use("/todo", todod);
 app.use("/aquap",aqua);
 app.use("/cartp",cart);
 app.use("/order",order)
 app.post("/register", register)


app.post("/login", login)
app.patch("/update_address",UpdateAddress)
app.delete("/deleteaddress", deleteaddress) // delete the address of a perticular user;
app.get("/userdata/:id",userdata)

// app.use("/carcount", carcont)
 module.exports  = app;