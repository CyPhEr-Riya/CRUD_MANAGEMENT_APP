const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false,useCreateIndex: true})
        console.log(`MongoDB connected : ${mongoose.con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB