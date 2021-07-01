// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// };
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/test.jpg') {
//       myImage.setAttribute('src', 'images/test1.jpg');
//     } else {
//       myImage.setAttribute('src', 'images/test.jpg');
//     }
// }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  
  if(!myName || myName == ""){
    alert("请重新输入你的名字")
    setUserName()
  } else {
    localStorage.setItem('name', myName);
    // myHeading.textContent = 'Mozilla 酷毙了，' + myName;}
    myHeading.innerHTML = "酷毙了," + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}