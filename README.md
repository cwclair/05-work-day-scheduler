# 05-work-day-scheduler
Create a simple calendar application that allows a user to save events for each hour of the day.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description of the Work

The first thing I did was add a function that pulls the current day and displays it in "[full day], [full spelling of month] [double digit date], [four-digit year]" format in the HTML element with the ID of currentDay. It appears at the top of the planner, reflecting the current day/date.

I created variables for the current time, and created variables that represented the time values of each time block. So, var eightAM was set equal to hour 8, minute 0, second 0. And so on... I also set variables for each hour block based on its ID. 

(I did add a couple of additional time rows to my planner, mainly to provide a greater window to see the past/present/future behavior, not because I work from 8 a.m. to 7 p.m.)

To color-code each block on the planner, I put these two sets of variables into arrays, and then run a for loop that looks at the difference between the hourly times and the current time. Based on a formula (if less than -3,600,000 ms, past; if greater than 0, future, else present), the slots are shaded gray (past), green (present), or blue (future).

I set an event listener on the Save button. The info in the sibling with class "description" is saved to local storage as "task," and the parent timeblock of the save button clicked, that ID is saved to local storage as "timeBlock".

I then have a localStorage.getItem block, where the value of the description class element in each row is called. In some cases, I have not entered anything, but for the rows that do have information stored, that is displayed.

## Overview of the Site

Pretty straightforward. I have included three screenshots: one showing the planner at a larger width; one more narrow; and one with the console visible to show the local storage information. The screenshots were taken at 11:36 and 11:37 a.m. May 2, hence the gray slots for 8, 9, and 10 am; the green color for 11 am, and blue for noon onward.



## Link to Deployed Site



## Resources used

Mainly class lecture activities/notes and some W3 tutorials. I also had a good conversation with one of my course teaching assistants during office hours on Monday, May 1, which helped me see what I was doing wrong on the localStorage.getItem front. Go to office hours, kids.

