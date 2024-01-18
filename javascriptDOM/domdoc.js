const titleEL = document.getElementById('title');
const demoEL = document.querySelector('#demo');
const changeClassEL = document.querySelector('#changeClass');
const allTag_p_EL = document.querySelectorAll('p');
let modeRL = document.querySelector('.light');

function displayText0() {
    titleEL.style.color = "red";
    titleEL.style.backgroundColor = "black";
    changeClassEL.setAttribute('id', 'classChange'); //setAttribute ใช้ได้ทั้ง class เเละ id
}

function lightMode() {
    modeRL.setAttribute('class', 'light');
}

function darkMode() {
    modeRL.setAttribute('class', 'dark');
}

