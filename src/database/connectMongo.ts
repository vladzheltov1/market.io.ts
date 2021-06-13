const mongoose = require('mongoose');

export async function connect(){
    try{
        await mongoose.connect(
            "mongodb+srv://admin:"+process.env.MONGOPASSWORD+"@cluster0.1yip8.mongodb.net/market_io?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
        //Get the default connection
        const dbmongo = mongoose.connection;

        //Bind connection to error event (to get notification of connection errors)
        dbmongo.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }catch(error){
        console.error(`Error connecting to database - ${error.message}`);
    }
}
