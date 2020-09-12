window.addEventListener("load", function() {
   //do some stuff with JSON fetch here...
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {      
         const missionTarget = document.getElementById('missionTarget');
         let index = 0;
         let getPlanet = function () {
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}">`
            index = (index + 1) % json.length;
         };
            missionTarget.addEventListener("wheel", getPlanet) 
            getPlanet()
         });
   


   let form = document.querySelector("form");
 
   let getPilotStatus = document.getElementById("pilotStatus");
   let getCopilotStatus = document.getElementById("copilotStatus");
   let getFuelStatus = document.getElementById("fuelStatus");
   let getCargoStatus = document.getElementById("cargoStatus");
   let faultyItems = document.getElementById('faultyItems')
   let launchStatus = document.getElementById('launchStatus')

   form.addEventListener("submit", function(event) {
      event.preventDefault()
      
      //get our pilot data from the form
      let pilotInput = document.querySelector("input[name=pilotName]");
      let pilotInputValue = pilotInput.value;
      let copilotInput = document.querySelector("input[name=copilotName]");
      let copilotInputValue = copilotInput.value;
      let fuelStatusInput = document.querySelector("input[name=fuelLevel]");
      let fuelStatusInputValue = fuelStatusInput.value;
      let cargoStatusInput = document.querySelector("input[name=cargoMass]");
      let cargoStatusInputValue = cargoStatusInput.value;


      function getStatus() {
         getPilotStatus.innerHTML = `hello ${pilotInputValue}`;
         getCopilotStatus.innerHTML = `Your co-pilot will be ${copilotInputValue}`;
         getFuelStatus.innerHTML = `Fuel Status: ${fuelStatusInputValue}`;
         getCargoStatus.innerHTML = `Cargo Weight: ${cargoStatusInputValue}`;
      }

      //start our validations
      if (pilotInputValue === "" || copilotInputValue === "" || isNaN(fuelStatusInputValue) === true || isNaN(cargoStatusInputValue) === true) {
         alert("Invalid Input!")
      } else if (fuelStatusInputValue < 10000 || cargoStatusInputValue > 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         getStatus() 
      } else {
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'green';
         launchStatus.innerHTML = 'Shuttle Is Ready For Launch!'
         getStatus()
         }
      });
   });
})