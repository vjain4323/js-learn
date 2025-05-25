//dates

let date = new Date();

console.log(date.toLocaleString('default',{
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "November"
    day: 'numeric', // "1"
    hour: '2-digit', // "05"
    minute: '2-digit', // "30"
    second: '2-digit' // "00"
})); 

console.log(date); // Current date and time
console.log(date.toString()); // String representation of the date
console.log(date.toDateString()); // Date in a human-readable format    
console.log(date.toTimeString()); // Time in a human-readable format
console.log(date.toLocaleDateString()); // Date in local format
console.log(date.toLocaleTimeString()); // Time in local format
console.log(date.toLocaleString()); // Date and time in local format
console.log(typeof date); // "object"

let specificDate = new Date(2023,10,1,5,30); // ISO 8601 format month is 0-indexed (0 = January, 1 = February, ..., 10 = November)
console.log(specificDate.toLocaleString()); // Local date and time string
console.log(specificDate.toISOString()); // ISO 8601 format string
console.log(specificDate.getTime()); // Timestamp in milliseconds since January 1, 1970
console.log(specificDate.getSeconds()); // Seconds of the specific date
console.log(specificDate.getMinutes()); // Minutes of the specific date

let myTimestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp); // Current timestamp

let anotherDate = new Date(); 
console.log(anotherDate.toLocaleString('default',{
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "November"
    day: 'numeric', // "1"
    hour: '2-digit', // "05"
    minute: '2-digit', // "30"
    second: '2-digit' // "00"
})); 
