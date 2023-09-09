import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import linkedin from '../../../public/linkedin.svg';
import github from '../../../public/github.svg';
import whatsapp from '../../../public/whatsapp.svg';

const Footer = () => {
  const facebookURL = 'https://www.facebook.com/juanpablo.accinelli';
  const linkedinURL = 'https://www.linkedin.com/in/juan-pablo-accinelli/';
  const instagramURL = 'https://www.instagram.com/seguros.jpa/';
  const githubURL = 'https://github.com/juampi85';
  const whatsappURL = 'https://wa.me/5493764277716';
  return (
    <div className={style.footer_container}>
      {/* <span className={style.footer_title}>
        Proyecto Individual Integrador de SoyHenry
      </span> */}
      <div className={style.social_media_container}>
        <a href={facebookURL} target="_blank" rel="noreferrer">
          <img
            src={facebook}
            alt="facebook logo"
            className={style.social_media}
          />
        </a>
        <a href={instagramURL} target="_blank" rel="noreferrer">
          <img
            src={instagram}
            alt="instagram logo"
            className={style.social_media}
          />
        </a>
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          <img
            src={linkedin}
            alt="linkedin logo"
            className={style.social_media}
          />
        </a>
        <a href={githubURL} target="_blank" rel="noreferrer">
          <img src={github} alt="github logo" className={style.social_media} />
        </a>
        <a href={whatsappURL} target="_blank" rel="noreferrer">
          <img
            src={whatsapp}
            alt="linkedin logo"
            className={style.social_media}
          />
        </a>
      </div>
      <span className={style.footer_title}>
        © 2023 by{' '}
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          Juan Pablo Accinelli
        </a>
        . All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
