function removeStuff(inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/[^a-z]/g, "");
  var letterArray = createArray(inputString);
  var displayString = createDisplayString(letterArray);
  return displayString;
};

function createArray(inputString) {
  var dimensions = Math.ceil(Math.sqrt(inputString.length));
  var letterArray=[];
  var lineArray=[];
  var counter = 0;
  for(i = 0; i < dimensions; i++){
    for(j = 0; j < dimensions; j++) {
      lineArray.push(inputString.charAt(counter));
      counter++;
    }
    letterArray.push(lineArray);
    lineArray = [];
  }
  return letterArray;
};

function createDisplayString(letterArray) {
  var displayString = "";
  var dimensions = letterArray[1].length;
  for(i = 0; i < dimensions; i++){
    for(j = 0; j < dimensions; j++) {
      displayString = displayString + letterArray[j][i];
    }
  }
  displayString = displayString.replace(/(.{5})/g,"$1 ");
  return displayString;
};

$(document).ready(function() {
    $("#cryptosquare").submit(function(event){
      event.preventDefault();
      var inputString = $("#string").val();
      $("#result").text(removeStuff(inputString));
      $("#string").val("");
    });
});
