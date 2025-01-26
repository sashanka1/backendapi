 const express = require ("express");
 const cors = require ("cors")
 const  cookieParser = require('cookie-parser')
 const app = express();
app.use(cookieParser());  // to use the cookie providing the npm packege to app;
 app.use(express.json());
 app.use(cors({
    origin: ['https://aqua-world.vercel.app', "http://localhost:3000","https://todo-without-backend.netlify.app","https://todo-with-backend-sashanka.netlify.app","https://spent-data.vercel.app",]
 }));
 const {validataLogin} = require("./middlewares/validateLogin")
 const {validataSignUp} = require("./middlewares/validateSignUp")
 const carcont = require ("./controllers/car.controller")
 const spentcont = require ("./controllers/spent.controller")
 const todod = require("./controllers/todo.controller")
 const aqua = require("./controllers/aqua.controllers")
 const cart = require("./controllers/cart.controllers")
 const order = require("./controllers/order.controllers")
 const {register,login,UpdateAddress,userdata,deleteaddress} = require("./controllers/auth.controller");


app.use("/car", carcont);
app.use("/spent", spentcont);
 app.use("/todo", todod);
 app.use("/aquap",aqua);
 app.use("/cartp",cart);
 app.use("/order",order)
 app.post("/register",validataSignUp, register)


app.post("/login",validataLogin, login)
app.patch("/update_address",UpdateAddress)
app.delete("/deleteaddress", deleteaddress) // delete the address of a perticular user;
app.get("/userdata/:id",userdata)

// app.use("/carcount", carcont)
 module.exports  = app;