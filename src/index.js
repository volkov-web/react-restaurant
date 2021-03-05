
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let hamburger = document.querySelector(".hamburger");
let header_expand_nav_wrapper = document.querySelector(".header_expand_nav_wrapper");
let typesMenu = document.querySelector("#typesMenu");
let typesMenuDropdown = document.querySelector("#typesMenuDropdown");

function needCloseDropdown(event, allowedIds){
  let needClose = 1;
  let match = 0;
  for(let i = 0; i < allowedIds.length; i++) {
    if(event.target.closest(allowedIds[i])) {
      match = 1;
      break;
    }
  }
  if(match) needClose = 0;
  console.log("needCloseDropdown: ", needClose);
  return needClose;
}

let haveListener_typesMenuDropdown = 0;
typesMenu.addEventListener("click", function(){
  typesMenuDropdown.classList.toggle("open");
  if(haveListener_typesMenuDropdown == 0) {
    haveListener_typesMenuDropdown = 1;
    setTimeout(function(){document.addEventListener("click", function(event){
      haveListener_typesMenuDropdown = 0;
      if(needCloseDropdown(event, ["#typesMenu"])) {
        typesMenuDropdown.classList.remove("open");
      };
    }, {once: true})}, 0);
  }
});

let typesMenuExpanded = document.querySelector("#typesMenuExpanded");
let typesMenuExpandedDropdown = document.querySelector("#typesMenuExpandedDropdown");

let haveListener_typesMenuExpandedDropdown = 0;
typesMenuExpanded.addEventListener("click", function(){
  typesMenuExpandedDropdown.classList.toggle("open");
  if(haveListener_typesMenuExpandedDropdown == 0) {
    haveListener_typesMenuExpandedDropdown = 1;
    setTimeout(function(){document.addEventListener("click", function(event){
      haveListener_typesMenuExpandedDropdown = 0;
      if(needCloseDropdown(event, ["#typesMenuExpanded"])) {
        typesMenuExpandedDropdown.classList.remove("open");
      };
    }, {once: true})}, 0);
  }
});

hamburger.addEventListener("click", function(){
  header_expand_nav_wrapper.classList.toggle("open");
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
