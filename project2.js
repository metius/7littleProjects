//------  Project 2
const minNum = 0;
const maxNum = 20;

const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const p2InputValue = document.querySelector('#p2_input');

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

// window.addEventListener('keypress', numKey);
document.addEventListener('keypress', numKey);
