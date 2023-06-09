
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
const animeID = ({params}) => {
  const router = useRouter();
  const [anime, setAnime] = useState(null); 
  const id = params

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime/${params.id}`);
        console.log(response.data)
        setAnime(response.data.data); 
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

      fetchAnimeDetails();
    
  }, [id]);

  if (!anime) {
    return <div></div>;
  }

  return (
    <div className="bg-black h-screen ">
    <div className="container mx-auto pt-8">
      <div className="flex flex-col md:flex-row">
        <div className='mb-2 w-96 h-96 object-cover'>
          <div className=''>
           <img
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.canonicalTitle}
        className="mt-8"
      />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8 ">
          <h1 className="text-4xl font-bold text-white">{anime.attributes.canonicalTitle}</h1>
          <p className="text-black mt-6 bg-slate-100 py-4 pl-12 pr-4 rounded-md" >Description: {anime.attributes.synopsis}</p>
          <p className="text-black mt-6 bg-slate-100 py-4 pl-12 pr-4 rounded-md">Status: {anime.attributes.status}</p>
          <p className="text-black mt-6 bg-slate-100 py-4 pl-12 pr-4 rounded-md">Episode: {anime.attributes.episodeCount}</p>
          <p className="text-black mt-6 bg-slate-100 py-4 pl-12 pr-4 rounded-md">Rating: {anime.attributes.averageRating}</p>
          <p className="text-black mt-6 bg-slate-100 py-4 pl-12 pr-4 rounded-md">Popular: {anime.attributes.popularityRank}</p>
         
         
      
        </div>
      </div>
    </div>
  </div>

  
  );
};


export default animeID;