const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function time(){
    let data = new Date();
    let currentHour = data.getHours();
    let currentMinute = data.getMinutes();
    let currentSecond = data.getSeconds();

    hours.textContent = currentHour;
    minutes.textContent = currentMinute;
    //seconds.textContent = currentSecond;

    if(currentSecond < 10){
        seconds.textContent = '0' + currentSecond;
    } else{
        seconds.textContent = currentSecond;
    }
}


const clock = setInterval(time);


