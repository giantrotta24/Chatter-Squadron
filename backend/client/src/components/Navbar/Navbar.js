import React from 'react';
import './styles.css';

// TODO: Links refs, fix mobile responsiveness (wait for logo), add logo to brand, replace placeholder icons
export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg py-3'>
      <a className='navbar-brand d-none d-lg-block' href='/'>LOGO GOES HERE</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse d-lg-flex justify-content-lg-end' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link d-lg-none text-center' href='#'>LOGO GOES HERE</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'><NavIcon icon='fas fa-desktop ltgreen' /> Video</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'><NavIcon icon='far fa-play-circle orange' /> Audio</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://www.facebook.com/chattersquadron/' target='blank'><NavIcon icon='fab fa-facebook-f blue' /> Facebook</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://twitter.com/chattersquadron' target='blank'><NavIcon icon='fab fa-twitter ltblue' /> Twitter</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://www.instagram.com/chattersquadron/' target='blank'><NavIcon icon='fab fa-instagram darkred' /> Instagram</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g' target='blank'><NavIcon icon='fab fa-youtube red' /> YouTube</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'><NavIcon icon='fas fa-rss green' /> RSS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const NavIcon = (props) => {
  return <i className={props.icon + ' mx-3 d-inline d-lg-none'}></i>;
};