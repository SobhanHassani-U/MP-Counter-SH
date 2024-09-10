const display = document.getElementById('number');
const button_decrease = document.getElementById('decrease');
const button_reset = document.getElementById('reset');
const button_increase = document.getElementById('increase');

let newnum;


//button_increase

button_increase.addEventListener('click' , function(){
    newnum = Number(display.innerHTML) + 1 ;
    display.innerHTML = newnum ;
     if(newnum > 0){
          display.style.color = 'green';
     }
     else{
          display.style.color = 'red';
     }
});


//button_reset

button_reset.addEventListener('click' , function(){
     display.innerHTML = 0 ;  
      display.style.color = 'white';
});

//button_decrease

button_decrease.addEventListener('click' , function(){
    newnum = Number(display.innerHTML) - 1 ;
    display.innerHTML = newnum ;
     if(newnum < 0){
         display.style.color = 'red'
     }
     else{
         display.style.color = 'green'
     }
});