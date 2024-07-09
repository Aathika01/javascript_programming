// Get the elements
const yearElement = document.querySelector('h1 span');
const dateAndTimeElement = document.querySelector('h2');
const listItems = document.querySelectorAll('ul li');

function changeYearColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  yearElement.style.color = randomColor;
}

function changeDateAndTimeColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  dateAndTimeElement.style.backgroundColor = randomColor;
}

function setListItemColors() {
  listItems.forEach((item) => {
    if (item.textContent.includes('Done')) {
      item.style.backgroundColor = 'green';
    } else if (item.textContent.includes('Ongoing')) {
      item.style.backgroundColor = 'yellow';
    } else {
      item.style.backgroundColor = 'red';
    }
  });
}

setListItemColors();

setInterval(() => {
  changeYearColor();
  changeDateAndTimeColor();
}, 1000);