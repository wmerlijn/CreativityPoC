# README Knoppen POC

**Version 1.1**

Een Proof of Concept voor de interactie in de applicatie.
Deze POC is gemaakt om aan te tonen dat een knop die steeds moeilijker in te drukken is frustrerend kan werken voor de gebruiker.
Bij elke keer drukken zal de knop 0.1 seconden langer er over doen om weer clickbaar te zijn.
```js
    setTimeout(enableButton, clickCounter * 100);
```
Dus bij bijvoorbeeld 23x drukken dan is de knop uitgeschakeld voor 2.3 seconden.

De animatie speelt ook af aan de hand van het aantal x clicken. 50% van de tijd gaat de knop naar beneden. De andere 50% gaat hij weer terug om hoog.
```js
    button.style.setProperty("--transitionTime", (clickCounter * 50) + "ms")
```
---

## Installation
Deze applicatie vereist geen extra libraries of extensies en kan met basic HTML, CSS en Java al gestart worden.

- Stap 1: Clone de github https://github.com/wmerlijn/CreativityPoC.git
- Stap 2: Visual studio code -> Clone Git Repository -> Paste hier de link
- Stap 3: Sla de repository lokaal op je computer op


---

## Bugs & Next steps
De code werkt momenteel precies zoals hij bedoeld is. Er zijn geen bugs in de code die opgelost moeten worden.

Wil je de code uitbreiden dan zou je eventueel een functie kunnen toevoegen die de cursor veranderd zodra de knop is ingedrukt. 

```js
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
```
Hier word de duratie van de knop die uitgeschakeld word bepaald en hier moet je rekening mee houden bij het toevoegen van de nieuwe functie.

---

## Contributers

- Merlijn Wilders, m.wilders@student.fontys.nl

---

## License & Copyright

© Merlijn Wilders, Fontys ICT Media & Design
