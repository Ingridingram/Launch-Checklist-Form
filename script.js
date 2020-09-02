window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let usernameInput = document.querySelector("input[name=pilotName]");
      let copliotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass")
      if (usernameInput.value === "" || copliotName.value === "" || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         event.preventDefault()
         alert("Invalid Input!")
      }
   });
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
