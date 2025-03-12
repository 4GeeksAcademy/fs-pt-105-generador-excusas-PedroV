import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excusa = "";
  excusa += who[Math.floor(Math.random() * who.length)];
  excusa += " ";
  excusa += action[Math.floor(Math.random() * action.length)];
  excusa += " ";
  excusa += what[Math.floor(Math.random() * what.length)];
  excusa += " ";
  excusa += when[Math.floor(Math.random() * when.length)];
  excusa += " ";

  document.getElementById("excusa").innerHTML = excusa;
  console.log("Hello Rigo from the console!");
}
