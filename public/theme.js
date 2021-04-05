if (localStorage.crimTheme) {
    document.documentElement.classList.add(localStorage.crimTheme);
} else {
    document.documentElement.classList.add('theme-light');
    localStorage.setItem('crimTheme', 'theme-light');
}
