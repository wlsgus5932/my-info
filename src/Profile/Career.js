import { useState } from 'react';
import '../css/Career.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Career = () => {
  return (
    <div className="Career">
        <section className='section1'>준비중<br/><br/> 클라우드: aws ec2<br/> 프론트: React <br/> 백엔드: SpringBoot <br/> DB: Postgresql </section>
        <section className='section2'>준비중<br/><br/>(주) 미디어그룹 사람과 숲 2021-08-12 ~ now
        </section>
        <section className='section3'>준비중<br/><br/> 저는요// 목표
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faGithub} /></section>
    </div>
  );
}

export default Career;
