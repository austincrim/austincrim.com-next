import Nav from './Nav';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
                <div className='px-10 mx-auto lg:max-w-5xl md:max-w-3xl'>
                    {children}
                </div>
            </motion.div>
        </>
    );
}
