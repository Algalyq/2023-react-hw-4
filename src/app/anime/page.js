'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Navbar from '../shared/navbar';
const API_URL = 'https://kitsu.io/api/edge/anime';

const IndexPage = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get(API_URL);
        setAnimeList(response.data.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
      }
    };

    fetchAnimeList();
  }, [animeList]);
 
  return (
    
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Anime Site</h1>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {animeList.map((anime) => (
        <Link href={`/anime/${anime.id}`} key={anime.id}>
            <img
              src={anime.attributes.posterImage.original}
              alt={anime.attributes.canonicalTitle}
              className="mb-2 w-64 h-96 object-cover"
            />
            <h3 className="text-lg font-bold mb-2">{anime.attributes.canonicalTitle}</h3>
      
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default IndexPage;
