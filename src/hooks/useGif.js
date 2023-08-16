import React, { useEffect, useState } from 'react'
import axios from 'axios';
import tag from '../components/Tag';



const API_KEY = '5F7bSz9YGLZVuMpmgKH5XzS2VzqlEFUc';


const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false)
    
    const randUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
    async function fetchData(tag){
  
      setLoading(true)
  
      

      const {data} = await axios.get(tag ? (tagUrl):(randUrl));
      const imageSource = data.data.images.downsized_large.url;
      
      setGif(imageSource);
      
      setLoading(false);
  
    }
  
  
    useEffect(()=>{
      fetchData();
    },[])
  
    return {gif, loading, fetchData};
  
}

export default useGif