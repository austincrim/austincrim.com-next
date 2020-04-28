import React from 'react'

const Footer = props => {
    return (
        <footer className='py-10 px-10 mx-auto text-center text-gray-400 text-sm'>
            {props.children}
        </footer>
    )
}

export default Footer;