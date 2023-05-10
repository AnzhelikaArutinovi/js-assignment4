"use strict";

let inputForm = document.getElementById("input-form");
let ulElement = document.getElementById("ul-list");
let btnClear = document.getElementById("btn-clear");
let formElement = document.getElementById("form-wraper");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValue = inputForm.value;
  let liElement = document.createElement("li");
  let btnDelete = document.createElement("button");
  let btnCheck = document.createElement("button");

  btnDelete.addEventListener("click", function () {
    liElement.remove();
  });
  btnCheck.addEventListener("click", function () {
    liElement.remove();
  });
  liElement.appendChild(btnCheck);
  liElement.innerText = inputValue;
  btnDelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  btnDelete.style.background = "transparent";
  liElement.appendChild(btnDelete);
  ulElement.appendChild(liElement);
  inputForm.value = " ";
});

btnClear.addEventListener("click", function () {
  ulElement.innerHTML = " ";
});

inputForm.addEventListener("focus", function () {
  inputForm.style.outline = "none";
});

// დავალება 1
// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36.
// let array1 = [5, 25, 89, 120, 36];

// array1.push("javascript", "python");
// array1.unshift("html", "css");
// console.log(array1.length);
// array1.shift();
// array1.pop();
// console.log(array1);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი.
// let array2 = ["ფორთოხალი", "ბანანი", "მსხალი"];

// console.log(array2.length);
// array2.push("ვაშლი", "ანანასი");
// array2.unshift("საზამთრო");
// console.log(array2.length);
// array2.splice(2, " ", "მანგო");
// array2.shift();
// array2.pop();
// console.log(array2);

// 3. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let array3 = [1, 2, 3, 4, 5];

// array3.splice(3, " ", "a", "b", "c");
// console.log(array3);

// 4. გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი.
// let languages = ["html", "css", "javascript", "python", "php"];

// let langFiltered = languages.filter((e) => e.length > 3);
// console.log(langFiltered);

// 5. დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს.
// let words = ["Madrid", "Rome", "Milan", "Berlin"];

// let wordsFiltered = words.filter(
//   (word) => word.includes("m") || word.includes("M")
// );
// console.log(wordsFiltered);

// 6. წაშალეთ მასივიდან რიცხვი 10
// let array6 = [2, 15, 10, 24];

// array6.splice(2, 1);
// console.log(array6);
