
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">{anime.attributes.canonicalTitle}</h1>
    <div className="flex flex-col md:flex-row">
      <img
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.canonicalTitle}
        className="mb-4 w-64 h-96 md:w-1/3 md:mr-4"
      />
      <div className="flex flex-col">
        <p className="text-lg mb-2">Synopsis: {anime.attributes.synopsis}</p>
        <p>
          <span className="font-semibold">Start Date:</span> {anime.attributes.startDate}
        </p>
        <p>
          <span className="font-semibold">End Date:</span> {anime.attributes.endDate}
        </p>
        <p>
          <span className="font-semibold">Episode Count:</span> {anime.attributes.episodeCount}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {anime.attributes.averageRating}
        </p>
        <p>
          <span className="font-semibold">Age Rating:</span> {anime.attributes.ageRating}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {anime.attributes.status}
        </p>
        <p>
          <span className="font-semibold">Popularity Rank:</span> {anime.attributes.popularityRank}
        </p>
        <p>
          <span className="font-semibold">Community Rating:</span> {anime.attributes.ratingRank}
        </p>
      </div>
    </div>
  </div>
  
  );
};


export default animeID;