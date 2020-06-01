import React from 'react';
import miyupacaIcon from '../assets/img/miyupaca_icon.jpg';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

function About(props) {
  return (
    <section className="about">
      <h2><LocalFloristIcon />About<LocalFloristIcon /></h2>
      <h2>{props.title}</h2>

      <div className="about-content">
        {/* <div className="about-img">
          <img src={miyupacaIcon} alt="プロフィール画像" />
        </div> */}

        <div className="about-text">
          <p>
            1990年生まれ、都内在住。<br /><br />

            小学生の時に初めてインターネットの楽しさに触れ、大学で情報学部に進学して初めてプログラミングに触れる。 新卒でIT会社に就職し、開発・運用チームのマネジメントや会社の総務業務に携わる。<br /><br />

          エンジニアを目指すことを決め2020年3月に退職。現在に至る。
        </p>
        </div>
      </div>
    </section>
  );
}

export default About;