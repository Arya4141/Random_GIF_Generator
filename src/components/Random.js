import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const {gif, loading , fetchData} = useGif();

  return (
    <div className='w-1/2 border-t-black bg-green-500 mx-auto mt-[40px] rounded-xl border-black border flex flex-col items-center' >
      <h1 className='font-bold mb-[8px] text-[30px]'>A RANDOM GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src= {gif} width="550" />)
      }
      
      <button className='w-11/12 mb-[20px] mt-[20px] bg-green-200 rounded-sm py-1 text-2xl' 
      onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Random
