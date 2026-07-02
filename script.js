const todayDate = document.getElementById("todayDate");

const dateIn = document.getElementById("dateIn");

const monthIn = document.getElementById("monthIn");

const yearIn = document.getElementById("yearIn");

const calculateBtn = document.getElementById("calculateBtn");

const totalYears = document.getElementById("totalYears");

const totalMonths = document.getElementById("totalMonths");

const totalDays = document.getElementById("totalDays");

const totalHours  = document.getElementById("totalHours");

const birthdayLeft = document.getElementById("birthdayLeft");

const today = new Date();
todayDate.innerHTML = today.toDateString();


calculateBtn.addEventListener('click', calculate);

function calculate(){
const today = new Date();
    if(
    dateIn.value === "" ||
    monthIn.value === "" ||
    yearIn.value === ""
){
    alert("Please fill all blanks");
    return;
}

const date = Number(dateIn.value);
const month = Number(monthIn.value);
const year = Number(yearIn.value);

if(date < 1 || date>31){
    alert("Please enter a valid date.");
    return;
}
if(month < 1 || month > 12 ){
    alert("Please Enter a valid month");
    return;
}
if(year < 1900 || year > today.getFullYear()){
    alert("Please enter a year from 1900 to current.")
    return;
}

const birthDate = new Date(year, month - 1, date);
if(birthDate > today){
    alert("Birth date cannot be in the future.")
    return;
}

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if(days <0){
    months--;

    const previousMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
    ).getDate();
    days += previousMonthDays;
}

if(months <0){
    years--;
    months += 12;
}



totalYears.innerHTML = years;
totalMonths.innerHTML = months;
totalDays.innerHTML = days;

const difference = today - birthDate;

const livedHours = Math.floor(difference / (1000*60*60));

totalHours.innerHTML = livedHours;

// Next Birthday

let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
);

if(nextBirthday < today){ 
    nextBirthday.setFullYear(today.getFullYear() + 1);
}
const remainingDays = Math.ceil(
    (nextBirthday - today) / (1000*60*60*24),
);

birthdayLeft.innerHTML = remainingDays + " Days Left";
if(
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth()
){
    birthdayLeft.innerHTML = "Happy Birthday";
}
}


// I Hope You LIke It
// Thanks for Watching