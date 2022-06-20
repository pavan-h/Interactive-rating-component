let rate = document.querySelectorAll(".rating-btn");
let submit  = document.getElementById("submit-btn");
let value = document.querySelector(".rating-box");
let thankYou = document.querySelector(".thank-you");
let span   = document.getElementById("rating");


for (let i = 0; i < rate.length; i++) {
    rate[i].addEventListener('click', () => {
        let rating= rate[i].innerHTML;
        
        for(let i=0; i < rate.lenght; i++){
            rate[i].classList.contains('selected');
            rate[i].classList.remove('selected');
        }
        rate[i].classList.add('selected');


        submit.addEventListener('click', () => {
            value.style.display = 'none';
            thankYou.style.display = 'block';
            span.innerHTML = rating;
        })
    })
}




