let text = document.getElementById("text");
console.log(text.innerHTML);

let tag = document.getElementsByTagName("h1");
console.log(tag);

let head = document.getElementsByClassName("box");
console.log(head.innerText);

let h2 = document.getElementsByTagName("h1");
let newText = "Hello World";
h2[2].innerText = newText;
console.log(h2[2].innerText);

let b = document.getElementById("box1");
let newt = "Welcome To Elevation Academy";
function callMe() {
  console.log(b);
  b.innerHTML = newt;
}

let header = (document.getElementById("heading").style.color = "red");
console.log(header);

let box = document.querySelector(".parent");
let btn = document.querySelector("#event");
let count = 0;
btn.addEventListener("click", () => {
  if (count % 2 === 0) {
    box.setAttribute("style", "flex-direction:column");
    count++;
    console.log(count);
  } else {
    box.setAttribute("style", "flex-direction:row");
    count++;
    console.log(count);
  }
});

setInterval(function () {
  let time = document.getElementById("timer");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, minutes, seconds);
  let currentTime = hours + ":" + minutes + ":" + seconds;
  time.innerText = currentTime;
}, 1000);
