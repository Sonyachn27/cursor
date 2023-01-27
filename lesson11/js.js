const btn1 = document.querySelector(".fond");

const anim1 = document.querySelector(".sword1");
const anim2 = document.querySelector(".sword2");
const anim3 = document.querySelector(".sword3");
const anim4 = document.querySelector(".sword4");

btn1.onclick = () => {
   
    anim2.style.animationPlayState = "running";
    anim3.style.animationPlayState = "running";
  };