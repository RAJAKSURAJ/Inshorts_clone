import mongoose from 'mongoose';

const connection=async(URL)=>{
    

    try{
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log("Database connected successfully")
    }
    catch(error){
        console.log('Error While connecting with database',error)
    }
}
export default connection;