//------  Project 1
const blue = "rgba(17,29,94,1)";
const orange = "rgba(240, 111, 6, 1)";
const green = "rgba(38, 204, 12, 1)";

const name = document.querySelector('.color-text--name');
const title = document.querySelector('.heading2--project1');
const box = document.querySelector('.center-box--p1');
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