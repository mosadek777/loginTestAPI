const mongoose = require("mongoose")



const initConnection = ()=>{
    return mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>{
        console.log(`DataBase is connected.....1.`)
    })
    .catch((err)=>{
        console.log(`failed to connect`,err);
    })
}



module.exports = initConnection