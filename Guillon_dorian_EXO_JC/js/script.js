let cloneIcon = document.getElementById('icon');
let menu = document.getElementById('menu');
let main = document.querySelector('main'); 
let footer = document.querySelector('footer'); 
let dark = document.getElementById('dark');

cloneIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

let on = 1;

function toggleDarkMode() {
    if (on === 1) {
        main.style.background = "black";
        footer.style.background = "black";
        on = 0;
    } else {
        main.style.background = "white";
        footer.style.background = "white";
        on = 1;
    }
}

dark.addEventListener('click', toggleDarkMode);

   