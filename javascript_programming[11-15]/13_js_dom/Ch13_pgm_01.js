// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstPara = document.querySelector('p');
console.log(firstPara.textContent); 

const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

const allParas = document.querySelectorAll('p');
console.log(allParas); 

allParas.forEach(para => console.log(para.textContent));

para4.textContent = 'Fourth Paragraph';

para1.id = 'para1';
para1.className = 'paragraph';

para2.setAttribute('id', 'para2');
para2.classList.add('paragraph');

para3.id = 'para3';
para3.classList.add('paragraph');

para4.id = 'para4';
para4.classList.add('paragraph');

para1.style.color = 'green';
para1.style.backgroundColor = 'lightgreen';
para1.style.border = '1px solid green';
para1.style.fontSize = '18px';
para1.style.fontFamily = 'Arial';

para2.style.color = 'red';
para2.style.backgroundColor = 'lightcoral';
para2.style.border = '1px solid red';
para2.style.fontSize = '18px';
para2.style.fontFamily = 'Arial';

para3.style.color = 'green';
para3.style.backgroundColor = 'lightgreen';
para3.style.border = '1px solid green';
para3.style.fontSize = '18px';
para3.style.fontFamily = 'Arial';

para4.style.color = 'red';
para4.style.backgroundColor = 'lightcoral';
para4.style.border = '1px solid red';
para4.style.fontSize = '18px';
para4.style.fontFamily = 'Arial';

allParas.forEach((para, index) => {
  if (index % 2 === 0) {
    para.style.color = 'green';
  } else {
    para.style.color = 'red';
  }
});

para1.textContent = 'First Paragraph';
para1.id = 'para1';
para1.className = 'paragraph';

para2.textContent = 'Second Paragraph';
para2.id = 'para2';
para2.className = 'paragraph';

para3.textContent = 'Third Paragraph';
para3.id = 'para3';
para3.className = 'paragraph';

para4.textContent = 'Fourth Paragraph';
para4.id = 'para4';
para4.className = 'paragraph';