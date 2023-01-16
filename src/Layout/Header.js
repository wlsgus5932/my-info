import { useState } from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="Header">
        <span className='remark-text'>{'/*'}</span>&nbsp;&nbsp;
        <a className='remark-text-cursor'>{'home▼'}</a>&nbsp;&nbsp;
        <a className='remark-text-cursor'>{'visit▼'}</a>&nbsp;&nbsp;
        <span className='remark-text-cursor'>{'*/'}</span>
    </div>
  );
}

export default Header;
