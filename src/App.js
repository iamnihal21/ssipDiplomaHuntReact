import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FindCollegeSection from './components/FindClg';
import Header from './components/Header';
import ContactUs from './components/Contact';
import Tutorial from './components/Tutorial';
import HeroSection from './components/HeroSection';
import Footer from './components/footer';

function App() {
  const [meritList, setMeritList] = useState([]);

  const fetchMongoData = async () => {
    try {
      // Make an axios call to the API endpoint to fetch the data.
      const response = await axios.get('http://localhost:5000/api/CollageData', {});
      if (response.status === 200) {
        setMeritList(response.data);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
    }
  };

  const [mode, setMode] = useState('home');

  useEffect(() => {
    // Fetch the data from the MongoDB server only once when the component mounts.
    fetchMongoData();
  }, []);

  return (
    <div className="App">
      <Header setHome={() => setMode('home')} setFindClg={() => setMode('Find College')} setTutorial={() => setMode('Tutorial')} setContactUs={() => setMode('Email Subscribe')} />
      {mode === 'home' ? <HeroSection setFindClg={() => setMode('Find College')} /> : null}
      {mode === 'Find College' ? <FindCollegeSection meritList={meritList} /> : null}
      {mode === 'Tutorial' ? <Tutorial /> : null}
      {mode === 'Email Subscribe' ? <ContactUs /> : null}
      <Footer />
    </div>
  );
}

export default App;