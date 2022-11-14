import  express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import connection from './Database/db.js';
import DefaultData from './default.js' 
import Route from './Routes/routes.js'
const app=express();
dotenv.config();

app.use(cors());
app.use('/',Route);

if(process.env.NODE_ENV==='production'){
    app.use(express.static("client/build"));
}

const PORT= process.env.PORT || 8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD
const URL=process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-iycemhb-shard-00-00.am4erpe.mongodb.net:27017,ac-iycemhb-shard-00-01.am4erpe.mongodb.net:27017,ac-iycemhb-shard-00-02.am4erpe.mongodb.net:27017/?ssl=true&replicaSet=atlas-r7doa8-shard-0&authSource=admin&retryWrites=true&w=majority`;
connection(URL);
app.listen(PORT,()=>console.log(`server is started successfully on port ${PORT}`));
DefaultData();