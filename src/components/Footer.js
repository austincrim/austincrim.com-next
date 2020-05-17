import React from 'react';

const Footer = (props) => (
  <footer className='py-8 px-10 mx-auto text-center text-gray-600 text-sm bg-gray-300'>
      {props.children}
    </footer>
);

export default Footer;
