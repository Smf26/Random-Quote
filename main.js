//"use strict";

const displayContainer = document.getElementById('container');

let getQuote = () => {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "API_KEY",
      "rapidapiproject": "default-application_4210380"
	  }
  })
  .then((response) => response.json())
  .then((data) => {
    displayContainer.innerHTML = `
      <div class="quote">
        <p> ${data.content} </p>
        <h5> ${data.originator.name} </h5>
      </div>
      <div class="generateBtn">
         <button onClick="getQuote()">Generate Quote</button>
      </div>
    `
  }) 
  .catch(err => {
    displayContainer.innerHTML = `<div class="quote">
      <p class="error"> ${err.message} !!! </p>`
  });
};
getQuote()
