// `Here are the Outputs : ${mm}-${dd}-${yyyy}`
const mtarget = document.querySelector("#maintarget");
const taskInput = document.querySelector("#task");

//1. Write a JavaScript program to print the contents of the current window
var curWindow = function() {
  window.print();
};

//curWindow();

//2. Write a JavaScript program to get the current date.
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

//3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// To do this you need to know herons formula for 3 different sides
var triArea = function() {
  var l1 = 5,
    l2 = 6,
    l3 = 7;

  var perimeter2 = (l1 + l2 + l3) / 2;
  var totarea = function(perimeter2) {
    var area = Math.sqrt(
      perimeter2 * ((perimeter2 - l1) * (perimeter2 - l2) * (perimeter2 - l3))
    );
    return area;
  };
  console.log(totarea(perimeter2));
};

//triArea();


//4. Write a JavaScript program to print the contents of the current window
var curWindow = function() {
    window.print();
  };
  
  //curWindow();