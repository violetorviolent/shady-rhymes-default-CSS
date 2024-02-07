import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../constants';
import './Testimonials.css';

const TestimonialsCard = ({ card: { h3, p, imgUrl, name, position } }) => (
  <div className='app__testimonials-card' >
    <h3>{h3}</h3>
    <p >{p}</p>
    <div className='Test'>
      <img style={{ borderRadius: '50%' }} src={imgUrl} alt="client" />
      <h3 style={{ fontSize: '18px', paddingBottom: '0.3rem' }}>{name}</h3>
      <p style={{ fontSize: '14px', fontWeight: '300' }}>{position}</p>
    </div>
  </div>
);

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow styled__button fade";
  const {colorSVG} = useContext(DataContext);
  return (
    <button className={className} onClick={props.onClick} style={{ color: `${colorSVG}` }}>
      <svg width="13" height="17" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow type='next' />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };
  return (
    <section className='section__padding '>
      <h2 style={{ textAlign: 'center' }}>What they say about our services</h2>
      <div className='app__testimonials-cardContainer'>
        <Slider {...settings}>
          {data.Testimonials.map((card) => <TestimonialsCard card={card} key={card.h3} />)}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials