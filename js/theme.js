const colorThemes = document.querySelectorAll('.theme');

function storeTheme(theme) {
    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; path=/`;
};

function getTheme() {
    const decodedTheme = decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    return decodedTheme || localStorage.getItem("theme") || "default";
};

function setTheme() {
    const activeTheme = getTheme();
    colorThemes.forEach((themeOption) => {
        if (themeOption.id == activeTheme) {
            themeOption.classList.add("active");
        }
        else {
            themeOption.classList.remove("active");
        }
    });
    document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
        setTheme();
    });
});

document.addEventListener("DOMContentLoaded", setTheme);
