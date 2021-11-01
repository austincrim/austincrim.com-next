// the design for this component was directly inspired by Max Bock's personal website. Check out his amazing work here: https://mxb.dev/

import * as React from 'react'
import ThemeSwatch from './ThemeSwatch'

const themes = [
  {
    id: 'theme-light',
    title: 'Light'
  },
  {
    id: 'theme-dark',
    title: 'Dark'
  },
  {
    id: 'theme-solar',
    title: 'Solar'
  },
  {
    id: 'theme-evergreen',
    title: 'Evergreen'
  }
]

export default function ThemePicker({ open }) {
  function pickTheme(theme) {
    if (theme === current) return
    document.documentElement.classList.add(theme)
    localStorage.setItem('crimTheme', theme)
    document.documentElement.classList.remove(current)
    setCurrent(theme)
  }
  const [current, setCurrent] = React.useState('')

  React.useEffect(() => {
    setCurrent(localStorage.crimTheme)
  }, [])

  return (
    <div
      className={`shadow-sm bg-off-base overflow-hidden absolute w-full transition-all  ${
        open ? 'translate-y-0 duration-[400ms] ease-out' : '-translate-y-full duration-200 ease-in opacity-0'
      }`}
    >
      <ul
        className={`text-center whitespace-nowrap overflow-x-auto p-4 transition-transform ${
          open
            ? 'translate-y-0 duration-300 ease-out'
            : '-translate-y-10 duration-150 ease-in'
        }`}
      >
        {themes.map((theme) => (
          <li className={`inline-block mx-4 ${theme.id} transition-transform duration-150 hover:rotate-2`} key={theme.id}>
            <button
              aria-label={`select ${theme.title} theme`}
              className='transition-transform duration-150 rounded focus:outline-none focus:ring-4 group'
              onClick={() => pickTheme(theme.id)}
            >
              <ThemeSwatch active={current === theme.id} title={theme.title} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
