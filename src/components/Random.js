import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import tag from './Tag';



const API_KEY = '5F7bSz9YGLZVuMpmgKH5XzS2VzqlEFUc';

const Random = () => {

  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false)

  

  // async function fetchData(){

  //   setLoading(true)

  //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
    
  //   setGif(imageSource);

  //   setLoading(false);

  // }


  // useEffect(()=>{
  //   fetchData();
  // },[])

  const {gif, loading, fetchData} = useGif();


  
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className=" mt-[15px] uppercase text-center text-4xl  font-bold">A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="" width="450" className='text-3xl underline font-bold' />)
      }

      <button 
      onClick={() => fetchData()}
      className="bg-yellow-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mb-[20px] border border-gray-400 rounded shadow">
        Generate
      </button>
    </div>
  )
}

export default Random