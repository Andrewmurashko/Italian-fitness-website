import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import sliderContent from '../utils/sliderContent';

function Slider() {
  const slider = (
    <AwesomeSlider>
      {sliderContent.map((person, index) => (
        <div className="slide" key={index}>
          <div className="slide__photo-block">
            <img className="photo-block__img" src={person.photo} alt="Client photo" />
            <div className="photo-block__subtitle ">{`${person.name}, ${person.age}`}</div>
          </div>
          <p className="slide__description text_light">{person.review}</p>
        </div>
      ))}
    </AwesomeSlider>
  );
  return <div className="slider">{slider}</div>;
}

export default Slider;
