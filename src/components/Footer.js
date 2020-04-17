import react from 'react'

const Footer = props => {
    return (
        <footer className='py-10 px-10 mx-auto text-gray-300'>
            {props.children}
        </footer>
    )
}

export default Footer;