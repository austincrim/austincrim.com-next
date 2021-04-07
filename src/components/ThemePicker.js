import * as React from 'react';
import ThemeSwatch from './ThemeSwatch';

const themes = [
    {
        id: 'theme-light',
        title: 'Light',
    },
    {
        id: 'theme-dark',
        title: 'Dark',
    },
    {
        id: 'theme-solar',
        title: 'Solar',
    },
    {
        id: 'theme-evergreen',
        title: 'Evergreen',
    },
];

export default function ThemePicker({ open }) {
    function pickTheme(theme) {
        if (theme === current) return;
        document.documentElement.classList.add(theme);
        localStorage.setItem('crimTheme', theme);
        document.documentElement.classList.remove(current);
        setCurrent(theme);
    }
    const [current, setCurrent] = React.useState('');

    React.useEffect(() => {
        setCurrent(localStorage.crimTheme);
    }, []);

    return (
        <div
            className={`shadow-sm bg-off-base overflow-hidden ${
                open ? 'max-h-40' : 'max-h-0'
            }`}
            style={{
                transition: 'max-height .3s ease-out, background-color 150ms',
            }}
        >
            <ul
                className={`text-center whitespace-nowrap overflow-x-auto p-4 transform transition-transform duration-300 ease-out ${
                    open ? 'translate-y-0' : '-translate-y-10'
                }`}
            >
                {themes.map((theme) => (
                    <li
                        className={`inline-block mx-4 ${theme.id}`}
                        key={theme.id}
                    >
                        <button
                            className='rounded focus:outline-none focus:ring-4'
                            onClick={() => pickTheme(theme.id)}
                        >
                            <ThemeSwatch
                                active={current === theme.id}
                                title={theme.title}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
