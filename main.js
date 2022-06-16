let clickCounter = 0;


//bijhouden hoevaak de knop is ingedrukt
function knopClick() {
    console.log("test");
    clickCounter++;
    console.log(clickCounter);

};
//Selecteren van de button
const button = document.querySelector('#button');


//functie die button uitschakeld

function disableButton() {
  console.log("Disable");
    button.disabled = true;
    //Button word steeds langer niet clickbaar
    setTimeout(enableButton, clickCounter * 100);
};

//functie de de button weer aanzet
function enableButton() {
    console.log("Enable");
      button.disabled = false;

  };

//Uitschakelen button bij click
button.addEventListener('click', disableButton);
