import { useState } from 'react';
import '../css/Career.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Career = () => {
  return (
    <div className="Career">
        <section className='section1'><br/>준비중<br/><br/> 클라우드: aws ec2<br/> 프론트: React <br/> 백엔드: SpringBoot <br/> 데이터베이스: Postgresql </section>
        <section className='section2'><br/>준비중<br/><br/>(주) 미디어그룹 사람과 숲 2021-08-12 ~ now
        </section>
        <section className='section3'><br/>준비중<br/><br/> 저는요// 목표
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faGithub} />ㅇㅇㅇ</section>
    </div>
  );
}

export default Career;
