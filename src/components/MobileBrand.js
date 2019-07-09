import React from 'react';
import logo from '../images/ChatterSquadronLogo.png';

export const MobileBrand = () => {
  return (
    <div className='mobile-brand'>
      <img className='mobile-brand-logo' src={logo} alt='Chatter Squadron Logo' />
      <p>
        Your Home For Star Wars Fun &amp; Positivity
      </p>
    </div>
  )
}

export default MobileBrand;