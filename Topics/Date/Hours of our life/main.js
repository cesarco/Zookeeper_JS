let birthday = new Date("2000-03-24");

let firstDayInSchool = new Date("2008-09-01");

let diff = (firstDayInSchool.getTime() - birthday.getTime());

console.log(diff / (3600 * 1000));