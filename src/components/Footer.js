import React from 'react';

const Footer = (props) => (
  <footer className='py-10 px-10 mx-auto text-center text-gray-600 text-sm bg-gray-300'>
      {props.children}
    </footer>
);

export default Footer;
