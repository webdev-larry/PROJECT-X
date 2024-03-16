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



  var forms = document.querySelector("#right"),
pwShowHide = document.querySelectorAll("#eye-icon");
pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
});







//greet user
 
var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "good morning";  
    } else if (hour < 17) {  
      welcome = "good afternoon";  
    } else {  
      welcome = "good evening";  
    }  
console.log('welcome')
document.getElementById ("time").innerHTML =  welcome ; 


