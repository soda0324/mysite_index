const 바디 = document.querySelector("body");

const 체크박스 = document.querySelector("input");

function 특정_동작(){
    바디.classList.toggle("dark-mode");
}

체크박스.addEventListener("change", 특정_동작);