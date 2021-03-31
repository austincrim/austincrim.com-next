if (
    localStorage.theme === 'theme-dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('theme-dark');
    localStorage.theme = 'theme-dark';
} else {
    document.documentElement.classList.remove('theme-dark');
    localStorage.theme = 'theme-light';
}
