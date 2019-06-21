import React from 'react';
import './styles.css';
import logo from '../../assets/images/Chatter white transparent.png';

// TODO: Links refs, fix mobile responsiveness (navbar layout breaks around 1090px width), replace placeholder icons (maybe), large brand above navbar on mobile
export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg py-3'>
      <a className='navbar-brand d-none d-lg-block' href='/'>
        <img className='img-responsive' src={logo} alt='Chatter Squadron Logo' />
        <div className='d-inline-block brand-text text-center'>Your Home For Star Wars <br/> Fun &amp; Positivity</div>
      </a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse d-lg-flex justify-content-lg-end' id='navbarNav'>
        <ul className='navbar-nav'>
          <NavItem 
            linkClasses='d-lg-none brand-text-sm' 
            href='#' 
            linkText='Chatter Squadron'
            logo={logo}
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
        {props.logo ? <img className='img-responsive mr-2' src={props.logo} alt='Chatter Squadron Logo'/> :''}
        {props.icon ? <NavIcon icon={props.icon}/> : ''} {props.linkText}
      </a>
    </li>
  );
}