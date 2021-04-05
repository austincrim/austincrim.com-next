import * as React from 'react';

export default function ThemeSwatch({ active = false, title }) {
    return (
        <li
            className={`theme-${title.toLowerCase()} ${
                active ? 'text-primary' : ''
            } flex flex-col items-center p-3 rounded shadow bg-base text-base`}
            style={{ scrollSnapAlign: 'center' }}
        >
            <span className='text-sm'>{title}</span>
            <div className='flex mt-4 space-x-2'>
                <div className={`h-8 w-8 rounded border bg-primary`}></div>
                <div className={`h-8 w-8 rounded border bg-off-base`}></div>
                <div className={`h-8 w-8 rounded border bg-secondary`}></div>
            </div>
        </li>
    );
}
