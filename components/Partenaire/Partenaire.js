import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './Partenaire.css';

class Partenaire extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="partenaires" src="https://i.imgur.com/W5Ardip.png" alt="Mame" />
        </div>
        <div>
          <img className="partenaires" src="https://i.imgur.com/7iXYgAI.png" alt="Wild Code School" />
        </div>
        <div>
          <img className="partenaires" src="https://i.imgur.com/U14pobP.png" alt="Tours" />
        </div>
        <div>
          <img className="partenaires" src="https://i.imgur.com/ykblB26.jpg" alt="Région Centre" />
        </div>
      </Slider>
    );
  }
}

export default Partenaire;
