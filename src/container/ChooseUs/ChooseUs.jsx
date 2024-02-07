import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { data } from '../../constants';
import './ChooseUs.css';

const ChooseUsCard = ({ card: { imgUrl, h3, p } }) => {
  const {colorSVG} = useContext(DataContext);
  return (  
  <div className='app__chooseUs-card' >
    <div className='icon__container fade' style={{color: `${colorSVG}`}}>{imgUrl}</div>
      <h3>{h3}</h3>
      <p >{p}</p>
  </div>
)};

const ChooseUs = () => {
  return (
    <section className='section__padding' id='aboutUs'>
      <h2>Why Choosing Us</h2>
      <div className='app__chooseUs-cardContainer'>
      {data.WhyChooseUs.map((card) => <ChooseUsCard  card={card} key={card.h3} />)}
      </div>
    </section>
  )
}

export default ChooseUs