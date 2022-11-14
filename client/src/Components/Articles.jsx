import {Box} from '@mui/material';
import {useEffect,useState} from 'react';
import {getNews} from '../Service/api'
import Article from './Article'
const Articles=()=>{
    const [news,setNews]=useState([]);
    useEffect(()=>{
        dailynews();
    },[])
 const dailynews=async()=>{
    let response=await getNews();
    console.log(response.data);
    setNews(response.data);
 }   
    return (
        <Box>
           {
             news.map(data =>(
                 <Article article={data}/>
             ))
           }
        </Box>
    )
}
export default Articles