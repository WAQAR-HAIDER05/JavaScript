let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());

// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getUTCMonth());
// console.log(myDate.getUTCDate());

let myCreatedDate = new Date('2023-10-01');
// console.log(myCreatedDate.toString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

 `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",dayPeriod,
})