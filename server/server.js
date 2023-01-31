import config from "../config/config";
import app from './express';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(config.mongoUri,{  useNewUrlParser: true,  useUnifiedTopology:true})
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection is open');
  });
mongoose.connection.on('error',(err)=>{
    console.log(err);
    throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err)=>{
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})