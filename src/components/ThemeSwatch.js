import * as React from 'react';

export default function ThemeSwatch({ title, active }) {
    return (
        <div
            className={`theme-${title.toLowerCase()} ${active ? 'ring' : ''} flex flex-col items-center px-5 py-3 text-base rounded bg-base hover:bg-off-base hover:text-primary transition-colors`}
        >
            <span className='text-sm'>{title}</span>
            <div className='flex mt-4 -space-x-2'>
                <div className={`h-8 w-8 rounded-full border bg-primary`} />
                <div className={`h-8 w-8 rounded-full border bg-off-base`} />
                <div className={`h-8 w-8 rounded-full border bg-secondary`} />
            </div>
        </div>
    );
}
