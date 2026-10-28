let clubName = "N.U.i. Creative Photo Walk Club";

console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

sayHi();

let meetingDay = "Sunday";

console.log("Our next photo walk is on " + meetingDay);

function sayBye() {
  console.log("Thanks for visiting! See you at the next photo walk!");
}

sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next photo walk date will be announced soon!";
}

nextButton.addEventListener("click", showNextMeeting);
