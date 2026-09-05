const moment = require("moment");

function getCurrentDay() {
    console.log(moment().format("dddd"));
}

function getCurrentMonth() {
    console.log(moment().format("MMMM"));
}

function getCurrentYear() {
    console.log(moment().format("YYYY"));
}

function getCurrentDate() {
    console.log(moment().format("dddd, MMMM D, YYYY"));
}

function isWeekend() {
    const day = moment().day(); 

    if (day == 7 || day == 6) {
        console.log("Сегодня выходной");
    } else {
        console.log("Сегодня рабочий день");
    }
}


function getDaysUntilNewYear() {
    const today = moment();
    const newYear = moment([today.year() + 1, 0, 1]);
    const days = newYear.diff(today, "days");
    console.log(`Jcnfkjcm ${days} дней до нового гоlа`);
}


function getAge(birthDate) {
    const age = moment().diff(moment(birthDate), "years");
    console.log(`Тебе ${age} лет`);
}

function getDaysUntilBirthday(birthDate) {
    const today = moment();

    const birthday = moment(birthDate);
    birthday.year(today.year());

    if (birthday.isBefore(today)) {
        birthday.add(1, "year");
    }

    const days = birthday.diff(today, "days");

    console.log(`Осталось ${days} дней до твоего дня рождения`);
}


getCurrentDay();
getCurrentMonth();
getCurrentYear();
getCurrentDate();
isWeekend();
getDaysUntilNewYear();

getAge("2010-12-16");
getDaysUntilBirthday("2010-12-16");