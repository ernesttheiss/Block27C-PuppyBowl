import React, { useState, useEffect } from 'react';


import { useFetchPlayersQuery } from "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players"; 


import "../../index.css"; 


const Players = () => {
  
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

 
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    if (data && data.data && data.data.players) {
      setPlayersData(data.data.players);
    }
  }, [data]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  
  return (
    <div className="players">
      {}
      {playersData.map((player) => (
        
        <div key={player.id} className="player-card">
          {}
          <img
            src={player.image}
            alt={player.name}
            className="player-image"
          />

          <div className="player-details">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Players;

