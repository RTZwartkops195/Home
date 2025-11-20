const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');


//Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('toggle-sun', 'toggle-moon');
 
}

//Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('toggle-moon', 'toggle-sun');
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

//onChange Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for current theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}


