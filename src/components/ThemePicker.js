import * as React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ColorSwatch } from './Icons';
import ThemeSwatch from './ThemeSwatch';

export default function ThemePicker() {
    function pickTheme(theme) {
        if (theme === current) return;
        document.documentElement.classList.add(theme);
        localStorage.setItem('crimTheme', theme);
        document.documentElement.classList.remove(current);
        setCurrent(theme);
    }
    const [current, setCurrent] = React.useState('theme-light');

    React.useEffect(() => {
        setCurrent(localStorage.crimTheme);
    }, []);

    return (
        <span className='relative inline-block'>
            <Listbox onChange={pickTheme}>
                {({ open }) => (
                    <>
                        <Listbox.Button className='w-8 h-8 transition-colors hover:text-muted-hover dark:hover:text-gray-400'>
                            <ColorSwatch />
                        </Listbox.Button>
                        <Transition
                            show={open}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                        >
                            <Listbox.Options
                                style={{ scrollSnapType: 'x mandatory' }}
                                className='absolute flex mt-2 overflow-x-auto rounded-md outline-none w-[8.3rem] -left-8'
                            >
                                <Listbox.Option value='theme-light'>
                                    {({ active }) => (
                                        <ThemeSwatch
                                            active={active}
                                            title='Light'
                                        />
                                    )}
                                </Listbox.Option>
                                <Listbox.Option value='theme-dark'>
                                    {({ active }) => (
                                        <ThemeSwatch
                                            active={active}
                                            title='Dark'
                                        />
                                    )}
                                </Listbox.Option>
                                <Listbox.Option value='theme-solar'>
                                    {({ active }) => (
                                        <ThemeSwatch
                                            active={active}
                                            title='Solar'
                                        />
                                    )}
                                </Listbox.Option>
                            </Listbox.Options>
                        </Transition>
                    </>
                )}
            </Listbox>
        </span>
    );
}
