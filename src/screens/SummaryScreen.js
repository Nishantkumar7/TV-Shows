import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SummaryScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const stripHtmlTags = (htmlString) => {
    return htmlString.replace(/<[^>]+>/g, '');
  };

  const strippedSummary = stripHtmlTags(show.summary);

  return (
    <div className="container text-center">
      <h1 className="mt-4 mb-4">{show.name}</h1>
      <img src={show.image.medium} alt={show.name} className="img-fluid mt-4 mb-4" />
      <p className="mb-2">
        <strong>Premiered:</strong> {show.premiered}
      </p>
      <p className="mb-4">{strippedSummary}</p>

      <button
        className="btn btn-primary m-2"
        onClick={() => {
          // Redirect to the ticket booking form
          window.location.href = `/booking/form`;
        }}
      >
        Book Movie Ticket
      </button>
      <a href={show.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary m-2">
        Visit Website
      </a>
    </div>
  );
};

export default SummaryScreen;