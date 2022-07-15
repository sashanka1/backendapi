const mongoose = require ("mongoose");

module.exports = ()=>{
    return mongoose .connect( "mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/reactpagination?retryWrites=true&w=majority")
}