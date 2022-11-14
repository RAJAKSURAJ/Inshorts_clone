import { data } from "../Constant/data.js";
import News from "../Model/news-Schema.js"

export const getnews=async(request,response)=>{
    try{
        let data=await News.find({});
        response.status(200).json(data);
    }
    catch(error){
        response.status(500).json({message:data.message});
    }
}