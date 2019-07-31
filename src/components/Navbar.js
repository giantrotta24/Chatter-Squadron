import React from 'react';
import logo from '../images/ChatterSquadronLogo.png';

export const Navbar = () => {
  function toggleExpand() {
    const button = document.querySelector('button[aria-expanded]');
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
    console.log('toggle');
  }
  return (
    <nav className='menu'>
      <a className='menu-brand' href='#'>
        <img src={logo} alt='Chatter Squadron Logo' />
        <div className='menu-brand-text'>Your Home For Star Wars <br/> Fun &amp; Positivity</div>
      </a>
      <button onClick={toggleExpand} aria-expanded='false' aria-controls='menu-list'>
        <span className="open">☰</span>
      </button>
      <ul>
        <li>
          <a href='https://www.facebook.com/chattersquadron/' target='_blank' rel="noopener noreferrer">
            <i className='nav-icon fab fa-facebook-f blue'/>
            Facebook
          </a>
        </li>
        <li>
          <a href='https://twitter.com/chattersquadron' target='_blank' rel="noopener noreferrer">
            <i className='nav-icon fab fa-twitter ltblue'/>
            Twitter
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/chattersquadron/' target='_blank' rel="noopener noreferrer">
            <i className='nav-icon fab fa-instagram darkred'/>
            Instagram
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g' target='_blank' rel="noopener noreferrer">
            <i className='nav-icon fab fa-youtube red'/>
            YouTube
          </a>
        </li>
        <li>
          <a href='https://www.patreon.com/ChatterSquadron' target='_blank' rel="noopener noreferrer">
          <i className='nav-icon fab fa-patreon orange' />
            Patreon
          </a>
        </li>
        <li>
          <a href='http://chattersquadron.libsyn.com/rss' target='_blank' rel="noopener noreferrer">
            <i className='nav-icon fas fa-rss green'/>
            RSS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;