import { useState } from 'react';
import './css/App.css';
import Profile from './Profile/Profile';
import Header from './Layout/Header';
import Career from './Profile/Career';

const App = () => {
  const [profileChange, setProfileChange] = useState(false)
  const parentFunction = () => {
    setProfileChange(!profileChange);
  };
  return (
    <div className="App">
      <div>
        {/* <Header/> */}
          <Profile parent={parentFunction}/>
      </div>
      <div>
        {profileChange ? 
          (<Career/>) : ''
        }
      </div>
    </div>
  );
}

export default App;
