// get elements

let snd = document.querySelector('.snd');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');



setInterval(() => {
    let time = new Date();
    let current_snd = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();

    snd.style.transform = `rotate(${getClock(current_snd, 60)}deg)`; 
    min.style.transform = `rotate(${getClock(current_min, 60)}deg)`; 
    hour.style.transform = `rotate(${getClock(current_hour, 12)}deg)`; 

}, 1000);

// Clock Calculation
function getClock(current, range){
    return (360 * current) / range;
}




