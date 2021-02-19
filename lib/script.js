console.log("We're live!");

let input = document.querySelector('#input');
console.log(input);
let currentKey = document.querySelectorAll('.letter')
console.log(currentKey[0].innerHTML);



for (let i = 0; i <currentKey.length; i ++) {

input.addEventListener("keydown", function(e){
  console.log(e.key)
  let  currentPress = currentKey[i].innerHTML;
  console.log(currentPress)
  console.log(currentPress)
  if (e.key === currentPress) {
    currentKey[i].classList.add('active')
    //currentKey[i].style.background = 'red'
  }
})
input.addEventListener("keyup", function(e) {
  currentKey[i].classList.remove('active')
  input.value = "";
})
}