// Return the current day and time
const today = new Date();
const currentTime = today.toLocaleTimeString();
let day = today.getDay();
function stringDay (numDay) {
	switch (numDay) {
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		default:
			return "Saturday";
	}
}

let currentDay = stringDay(day);
// console.log(stringDay(day));
// console.log(currentTime);
console.log("Today is " + currentDay + ". " + "The current time is " + currentTime + ".")
