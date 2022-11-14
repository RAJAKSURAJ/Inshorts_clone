import { data } from "./Constant/data.js";
import News from './Model/news-Schema.js'

const DefaultData=async()=>{
    try{
        // await News.deleteMany({})
         await News.insertMany(data);
        console.log("Data imported Succesfully")
    }
    catch(error){
        console.log('Error',error.message)
    }
}
export default DefaultData;