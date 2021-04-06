import * as React from 'react';
import Nav from './Nav';
import { motion } from 'framer-motion';
import ThemePicker from './ThemePicker';

export default function Layout({ children }) {
    const [pickerOpen, setPickerOpen] = React.useState(false);
    return (
        <>
            <ThemePicker open={pickerOpen} />
            <Nav pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} />
            <motion.div
                transition={{ delay: 0.1 }}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
            >
                <div className='px-10 mx-auto lg:max-w-5xl md:max-w-3xl'>
                    {children}
                </div>
            </motion.div>
        </>
    );
}
