import { useState } from 'react';
import '../css/Career.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Career = () => {
  return (
    <div className="Career">
        <section className='section1'>준비중<br/>(주) 미디어그룹 사람과 숲 2021-08-12 ~ </section>
        <section className='section2'>준비중<br/>저는요
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faGithub} />
        
        </section>
        <section className='section3'>준비중<br/>목표</section>
    </div>
  );
}

export default Career;
