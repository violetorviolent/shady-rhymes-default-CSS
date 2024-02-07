import { useRef, useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import Modal from '../../shared/Modal/Modal';
import { images, data } from '../../constants';
import './Header.css';

const Header = () => {
  const inputRef = useRef();
  const modalRef = useRef();
  const textModal = 'Search option in the future updates :)';

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
  
  const [backgroundImg, setBackgroundImg] = useState(images.header2)
  const [color, setColor] = useState("Pink");
  const {setColorSVG} = useContext(DataContext);
  const RadioButton = ({ card: {imgUrl, id, name, value, colorAccent, colorAccentOverlay, colorAccentDark, colorTextHeader} }) => {
    const isChecked = (value) => color === value;
    return (
      <label htmlFor={id} className="radiobutton-label">
        <input
          className="radiobutton-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={(event) => {
            setColor(event.target.value);
            setBackgroundImg(imgUrl);
            document.documentElement.style.setProperty('--color-accent', colorAccent);
            document.documentElement.style.setProperty('--color-accent-overlay', colorAccentOverlay);
            document.documentElement.style.setProperty('--color-accent-dark',  colorAccentDark);
            setColorSVG(colorAccentDark);
          }}
          checked={isChecked(value)}
        />
        <span className="custom-radiobutton" />
      </label>
    );
  };

  return (
    <section className='flex__center app__header fade' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1>Make Your Interior More <br />Minimaistic & Modern</h1>
      <p>Bringing interiors to life, understanding the person or people living in a home is far greater need in design.</p>
      <form style={{ marginTop: '2rem', border: '1px solid var(--color-text-header)' }} onSubmit={e => { e.preventDefault(); }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Furniture"
          onChange={(e) => e.preventDefault}
          onKeyDown={handleKeyDown} />
        <button className='styled__button'
          type="button"
          aria-label='send email'
          onClick={() => { click() }}
          style={{ background: 'var(--color-text-header)' }}>
          <img src={images.search} alt="search" />
        </button>
      </form>
      <Modal
        text={textModal}
        ref={modalRef}
      />
      <div className='app__header-buttonContainer fade'>
        <div className='flex__center' >
          {data.Header.map((card) => <RadioButton card={card} key={card.id} />)}
        </div>
      </div>
    </section>
  )
};

export default Header;
