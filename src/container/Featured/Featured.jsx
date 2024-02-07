import './Featured.css';

import { data, images } from '../../constants';

const Star = () => (
  <img src={images.star} alt="rating" style={{padding: '0 2px', width:'18px'}} />
)

const FeaturedFurniture = ({ card: { imgUrl, name, category, rating, usd } }) => {
  rating = Math.floor(rating);
  
  return(
  <div className='app__featured-card' >
    <div className='app__featured-card-img'><img src={imgUrl} alt="featured product" /></div>
    <div style={{padding:'0 1rem'}}>
    <p>{name}</p>
    <p className='p__light' style={{color:'var(--color-text-light)', paddingBottom:'0'}}>{category}</p>
    <div className='app__featured-card__ratingContainer'>
    {Array.from({ length: rating }, (_, index) => <Star key={index} />)}
    </div>
    <p className='p__light'>{usd}</p>
    </div>
  </div>
  )
  
  };

const Featured = () => {
  return (
    <section className='section__padding' id='shop'>
      <h2 style={{ textAlign: 'center' }}>Featured Product</h2>
      <div className='flex__center' style={{flexWrap:'wrap', gap:'2rem'}}>
        {data.FeaturedFurniture.map((card) => <FeaturedFurniture card={card} key={card.name} />)}
      </div>
    </section>
  )
}

export default Featured