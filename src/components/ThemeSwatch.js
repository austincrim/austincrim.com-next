import * as React from 'react';

export default function ThemeSwatch({ title, active }) {
  return (
    <div
      className={`theme-${title.toLowerCase()} ${
        active ? 'transform scale-110 ring' : ''
      } rounded flex flex-col items-center px-5 py-3 text-base bg-base hover:bg-off-base hover:text-primary transition-all`}
    >
      <span className="text-sm">{title}</span>
      <div className="flex mt-4 -space-x-2">
        <div className={`h-8 w-8 rounded-full border bg-primary`} />
        <div className={`h-8 w-8 rounded-full border bg-off-base`} />
        <div className={`h-8 w-8 rounded-full border bg-secondary`} />
        <div className={`h-8 w-8 rounded-full border bg-muted`} />
      </div>
    </div>
  );
}
