import React from 'react';
import font from '../style/typography.module.css';
function Header() {
  return (
    <header className="header">
      <span aria-hidden="true" className="circle big-circle"></span>
      <span aria-hidden="true" className="circle small-circle"></span>
      <h1 className={font.title}> Simple, trraffic based pricing</h1>
      <p className={font.subtitle}>
        Sign up for our 30 day trial, No credit card required
      </p>
    </header>
  );
}

export default Header;
