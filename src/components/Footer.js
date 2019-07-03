import React from 'react';
// import { Link } from 'gatsby';

import FacebookLogo from '../assets/svg/facebook-brands.svg';
import TwitterLogo from '../assets/svg/twitter-brands.svg';
import InstagramLogo from '../assets/svg/instagram-brands.svg';
import YoutubeLogo from '../assets/svg/youtube-brands.svg';
import PatreonLogo from '../assets/svg/patreon-brands.svg';

import './index.css';

const Footer = () => {
  return (
    <footer className="flex-footer">
      <ul>
        <li className="cs-cp">
          {' '}
          © {new Date().getFullYear()}, <a className="footer-link"href="#">Chatter Squadron </a>
        </li>
        <li className="social"><a className="footer-link"href="https://www.facebook.com/chattersquadron/"><FacebookLogo className="social-icons"/></a></li>
        <li className="social"><a className="footer-link"href="https://twitter.com/chattersquadron"><TwitterLogo className="social-icons"/></a></li>
        <li className="social"><a className="footer-link"href="https://www.instagram.com/chattersquadron/"><InstagramLogo className="social-icons"/></a></li>
        <li className="social"><a className="footer-link"href="https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g"><YoutubeLogo className="social-icons"/></a></li>
        <li className="social"><a className="footer-link"href="#"><PatreonLogo className="social-icons"/></a></li>
        <li className="db-cp">
          {' '}
          Made by <a className="footer-link"href="#">Dev Boys©</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
