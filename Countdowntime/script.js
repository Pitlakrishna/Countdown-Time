const daysEl =document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minutesEl =document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const ftime='20 march 2023';
function countdown(){
    const FtimeDate=new Date(ftime);
    const cdate=new Date();
    const tseconds=(FtimeDate-cdate) / 1000;
    const days=Math.floor(tseconds / 3600 /24);
    const hours=Math.floor(tseconds / 3600 )%24;
    const minutes=Math.floor(tseconds / 60)%60;
    const seconds= Math.floor(tseconds) % 60;
    daysEl.innerText=timeformate(days);
    hoursEl.innerText=timeformate(hours);
    minutesEl.innerText=timeformate(minutes);
    secondsEl.innerText=timeformate(seconds);

}

function timeformate(time){
    return time <10 ? (`0${time}`): time ;
}
countdown();
setInterval(countdown, 1000);