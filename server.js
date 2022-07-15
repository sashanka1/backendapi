const connect = require ("./config/db")
const app = require ("./index");

const port = process.env.PORT || 5400
app.listen(port, async()=>{
try {
    await connect();
    console.log("listening on  port 5400")
} catch (error) {
    console.log(error);
}
})