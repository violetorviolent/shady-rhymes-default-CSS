import { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import { images, data } from '../../constants';
import './Visualise.css';



const DesignInfoCard = ({ card: { title, description } }) => {
  const [textShown, setTextShown] = useState(false);
  const {colorSVG} = useContext(DataContext);
  return (
    <div className='app__visualise-card' >
      <div className='app__visualise-card_title' onClick={()=>{setTextShown(!textShown)}}>
        <p style={{ margin: '1rem 0' }}>{title}</p>
        <button className='app__visualise-card_button fade' style={{color: `${colorSVG}`}}>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8L16 8" stroke="currentColor" />
            {!textShown && <path d="M8 16L8 -5.96046e-07" stroke="currentColor" />}
          </svg>
        </button>
      </div>
      {textShown && <p style={{ fontWeight: '300' }}>{description}</p>}  
    </div>
  )
};

const Visualise = () => {

  return (
    <section className='section__padding app__visualise' id='design'>
      <div>
        <h2>Visualize your ideas with us</h2>
        <p>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us</p>
        <div className='app__visualise-container'>
          {data.Visualise.map((card) => <DesignInfoCard card={card} key={card.title} />)}
        </div>
      </div>
      <img src={images.visualise} alt="visualise your ideas" />
    </section>
  )
}

export default Visualise