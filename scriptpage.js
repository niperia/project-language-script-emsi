var divRow = document.createElement('div');

function AjCours2(image, title, price) {
  divRow.innerHTML +=
    '<div class="courseCard"><div class="courseImg"><img src="' +
    image +
    '" alt=""  width="300" height="250"></div><div class="courseInfo"><p class="courseTitle">' +
    title +
    '</p><p class="coursePrice">$' +
    price +
    '</p> </div></div>';
  // console.log(title)
}
function displayall() {
  for (let i = 0; i < 18; i++) {
    if (i % 3 === 0) {
      divRow = document.createElement('div');
      divRow.setAttribute('class', 'row');
      document.getElementById('coursesBlock').appendChild(divRow);
    }
    AjCours2(courses[i].image, courses[i].title, courses[i].price);
  }
}
displayall();

// courses.forEach(n => {
//     AjCours2(n.image, n.title, n.price)
// });

let tmp = new Array();

courses.forEach((n) => {
  tmp.push(n.category.toUpperCase());
});

let cat = [...new Set(new Set(tmp))];
// console.log(cat)
function addCategory(c) {}

cat.forEach((n) => {
  document.getElementById('jma3').innerHTML +=
    '<div class="selectCourse" id="' +
    n +
    '"><button class="btn" value="' +
    n +
    '">' +
    n +
    '</button></div>';
});

let tmp1 = new Array();
var titles = [
  courses.map((v) => {
    return v.title;
  }),
];

document.getElementById('search').addEventListener('input', function () {
  let search = document.getElementById('search').value.toUpperCase();
  tmp1 = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].title.toUpperCase().includes(search)) {
      tmp1.push(courses[i]);
    }
  }

  // titles[i] == search
  // tmp1.push(courses[i])
  if (tmp1 != []) {
    document.getElementById('coursesBlock').innerHTML = ' ';

    tmp1.forEach((n, i) => {
      if (i % 3 === 0) {
        divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');
        document.getElementById('coursesBlock').appendChild(divRow);
      }
      AjCours2(n.image, n.title, n.price);
    });
  } else {
    for (let i = 0; i < 3; i++) {
      AjCours2(courses[i].image, courses[i].title, courses[i].price);
    }
  }
});

var btns = document.querySelectorAll('.btn');
let tmpCat = new Array();

btns.forEach((n) => {
  n.addEventListener('click', function () {
    tmpCat = [];
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].category.includes(n.value)) {
        tmpCat.push(courses[i]);
      }
    }
    document.getElementById('coursesBlock').innerHTML = ' ';

    tmpCat.forEach((n, i) => {
      if (i % 3 === 0) {
        divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');
        document.getElementById('coursesBlock').appendChild(divRow);
      }
      AjCours2(n.image, n.title, n.price);
    });
  });
});

var priice = document.getElementById('price');
let tmpPrice = new Array();
price.addEventListener('change', function () {
  document.getElementById('coursesBlock').innerHTML = '';

  let p = priice.value;
  document.getElementById('priceValue').innerHTML = p + '$';
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].price <= p) {
      tmpPrice.push(courses[i]);
    }
  }
  tmpPrice.forEach((n, i) => {
    if (i % 3 === 0) {
      divRow = document.createElement('div');
      divRow.setAttribute('class', 'row');
      document.getElementById('coursesBlock').appendChild(divRow);
    }
    let html =
      '<div class="courseCard"><div class="courseImg"><img src="' +
      n.image +
      '" alt=""  style=" width="300" height="250" " ></div><div class="courseInfo"><p class="courseTitle">' +
      n.title +
      '</p><p class="coursePrice">$' +
      n.price +
      '</p> </div></div>';

    divRow.innerHTML += html;
  });
  tmpPrice = [];
});

// console.log(tmp1)
document.getElementById('all-btn').addEventListener('click', function () {
  displayall();
});
