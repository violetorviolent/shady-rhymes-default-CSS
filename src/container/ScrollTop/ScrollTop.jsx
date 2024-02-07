import { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import './ScrollTop.css';

const ScrollTop = () => {
  const {colorSVG} = useContext(DataContext);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {visible && <div className='app__scrollTop' style={{ display: visible ? 'inline' : 'none' }}>
        <a href="#">
          <button className='styled__button' style={{ transform: 'rotate(-90deg)', color: `${colorSVG}` }}>
            <svg width="13" height="17" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.999999L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </a>
      </div>
      }
    </>
  )
}

export default ScrollTop