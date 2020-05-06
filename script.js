//Gloabl JS
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//------  Project 1
const blue = "rgba(17,29,94,1)";
const orange = "rgba(240, 111, 6, 1)";
const green = "rgba(38, 204, 12, 1)";

const name = document.querySelector('.color-text--name');
const title = document.querySelector('.heading2--project1');
const box = document.querySelector('.color-box');
const checked = document.querySelector('input[type=radio]:checked');
const border = document.querySelector('.project1');

document.colorForm.onclick = function() {
  const checked = document.querySelector('input[type=radio]:checked');

  if(checked.id === 'blue') {
    name.innerHTML = "BLUE";
    box.style.backgroundColor = blue;
    title.style.color = blue;
    border.style.border = `3px solid ${blue}`;
  } else if(checked.id === 'orange') {
    name.innerHTML = "ORANGE";
    box.style.backgroundColor = orange;
    title.style.color = orange;
    border.style.border = `3px solid ${orange}`;
  } else if (checked.id === 'green') {
    name.innerHTML = "GREEN";
    box.style.backgroundColor = green;
    title.style.color = green;
    border.style.border = `3px solid ${green}`;
  }
}

//------  Project 2
const minNum = 0;
const maxNum = 20;

const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const p2InputValue = document.querySelector('#p2_input');

console.log('Minus button --> ', minusButton);
console.log('Plus button --> ', plusButton);
console.log('p2InputValue --> ', p2InputValue);


const checkMaxValue = (num) => (num === maxNum ? true : false);
const checkMinValue = (num) => (num === minNum ? true : false);

function addValue(num) {
  if( !checkMaxValue(num) ) {
    return (num+1);
  } else {
    window.alert(`You've reached the maximun value: ${maxNum}`);
    return num;
  }
}

function remValue(num) {
  if( !checkMinValue(num) ) {
    return (num-1);
  } else {
    window.alert(`You've reached the minimun value: ${minNum}`);
    return num;
  }
}

function plusNum() {
  p2InputValue.value = addValue(parseInt(p2InputValue.value, 10));
}

function minusNum() {
  p2InputValue.value = remValue(parseInt(p2InputValue.value, 10));
}

function numKey(e) {
  if(e.keyCode === 43) {
    plusNum();
  } else if( e.keyCode === 45) {
    minusNum();
  }
}

minusButton.addEventListener('click', minusNum);
plusButton.addEventListener('click', plusNum);

window.addEventListener('keypress', numKey);

//------  Project 3

//------  Project 4

//------  Project 5

//------  Project 6

//------  Project 7