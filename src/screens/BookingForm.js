import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    movieName: '',
    ticketType: '',
    quantity: 1,
    email: '',
  });

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the booking data
    console.log(bookingData);
    // Reset the form fields
    setBookingData({
      movieName: '',
      ticketType: '',
      quantity: 1,
      email: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2>Book Movie Ticket</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="movieName">Movie Name</label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            name="movieName"
            value={bookingData.movieName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type</label>
          <input
            type="text"
            className="form-control"
            id="ticketType"
            name="ticketType"
            value={bookingData.ticketType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={bookingData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <Link to="/" className="btn btn-primary mt-3">
          Confirm Booking
        </Link>
      </form>
    </div>
  );
};

export default BookingForm;