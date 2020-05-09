const billAmount = document.querySelector('#billAmount');
const tipPercentage = document.getElementById('tipPercentage');

const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

console.log({billAmount, tipPercentage, tipAmount, totalAmount});

const calculateTip = () => {
  if( ( billAmount.value > 0) && ( tipPercentage.value > 0) ) {
    tipAmount.value = (billAmount.value * (tipPercentage.value/100));
    totalAmount.value = parseFloat(billAmount.value, 10) + parseFloat(tipAmount.value, 10);
  } else {
    tipAmount.value = "";
    totalAmount.value = "";
  }
}

billAmount.addEventListener('change', calculateTip);
tipPercentage.addEventListener('change', calculateTip);