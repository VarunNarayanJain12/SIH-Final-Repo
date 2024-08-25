
import React from 'react';
import Ayurveda from '../images/Ayurveda.jpg';
import Ayurveda2 from '../images/Ayurveda2.jpg';
import Yoga from '../images/yoga.jpg';
import Img4 from '../images/img4.jpeg';
import Img5 from '../images/img5.jpeg';

function ImageSlider() {
  return (
    <div className="slider_container">
      <div className="slider">
        <div className="slide one"><img src={Ayurveda} alt="Ayurveda" /></div>
        <div className="slide two"><img src={Ayurveda2} alt="Ayurveda 2" /></div>
        <div className="slide three"><img src={Yoga} alt="Yoga" /></div>
        <div className="slide four"><img src={Img4} alt="AYUSH 4" /></div>
        <div className="slide five"><img src={Img5} alt="AYUSH 5" /></div>
      </div>
    </div>
  );
}

export default ImageSlider;