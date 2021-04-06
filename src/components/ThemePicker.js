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
    }
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
        <ul
            className={`shadow-sm bg-base overflow-y-hidden overflow-x-auto ${
                open ? 'max-h-40' : 'max-h-0'
            }`}
            style={{ transition: 'max-height .3s ease-out, background-color 150ms' }}
        >
            <div className='flex justify-center px-2 py-4 space-x-8'>
                {themes.map((theme) => (
                    <li key={theme.id}>
                        <button onClick={() => pickTheme(theme.id)}>
                            <ThemeSwatch
                                active={current === theme.id}
                                title={theme.title}
                            />
                        </button>
                    </li>
                ))}
            </div>
        </ul>
    );
}
