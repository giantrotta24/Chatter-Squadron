import React from 'react';
import { Link } from 'gatsby';

import FacebookLogo from '../images/facebook-brands.svg';
import TwitterLogo from '../images/twitter-brands.svg';
import InstagramLogo from '../images/instagram-brands.svg';
import YoutubeLogo from '../images/youtube-brands.svg';
import PatreonLogo from '../images/patreon-brands.svg';

import './index.css';

const Footer = () => {
  return (
    <footer className="flex-footer">
      <ul>
        <li className="cs-cp">
          {' '}
          © {new Date().getFullYear()}, <a className="footer-link"href="#">Chatter Squadron </a>
        </li>
        <li className="social"><a className="footer-link"href="https://www.facebook.com/chattersquadron/"><FacebookLogo height="60px"/></a></li>
        <li className="social"><a className="footer-link"href="https://twitter.com/chattersquadron"><TwitterLogo height="60px"/></a></li>
        <li className="social"><a className="footer-link"href="https://www.instagram.com/chattersquadron/"><InstagramLogo height="60px"/></a></li>
        <li className="social"><a className="footer-link"href="https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g"><YoutubeLogo height="60px"/></a></li>
        <li className="social"><a className="footer-link"href="#"><PatreonLogo height="60px"/></a></li>
        <li className="db-cp">
          {' '}
          Made by <a className="footer-link"href="#">Dev Boys©</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
