




//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;
let lapNow= null;
var old_data = null;
// let array = [];
// localStorage.setItem("array" , JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));

//Define var to hold stopwatch status
let status = "stopped";
localStorage.clear();

//Stopwatch function (logic to determine when to increment next value, etc.)
//dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



 




function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}
  

//shortcut for start
document.addEventListener("keydown" , e => {
    if(
        e.key.toLowerCase() === "s"
    ){
        if(status === "stopped"){

            //Start the stopwatch (by calling the setInterval() function)
            interval = window.setInterval(stopWatch, 1000);
            
            status = "started";
    
        }
    

    }
} );


//shortcut for stop  button used t
document.addEventListener("keydown" , e => {
    if(
        e.key.toLowerCase() === "t"
    ){
        lapNow = `<div class="lap">${displayHours} : ${displayMinutes} : ${displaySeconds}</div>`;
        if(status === "started") {
     
             window.clearInterval(interval);
             
             status = "stopped";
      
     
          
      
     
     
     // to add the value when we press the stop button
          old_data = JSON.parse(localStorage.getItem("data"));
          old_data.push(lapNow);
         
          localStorage.setItem("data" , JSON.stringify(old_data));
     
         // to print the local storage
         if(localStorage.getItem("data") != null){
             document.getElementById("lapRecord").innerHTML = JSON.parse(localStorage.getItem("data"));
             
             }
     
         }
    

    }
} );


//shortcut for reset
document.addEventListener("keydown" , e => {
    if(
        e.key.toLowerCase() === "r"
    ){
        window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    status = "stopped";
    document.getElementById("lapRecord").innerHTML=  "";
    localStorage.clear();
    

    }
} );



//shortcut for laps
document.addEventListener("keydown" , e => {
    if(
        e.key.toLowerCase() === "l"
    ){
        lapNow = `<div class="lap">${displayHours} : ${displayMinutes} : ${displaySeconds}</div>`;
    

        if(localStorage.getItem("data") === null){
            localStorage.setItem("data" , "[]");
        }
    // to add the new value to the old database with earlier time value
         old_data = JSON.parse(localStorage.getItem("data"));
        old_data.push(lapNow);
        //updating the old and new values in the local database
        localStorage.setItem("data" , JSON.stringify(old_data));
    

    }
} );




function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        
        status = "started";

    }

    

}

function stop(){
    
    lapNow = `<div class="lap">${displayHours} : ${displayMinutes} : ${displaySeconds}</div>`;
   if(status === "started") {

        window.clearInterval(interval);
        
        status = "stopped";
 

     
 


// to add the value when we press the stop button
     old_data = JSON.parse(localStorage.getItem("data"));
     old_data.push(lapNow);
    
     localStorage.setItem("data" , JSON.stringify(old_data));

    // to print the local storage
    if(localStorage.getItem("data") != null){
        document.getElementById("lapRecord").innerHTML = JSON.parse(localStorage.getItem("data"));
        
        }

    }
}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    status = "stopped";
    document.getElementById("lapRecord").innerHTML=  "";
    localStorage.clear();
    


}

function lap(){
    // to save the current stopwatch value
    lapNow = `<div class="lap">${displayHours} : ${displayMinutes} : ${displaySeconds}</div>`;
    

    if(localStorage.getItem("data") === null){
        localStorage.setItem("data" , "[]");
    }
// to add the new value to the old database with earlier time value
     old_data = JSON.parse(localStorage.getItem("data"));
    old_data.push(lapNow);
    //updating the old and new values in the local database
    localStorage.setItem("data" , JSON.stringify(old_data));
    




}