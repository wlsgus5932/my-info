import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import '../css/Profile.css';

const Profile = ({arrow}) => {
    const txt = "const ParkJinHyun = { ";
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    const [render, setRender] = useState(false);
    const [changeClass, setChangeClass] = useState('');
    const [scroll, setScroll] = useState(false);

const handleScroll = () => {
    if(window.scrollY >= 30){
      setScroll(true);
    }
  };
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setText(Text + txt[Count]);
            setCount(Count + 1);
        }, 140);
        if(Count === txt.length)  {
            clearInterval(interval);
            setRender(true);
        } 
        return () => clearInterval(interval);
    })

    useEffect(()=>{
        if(Count > 21) {
            arrow();
    }}, [Count]);
      
    return (
        <div className='profile-introduce'>
            {render ? '' : (
            <div className='profile-title'>
                <span className="remark" >{ Text }</span>
            </div>
            )}
            {render ? (
            <div className='my-profile'>
                <span className='blue-text'>const 
                    <span className='sky-blue-text'> ParkJinHyun </span>
                    <span className='white-text'>{'= {'}</span>
                </span>
                <div className='my-info'>
                    <span className='sky-blue-text'> name : 
                        <span className='brown-text'>{' "박진현"'} 
                            <span className='white-text'>{', '}</span>
                        </span>
                    </span> <br/>
                    <span className='sky-blue-text'> birth_year : 
                        <span className='mint-text'>{' "930626"'} 
                            <span className='white-text'>{', '}</span>
                        </span>
                    </span> <br/>
                    <span className='sky-blue-text'> skills : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{" 'Java', 'Spring', 'SpringBoot', 'JPA'"}</span>
                            <span className='white-text'>{' ],'}</span>
                        </span>
                    </span><br/>
                    <span className='sky-blue-text'> sub-skills : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{"'JS', 'React.js', 'Vue.js' "}</span>
                            <span className='white-text'>{' ],'}</span>
                        </span>
                    </span><br/>
                    <span className='sky-blue-text'> job : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{" 'Backend-developer'"}</span>
                            <span className='white-text'>{']'}</span>
                        </span>
                    </span><br/>
                </div>
                 <span className='white-text'>
                    {'};'}
                </span><br/><br/>
                
                <div className='hoisting-section'>
                    {/* <span className='sky-blue-text'> ParkJinHyun.awesome  
                        <span className='white-text'>{' = '} 
                            <span className='brown-text'>{" true;"}</span>
                            <span className="cursor">|</span>
                        </span>
                    </span><br/><br/> */}
                <ul className={changeClass}>
                    <li className="mobile-insta">
                        <a href='https://www.instagram.com/jinhyun.co.kr/' target={'_blank'}><FontAwesomeIcon icon={faInstagram}/></a>
                    </li>  
                    <li className="mobile-git">
                        <a href="https://github.com/wlsgus5932" target={'_blank'}><FontAwesomeIcon icon={faGithub}/></a>
                    </li>
                    <li className="mobile-velog">
                        <a href='https://velog.io/@wlsgus5932' target={'_blank'}>
                            v
                        </a>

                    </li>
                    <li onMouseEnter={() => setChangeClass('circle2')} className="mobile-circle2">
                    click
                    </li>
                </ul>
                </div>
            </div>
            ) : ''}
            </div>
    )
}

export default Profile;