import * as React from 'react';
import Nav from './Nav';
import ThemePicker from './ThemePicker';

export default function Layout({ children }) {
  const [pickerOpen, setPickerOpen] = React.useState(false);
  return (
    <>
      <ThemePicker open={pickerOpen} />
      <Nav pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} />
      <div className="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">{children}</div>
    </>
  );
}
