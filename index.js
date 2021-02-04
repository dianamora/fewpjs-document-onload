//set up a DOMContentLoaded event in order to detect when the HTML page has loaded

document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
  }); 

//Use the event's callback function to target the paragraph element with id="text" 
//and replace the text with "This is really cool!"

function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }