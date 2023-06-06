import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCard from '../components/ShowCard';


const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">TV Shows</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {shows.map((show) => (
          <div className="col-md-4" key={show.show.id}>
            <ShowCard
              show={show.show}
              onButtonClick={() => {
                window.location.href = `/show/${show.show.id}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen