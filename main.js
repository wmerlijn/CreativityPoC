let clickCounter = 0;


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
