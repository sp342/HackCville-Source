// we'll be using the "axios" package to make our API call
let axios = require("axios");

// define a function which makes a call to the api
function getMessageData() {
  // note the .then() and .catch() bits of this code.  this is the result of something called
  // "asyncronous" functions, a topic we'll cover more next week
  axios
    .get(
      "https://api.github.com/repos/mdcrawford/source/commits?since=2018-02-14T00:00:00Z"
    )
    .then(response => {
      // here, we pass in a function with one parameter, response,
      // which represents the HTTP response we received from our GET request
      messageData = response.data;

      // using .map() over the array of results to print out a little message about each result
      messageData.map(datum => {
          //for(i=0; i<response.data.length; i++){
            console.log(datum + " has a message " + datum.commit.message);
          //}
      });
    })
    .catch(error => {
      // if something goes wrong with the GET request, we'll log the error instead
      console.log(error);
    });
}

// finally, we call the above function
getMessageData();
console.log("Here is all the messages!!"); // this will probably print first, despite the fact that we called it second
