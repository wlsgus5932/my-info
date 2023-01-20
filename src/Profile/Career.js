import { useState } from 'react';
import '../css/Career.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Career = () => {
  return (
    <div className="Career">
        <section className='section1'>
        <span className='career-remark-text'>{'/* 개발자는 미래를 개척해나가는 직업 */'}</span>
        </section>
        {/* <section className='section2'>준비중<br/><br/>(주) 미디어그룹 사람과 숲 2021-08-12 ~ now
        
        </section>
        <section className='section3'>준비중<br/><br/> 저는요// 목표 
          <FontAwesomeIcon icon={faSquareInstagram} />
          <FontAwesomeIcon icon={faGithub} />
        몰라</section> */}
    </div> 
  );
}

export default Career;
