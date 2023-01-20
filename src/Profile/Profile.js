import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faGithub, faAngledown, faInstagram } from "@fortawesome/free-brands-svg-icons";

import '../css/Profile.css';
import Career from './Career';

const Profile = ({parent}) => {
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
	// 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if(window.scrollY >= 30){
      setScroll(true);
      parent();
    }
  };
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크 
        }, 140);
        if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
            setRender(true);
        } 
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })

    useEffect(()=>{
        if(Count > 21) {
            parent();
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
                            <span className='brown-text'>{"'HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Spring', 'SpringBoot'"}</span>
                            <span className='white-text'>{' ],'}</span>
                        </span>
                    </span><br/>
                    <span className='sky-blue-text'> job : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{" 'developer'"}</span>
                            <span className='white-text'>{']'}</span>
                        </span>
                    </span><br/>
                </div>
                 <span className='white-text'>
                    {'};'}
                </span><br/><br/>
                
                <div className='hoisting-section'>
                    {/* <span className='remark-text'>{" //중요"}</span><br/> */}
                    <span className='sky-blue-text'> ParkJinHyun.awesome  
                        <span className='white-text'>{' = '} 
                            <span className='brown-text'>{" true;"}</span>
                            <span className="cursor">|</span>
                        </span>
                    </span><br/><br/>
                    {/* <span className='remark-text'>{" //더 알고 싶어요!!!"}</span> */}
                    {/* <a className='remark-text' onClick={parent}>{" click▼"}</a> */}
                <ul className={changeClass}>
                    <li onMouseEnter={() => setChangeClass('insta')} className="mobile-insta">
                        <a href='https://www.instagram.com/jinhyun.dev/' target={'_blank'}><FontAwesomeIcon icon={faInstagram}/></a>
                    </li>  
                    <li onMouseEnter={() => setChangeClass('git')} className="mobile-git">
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
                { scroll ? '' : (
                <div className='arrow-section'>
                    <a><span></span><span></span></a>
                </div>
                )
                }
            </div>
            ) : ''}
            </div>
    )
}

export default Profile;