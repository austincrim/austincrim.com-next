import Head from 'next/head';
import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <>
            <Nav />

            <div className='px-10 mx-auto lg:max-w-5xl md:max-w-3xl'>
                {children}
            </div>
        </>
    );
}
