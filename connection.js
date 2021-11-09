const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://aswin:7101@cluster0.saalz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = ConnectDB;