import axios from 'axios';

export const getNews=async()=>{
    const URL='';

    try{
        return await axios.get(`${URL}/news`);
    }
    catch(error){
        console.log('Error While calling get news api',error)
    }
}
export default getNews;