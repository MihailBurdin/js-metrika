//document.querySelector('#elem').classList.add('www');
// document.querySelector('#elem').classList.remove('www');

// if (document.querySelector('#elem').classList.contains('www')) {
//   } else {
//   }
// document.querySelector('#elem').classList.toggle('www');

// var count = document.querySelector('#elem').classList.length;

// var classes = document.querySelector('#elem').classList;
// classes.forEach(function(className) {
//   alert(className);
// });

// document.querySelector('#elem').addEventListener('click', function() {
//     alert(this.tagName);
//   });

// document.querySelector('#elem').addEventListener('click', function() {
//     alert(this.tagName.toLowerCase());
//   });

// var elements = document.querySelectorAll('.www');
// elements.forEach(function(element) {
//   var tagName = element.tagName.toLowerCase();
//   element.textContent = element.textContent + tagName;
// });

// const ol = document.querySelector('ol');

// const li = document.createElement('li');
// li.textContent = 'пункт';

// ol.appendChild(li);

// const ul = document.querySelector('ul');

// const items = ['1', '2', '3'];

// items.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;

//   ul.appendChild(li);
// });


// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');

// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');


// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   parent.removeChild(child);
// });

// const ol = document.querySelector('ol')
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   const lastChild = ol.lastElementChild;
//   ol.removeChild(lastChild);
// });

// const element = document.querySelector('.element');
// element.addEventListener('click', () => {
//   element.remove();
// });

// const ol = document.querySelector('ol');
// const liList = document.querySelectorAll('ol li');
// liList.forEach(li => {
//   li.addEventListener('click', () => {
//     li.remove();
//   });
// });

// const input = document.querySelector('input');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   const clonedInput = input.cloneNode(true);
//   input.parentNode.insertBefore(clonedInput, input.nextSibling);
// });

// const elem = document.querySelector('#elem');
// const firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';

// const elem = document.querySelector('#elem');
// const lastChild = elem.lastElementChild;
// lastChild.style.color = 'red';

// const elem = document.querySelector('#elem');
// const children = elem.children;
// for (let i = 0; i < children.length; i++) {
//   children[i].textContent += '!';
// }


// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   const secondNextSibling = nextSibling.nextElementSibling;
//   if (secondNextSibling) {
//     secondNextSibling.textContent += '!';
//   }
// }

// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   nextSibling.textContent += '!';
// }

// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   const secondNextSibling = nextSibling.nextElementSibling;
//   if (secondNextSibling) {
//     secondNextSibling.textContent += '!';
//   }
// }

// const elem = document.querySelector('#elem');
// const parent = elem.parentElement;
// if (parent) {
//   parent.style.color = 'red';
// }

// const elem = document.querySelector('#elem');
// const parent = elem.parentElement;
// if (parent) {
//   parent.style.color = 'red';
// }

// var elem = document.getElementById('elem');
// function showWidth() {
//   var width = elem.offsetWidth;
//   alert('ширина элемента: ' + width + 'px');
// }
// function showHeight() {
//   var height = elem.offsetHeight;
//   alert('высота элемента: ' + height + 'px');
// }

// var elem = document.getElementById('elem');
// function showWidth() {
//   var width = elem.clientWidth;
//   alert('ширина элемента без учета границы, но с padding: ' + width + 'px');
// }
// function showHeight() {
//   var height = elem.clientHeight;
//   alert('высота элемента без учета границы, но с padding: ' + height + 'px');
// }

// var elem = document.getElementById('elem');
// var styles = window.getComputedStyle(elem);
// var width = parseFloat(styles.width) - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
// var height = parseFloat(styles.height) - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
// console.log('Ширина элемента без учета границы и padding: ' + width + 'px');
// console.log('Высота элемента без учета границы и padding: ' + height + 'px');

// var elem = document.getElementById('elem');
// function showScrollTop() {
//   var scrollTop = elem.scrollTop;
//   alert('Прокрутка сверху: ' + scrollTop + 'px');
// }
// function showScrollLeft() {
//   var scrollLeft = elem.scrollLeft;
//   alert('Прокрутка слева: ' + scrollLeft + 'px');
// }
// function scrollToTop() {
//   elem.scrollTop = 100;
// }
// function scrollDown() {
//   elem.scrollTop += 100;
// }

// var elem = document.getElementById('elem');
// function showRealHeight() {
//   var realHeight = elem.scrollHeight;
//   alert('высота элемента с учетом прокрутки: ' + realHeight + 'px');
// }
// function showRealWidth() {
//   var realWidth = elem.scrollWidth;
//   alert('ширина элемента с учетом прокрутки: ' + realWidth + 'px');
// }
// function scrollToBottom() {
//   elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// }

// function showScrollTop() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     alert('Прокрутка страницы по вертикали: ' + scrollTop + 'px');
//   }
//   function showScrollLeft() {
//     var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     alert('Прокрутка страницы по горизонтали: ' + scrollLeft + 'px');
//   }

// function scrollToPosition() {
//     window.scrollTo(300, 500);
//   }
//   function scrollDown() {
//     window.scrollBy(0, 300);
//   }