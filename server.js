const connect = require ("./config/db")
const app = require ("./index");

// var instance = new Razorpay({
//     key_id: 'rzp_test_J6QSaxNaVMONa',
//     key_secret: 'iyazw06zMjw6JwTAeUwuf5MK',
//   });

const port = process.env.PORT || 5400
app.listen(port, async()=>{
try {
    await connect();
    console.log("listening on  port" + " "+port)
} catch (error) {
    console.log(error);
}
})