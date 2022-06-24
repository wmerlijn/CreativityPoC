let clickCounter = 0;

//wanneer de 20 seconden voorbij zijn dan gaat het naar de functie
setTimeout(timer, 21000)
//doorverwijzing naar het volgende scherm
function timer() {
  window.location.href = "gameover.html";
}

//terug naar de microgame
function back() {
  console.log("test");
  window.location.href = "index.html";
}



//timer gehaald van internet
var timeleft = 20;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);



//bijhouden hoevaak de knop is ingedrukt
function knopClick() {
    console.log("test");
    clickCounter++;
    console.log(clickCounter);
    document.getElementById("clicks").innerHTML = clickCounter;
    if(!button.disabled){ disableButton(); }

};



//Selecteren van de button
const button = document.querySelector('#button');
//functie die button uitschakeld

function disableButton() {
    clearTimeout(button.classremover)
   console.log("Disable");
    button.disabled = true;
    //Button word steeds langer niet clickbaar
    setTimeout(enableButton, clickCounter * 100);
    button.classList.add("disabled");
    button.classremover=setTimeout(()=>{
        button.classList.remove("disabled");
    },clickCounter*50)
};



//functie de de button weer aanzet
function enableButton() {
    console.log("Enable");
    button.disabled = false;
    button.style.setProperty("--transitionTime", (clickCounter * 50) + "ms")

  };



//Uitschakelen button bij click

button.addEventListener('click', knopClick);