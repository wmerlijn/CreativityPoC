let clickCounter = 0;



function knopClick() {
    console.log("test");
    clickCounter++;
    console.log(clickCounter);

};







const button = document.querySelector('#button');

function disableButton() {
  console.log("Disable");
    button.disabled = true;
    setTimeout(enableButton, clickCounter * 1000);
};

function enableButton() {
    console.log("Enable");
      button.disabled = false;

  };



button.addEventListener('click', disableButton);
