import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag, setTag] = useState('');
  const {gif, loading,  fectchData} = useGif();

  return (
    <div className='w-1/2 border-t-black bg-blue-500 mx-auto mt-[40px] rounded-xl border-black border flex flex-col items-center' >
      <h1 className='font-bold mb-[8px] text-[30px]'> RANDOM {tag} GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src= {gif} width="550" />)
      }

      <input 
        className='w-11/12 mb-[8px] mt-[10px] bg-blue-200 rounded-sm py-1 text-center text-2xl'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      
      <button className='w-11/12 mb-[20px] mt-[3px] bg-blue-200 rounded-sm  py-1 text-2xl' 
      onClick={() => fectchData()}>
        Generate
      </button>
    </div>
  )
}

export default Tag
