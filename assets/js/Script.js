const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');


//Dark Mode Styles
function darkMode() {
    if (nav) nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //console.log(toggleIcon && toggleIcon.children);
    if (toggleIcon && toggleIcon.children && toggleIcon.children.length >= 2) {
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('toggle-sun', 'toggle-moon');
    }
 
}

//Light Mode
function lightMode() {
    if (nav) nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    if (toggleIcon && toggleIcon.children && toggleIcon.children.length >= 2) {
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('toggle-moon', 'toggle-sun');
    }
}

//Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        //targets highest level on the document, in this case <html>
        localStorage.setItem('theme', 'dark');
        //saves theme to local storage
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//onChange Event Listener (only if toggle exists)
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme);
}

//Check local storage for current theme
//Check local storage for current theme and initialise UI if toggle exists
try {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            if (toggleSwitch) toggleSwitch.checked = true;
            darkMode();
        } else {
            lightMode();
        }
    }
} catch (e) {
    // ignore localStorage access errors
}

//Hide theme switch when scrolling down
const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');
if (themeSwitchWrapper) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            themeSwitchWrapper.style.opacity = '0';
            themeSwitchWrapper.style.pointerEvents = 'none';
        } else {
            themeSwitchWrapper.style.opacity = '1';
            themeSwitchWrapper.style.pointerEvents = 'auto';
        }
    });
}


