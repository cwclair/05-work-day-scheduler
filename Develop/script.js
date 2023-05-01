// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
/*  TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

HINT: What does `this` reference in the click listener function? 

(CHRIS NOTE: In an event, "this" refers to the element that received the event, so the save button.) 

How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage? */
  
  $('button').on('click', function(event) {
    event.preventDefault();
    console.log("Save to local storage");
    var task = $(this).parent().children('.description').val();
    console.log(task);
    var timeBlock = $(this).parent().attr('id')
    console.log(timeBlock);
    localStorage.setItem(timeBlock, task);
  });
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. DONE
  //
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // NOT WORKING PROPERLY!!!!

  // $('.description').val(localStorage.getItem('task'));
  $('.description').val(localStorage.getItem('hour-16'));



  // TODO: Add code to display the current date in the header of the page. DONE
  setInterval(function() {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));
  }, 1000);



});







