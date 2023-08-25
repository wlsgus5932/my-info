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

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll); //clean up
//     };
//   }, []);

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

    useEffect(() => {
        console.log('test');
    })
      
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
                            <span className='brown-text'>{" 'Java', 'Spring', 'SpringBoot', 'JPA', 'JavaScript' "}</span>
                            <span className='white-text'>{' ],'}</span>
                        </span>
                    </span><br/>
                    <span className='sky-blue-text'> sub_skills : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{" 'React', 'Vue' "}</span>
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
                    {/* <span className='remark-text'>{" //더 알고 싶어요!!!"}</span> */}
                    {/* <a className='remark-text' onClick={parent}>{" click▼"}</a> */}
                <ul className={changeClass}>
                    <li className="mobile-insta">
                        <a href='https://www.instagram.com/jinhyun.dev/' target={'_blank'}><FontAwesomeIcon icon={faInstagram}/></a>
                    </li>  
                    <li className="mobile-git">
                        <a href="https://github.com/wlsgus5932" target={'_blank'}><FontAwesomeIcon icon={faGithub}/></a>
                    </li>
                    <li onMouseEnter={() => setChangeClass('circle')} className="mobile-circle">
                    tech
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