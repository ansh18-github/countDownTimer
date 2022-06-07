const hr1= document.getElementById('hou');
const day1= document.getElementById('dy');
const min1= document.getElementById('minu');
const seco1= document.getElementById('seco');
const firstdate= "1 Jan 2023";


function countfunc(){
          const countdown= new Date(firstdate);
          const now= new Date();
          
          const timeLeft= (countdown- now);
          console.log(timeLeft, countdown);

          const totalsec= timeLeft/1000;
const day= Math.floor(totalsec/(60*60*24));
const hr= Math.floor(totalsec/(60*60))%(24);
const min= (Math.floor(totalsec/60)%24)%60;
const sec= Math.floor(totalsec%60);

console.log(day, hr, min, sec);

hr1.innerHTML=hr;
day1.innerHTML=day;
min1.innerHTML=min;
seco1.innerHTML=sec;
}

countfunc();
setInterval(countfunc, 1000);
