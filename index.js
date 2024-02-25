//toggle button for responsiveness
// import React from "react";
// import ReactDom from "react-dom";
  
// var date = "tuesday";

// ReactDom.render(
//   <div>
//     <h1>Toggle Button For Responsiveness {date}</h1>
//   </div>,
//   document.getElementById("root")
// )




var toggleBtn =document.querySelector(".toggle-btn")
var toggleBtnIcon =document.querySelector(".toggle-btn i")
var dropDownMenu =document.querySelector(".dropdown-link")

toggleBtn.onclick=function () {
dropDownMenu.classList.toggle('open')
var isOpen = dropDownMenu.classList.contains('open')
toggleBtnIcon.classList = isOpen
? "fa-solid fa-bars"
:  "fa-solid fa-xmark"

}
//make it visible and dissappear
function toggle() {
    var drop = document.getElementById("dropdown");
    if (drop.style.display === "none") {
      drop.style.display = "block";
    } else {
      drop.style.display = "none";
    }
  }



//body search

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



  //horizontal scrolling
  document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector("#scroll-images");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector("#left");
    const rightButton = document.querySelector("#right");

    function checkScroll() {
      const currentScroll = scrollImages.scrollLeft;
      if (currentScroll === 0) {
        leftButton.setAttribute("disabled", "true");
        rightButton.removeAttribute("disabled");
      } else if (currentScroll === scrollLength) {
        rightButton.setAttribute("disabled", "true");
        leftButton.removeAttribute("disabled");
      } else {
        leftButton.removeAttribute("disabled");
        rightButton.removeAttribute("disabled");
      }
    }

    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll() {
      scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    }

    function rightScroll() {
      scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
  });


