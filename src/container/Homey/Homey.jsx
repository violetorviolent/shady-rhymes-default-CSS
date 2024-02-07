import { useRef, useContext } from 'react';
import DataContext from '../../context/DataContext';
import Modal from '../../shared/Modal/Modal';
import { images } from '../../constants';
import './Homey.css';

const Homey = () => {
  const inputRef = useRef();
  const modalRef = useRef();
  const textModal = '..haha imagine having backend on your website ;)';
  const {colorSVG} = useContext(DataContext);

  const click = () => {
    inputRef.current.value ? (modalRef.current.openModal()) : (inputRef.current.focus());
    inputRef.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.value ? (modalRef.current.openModal()) : (inputRef.current.focus());
      inputRef.current.value = "";
    }
  };

  return (
    <section className='section__padding app__homey'>
      <img src={images.homey} alt="homey interior" />
      <div>
        <h2>Make your room feel homey</h2>
        <p>We help people not only to make the room at home better, but we help people to feel a more homey and comfortable room, you don’t have to worry about the result because of these interiors are made by people who are professionals in their dields with an elegant and lucuriois style and with premium quality materials</p>
        <p style={{ paddingTop: '2rem' }}>Contact us if you are interested in working with us</p>
        <form className='fade' style={{ marginTop: '2rem' }} onSubmit={e => { e.preventDefault(); }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Insert your email address"
            onChange={(e) => e.preventDefault}
            onKeyDown={handleKeyDown} />
          <button className='styled__button'
            type="button"
            aria-label='send email'
            onClick={() => { click() }}
            style={{ color: `${colorSVG}` }}>
            <svg width="13" height="17" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.999999L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </form>
      </div>
      <Modal
        text={textModal}
        ref={modalRef}
      />
    </section>
  )
}

export default Homey