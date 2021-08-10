import * as React from 'react'
import Nav from './Nav'
import ThemePicker from './ThemePicker'

export default function Layout({ children }) {
  const [pickerOpen, setPickerOpen] = React.useState(false)
  return (
    <>
      <ThemePicker open={pickerOpen} />
      <div
        className={`transition-transform   ${
          pickerOpen
            ? 'translate-y-[124px] duration-[400ms] ease-out'
            : 'translate-y-0 duration-200 ease-in'
        }`}
      >
        <Nav pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} />
        <div className='px-10 mx-auto lg:max-w-5xl md:max-w-3xl'>
          {children}
        </div>
      </div>
    </>
  )
}
