import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import BookingForm from './screens/BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<SummaryScreen />} />
        <Route path='/booking/form' element={<BookingForm/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;