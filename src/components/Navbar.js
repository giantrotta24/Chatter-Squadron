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
        <span class="open">☰</span>
        {/* <span class="close">×</span> */}
      </button>
      <ul>
        <li>
          <a href="">
            <i className='nav-icon fas fa-desktop ltgreen'/>
            Video
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon far fa-play-circle orange'/>
            Audio
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon fab fa-facebook-f blue'/>
            Facebook
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon fab fa-twitter ltblue'/>
            Twitter
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon fab fa-instagram darkred'/>
            Instagram
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon fab fa-youtube red'/>
            YouTube
          </a>
        </li>
        <li>
          <a href="">
            <i className='nav-icon fas fa-rss green'/>
            RSS
          </a>
        </li>
      </ul>
    </nav>
    // <nav className='navbar navbar-dark navbar-expand-lg py-lg-0'>
    //   <a className='navbar-brand d-none d-lg-block' href='/'>
    //     <img className='img-responsive' src={logo} alt='Chatter Squadron Logo' />
    //     <div className='d-inline-block brand-text text-center'>Your Home For Star Wars <br/> Fun &amp; Positivity</div>
    //   </a>
    //   <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
    //     <span className='navbar-toggler-icon'></span>
    //   </button>
    //   <div className='collapse navbar-collapse d-lg-flex justify-content-lg-end' id='navbarNav'>
    //     <ul className='navbar-nav'>
    //       <NavItem 
    //         linkClasses='d-lg-none brand-text-sm' 
    //         href='#' 
    //         linkText='Chatter Squadron'
    //         logo={logo}
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='#' 
    //         icon='fas fa-desktop ltgreen' 
    //         linkText='Video'
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='#' 
    //         icon='far fa-play-circle orange' 
    //         linkText='Audio'
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='https://www.facebook.com/chattersquadron/' 
    //         icon='fab fa-facebook-f blue' 
    //         linkText='Facebook'
    //         newTab={true}
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='https://twitter.com/chattersquadron' 
    //         icon='fab fa-twitter ltblue' 
    //         linkText='Twitter'
    //         newTab={true}
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='https://www.instagram.com/chattersquadron/' 
    //         icon='fab fa-instagram darkred' 
    //         linkText='Instagram'
    //         newTab={true}
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='https://www.youtube.com/channel/UCq3EOOv6Kk62OyJpjwKzH-g' 
    //         icon='fab fa-youtube red' 
    //         linkText='YouTube'
    //         newTab={true}
    //       />
    //       <NavItem
    //         linkClasses='text-uppercase'
    //         href='#' 
    //         icon='fas fa-rss green' 
    //         linkText='RSS'
    //         newTab={true}
    //       />
    //     </ul>
    //   </div>
    // </nav>
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

export default Navbar;