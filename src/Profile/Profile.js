import {useState, useEffect} from 'react';

import '../css/Profile.css';

const Profile = ({parent}) => {
    const txt = "/* 안녕하세요 방문해주셔서 감사해요 */";
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    const [render, setRender] = useState(false);
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크 
        }, 100);
        if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
            setRender(true);
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })
      
    return (
        <div className='profile-introduce'>
            <div className='profile-title'>
                <span className="remark" >{ Text }</span>
            </div>
            {render ? (
            <section className='my-profile'>
                <span className='blue-text'>const 
                    <span className='sky-blue-text'> ParkJinHyun </span>
                    <span className='white-text'>{'= (val) => {'}</span>
                </span>
                <div className='my-info'>
                    <span className='sky-blue-text'> name : 
                        <span className='brown-text'>{' "박진현"'} 
                            <span className='white-text'>{', '}</span>
                        </span>
                    </span> <br/>
                    <span className='sky-blue-text'> birth_year : 
                        <span className='brown-text'>{' "930626"'} 
                            <span className='white-text'>{', '}</span>
                        </span>
                    </span> <br/>
                    <span className='sky-blue-text'> skills : 
                        <span className='white-text'>{' ['} 
                            <span className='brown-text'>{" 'HTML', 'CSS', 'JavaScript',"}</span><br/>
                            <span className='brown-text'>{" 'React.js', 'Vue.js', 'Spring', 'SpringBoot'"}</span>
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
                 <span className='last-text'>
                    <span>{'};'}</span>
                </span><br/><br/>
                
                <section className='hoisting-section'>
                    {/* <span className='remark-text'>{" //중요"}</span><br/> */}
                    <span className='sky-blue-text'> ParkJinHyun.awesome  
                        <span className='white-text'>{' = '} 
                            <span className='brown-text'>{" true;"}</span>
                            <span className="cursor">|</span>
                        </span>
                    </span><br/><br/>
                    <span className='remark-text'>{" //더 알고 싶어요!!!"}</span>
                    <a className='remark-text' onClick={parent}>{" click▼"}</a>

                </section>
            </section>
            ) : ''}
            </div>
    )
}

export default Profile;