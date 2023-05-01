$(function () {
/*  This jQuery event listener captures information saved in the button's sibling with the class of "description" and the ID of the button's parent element, and saves both items in local storage as timeBlock and task. This information will be retrieved for display in the appropriate slot, courtesy of a localStorage.getItem action later in the code. */
  
  $('button').on('click', function(event) {
    event.preventDefault();
    console.log("Save to local storage");
    var task = $(this).parent().children('.description').val();
    console.log(task);
    var timeBlock = $(this).parent().attr('id')
    console.log(timeBlock);
    localStorage.setItem(timeBlock, task);
  });
  
  
  /* This code sets variable for the current time (determined via dayjs()), applies a time value to each hour of the day that is being covered by the planner (in my case, 8 am hour through the 6 pm hour) to be used to compare against the current time, and variables for the rows of the planner itself. */

  var currentTime = dayjs();

  var eightAM = dayjs().set('hour', 8).set('minute', 00).set('second', 00);
  var nineAM = dayjs().set('hour', 9).set('minute', 00).set('second', 00);
  var tenAM = dayjs().set('hour', 10).set('minute', 00).set('second', 00);
  var elevenAM = dayjs().set('hour', 11).set('minute', 00).set('second', 00);
  var twelvePM = dayjs().set('hour', 12).set('minute', 00).set('second', 00);
  var onePM = dayjs().set('hour', 13).set('minute', 00).set('second', 00);
  var twoPM = dayjs().set('hour', 14).set('minute', 00).set('second', 00);
  var threePM = dayjs().set('hour', 15).set('minute', 00).set('second', 00);
  var fourPM = dayjs().set('hour', 16).set('minute', 00).set('second', 00);
  var fivePM = dayjs().set('hour', 17).set('minute', 00).set('second', 00);
  var sixPM = dayjs().set('hour', 18).set('minute', 00).set('second', 00);

  var hourEight = $('#hour-8');
  var hourNine = $('#hour-9');
  var hourTen = $('#hour-10');
  var hourEleven = $('#hour-11');
  var hourTwelve = $('#hour-12');
  var hourThirteen = $('#hour-13');
  var hourFourten = $('#hour-14');
  var hourFifteen = $('#hour-15');
  var hourSixteen = $('#hour-16');
  var hourSeventeen = $('#hour-17');
  var hourEighteen = $('#hour-18');

  var hourlyTimes = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM];
  var hourSlots = [hourEight, hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourten, hourFifteen, hourSixteen, hourSeventeen, hourEighteen];

/* This for loop looks at the current time and the time value of each hour of time, and then assigns a past, present, or future class to each row of the planner accordingly. */ 

  for (var i = 0; i < hourSlots.length; i++) {
    if ((hourlyTimes[i].diff(currentTime)) < -3600000) {
      console.log("Class is past");
      hourSlots[i].addClass('past');
    } else if (hourlyTimes[i].diff(currentTime) > 0) {
      console.log("Class is future");
      hourSlots[i].addClass('future');  
    } else {
      console.log("Class is present");
      hourSlots[i].addClass('present');  
    }
  }

// Do I have anything in local storage in any of my hour slots? Let's call them all, just in case.
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));



  /* A function that pulls the current day and displays it in "[full day], [full spelling of month] [double digit date], [four-digit year]" format in the HTML element with the ID of currentDay. */

  setInterval(function() {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));
  }, 1000);



});







