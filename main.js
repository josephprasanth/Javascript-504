// `Here are the Outputs : ${mm}-${dd}-${yyyy}`
const mtarget = document.querySelector("#maintarget");
const taskInput = document.querySelector("#task");

//1) Write a JavaScript program to print the contents of the current window
var curWindow = function() {
  window.print();
};

//curWindow();

//2) Write a JavaScript program to get the current date.
//Pointers : In javascript month number starts from 0
//References : https://www.youtube.com/watch?v=M3VEFVBRw-o
//Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var curDate = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yy = today.getFullYear();

  var getMonthNameFromNumber = function(mm) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return monthNames[mm];
  };
  console.log(dd + "-" + getMonthNameFromNumber(mm) + "-" + yy);
};
//curDate();


//3) Write a JavaScript program to print the contents of the current window
var curWindow = function() {
    window.print();
  };
  
  //curWindow();