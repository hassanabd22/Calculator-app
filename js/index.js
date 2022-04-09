let secreen = document.querySelector(".screen input");
let allBtn = document.querySelectorAll(".keypad input");



allBtn.forEach(e => {
    e.addEventListener("click" , () => {
        if (e.value != "=" && e.value != "Rest" && e.value != "Del") {
            secreen.value += e.dataset.num;
        }
        
        
        else if (e.value === "=") {
            secreen.value = eval(secreen.value);
        }
        else if (e.value == "Rest") {
            secreen.value = 0;
        }
        else if (e.value == "Del") {
           secreen.value = secreen.value.toString().split('').slice(0,secreen.value.toString().split('').length - 1).join('');
        }
    })
})


let btn = document.getElementById('checkbox');
btn.onchange = function darkMode() {
   document.body.classList.toggle('dark-mode')
}