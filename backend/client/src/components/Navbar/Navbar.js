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
          <NavItem 
            linkClasses='d-lg-none text-center' 
            href='#' 
            linkText='LOGO GOES HERE'
          />
          <NavItem 
            href='#' 
            icon='fas fa-desktop ltgreen' 
            linkText='Video'
          />
          <NavItem
            href='#' 
            icon='far fa-play-circle orange' 
            linkText='Audio'
          />
          <NavItem 
            href='https://www.facebook.com/chattersquadron/' 
            icon='fab fa-facebook-f blue' 
            linkText='Facebook'
            newTab={true}
          />
          <NavItem 
            href='https://twitter.com/chattersquadron' 
            icon='fab fa-twitter ltblue' 
            linkText='Twitter'
            newTab={true}
          />
          <NavItem 
            href='https://www.instagram.com/chattersquadron/' 
            icon='fab fa-instagram darkred' 
            linkText='Instagram'
            newTab={true}
          />
          <NavItem 
            href='https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g' 
            icon='fab fa-youtube red' 
            linkText='YouTube'
            newTab={true}
          />
          <NavItem 
            href='#' 
            icon='fas fa-rss green' 
            linkText='RSS'
            newTab={true}
          />
        </ul>
      </div>
    </nav>
  );
};

export const NavIcon = (props) => {
  return <i className={props.icon + ' mx-3 d-inline d-lg-none'}></i>;
};

export const NavItem = (props) => {
  return (
    <li className='nav-item'>
      <a 
        className={'nav-link ' + props.linkClasses} 
        href={props.href} 
        target={props.newTab ? '_blank' : '_self'}
      >
        {props.icon ? <NavIcon icon={props.icon}/> : ''} {props.linkText}
      </a>
    </li>
  );
}