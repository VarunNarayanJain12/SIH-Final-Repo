
import React from 'react';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import ImageSlider from './components/ImageSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <RegistrationForm />
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;