import { useState, useEffect } from 'react';
import './css/App.css';
import Profile from './Profile/Profile';
import Header from './Layout/Header';
import Career from './Profile/Career/Career';
import Introduce from './Profile/Introduce/Introduce';

const App = () => {
  const [arrowChange, setArrowChange] = useState(false)
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  const handleScroll = () => {
      if(window.scrollY >= 50) {
        setScroll(true);
        setArrowChange(false);
      }
    };
  const arrowFunction = () => {
    setArrowChange(!arrowChange);
  };

  return (
    <div className="App">
      <div>
          <Profile arrow={arrowFunction}/>
      </div>
      <div className='arrow-section'>
        
      { arrowChange ? (
          <a><span></span><span></span></a>
          ) : ''}
      </div>
      <div className='career-div'>
        {scroll ? 
          <Career/> : ''
        }
      </div>
      
    </div>
  );
}

export default App;
