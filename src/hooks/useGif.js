import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const RandomMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
  
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');

  async function fetchData() {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    }

  useEffect( () => {
    fetchData();
  },[] )

  return {gif, loading , fetchData};

}

export default useGif
