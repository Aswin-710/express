const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://ashok:ashok@cluster0.miwvn.mongodb.net/express?retryWrites=true&w=majority");
}

module.exports = ConnectDB;