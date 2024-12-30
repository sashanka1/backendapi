const mongoose = require ("mongoose");

module.exports = ()=>{
    return mongoose .connect( "mongodb+srv://sss:O7zd10huZJdAzt8U@cluster0.lhntb.mongodb.net/reactpagination?retryWrites=true&w=majority")
}