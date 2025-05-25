//array

const array = [0,1,2,3,4,5,6,7,8,9,"vishal","jain"];

const array2 = ["Superman", "Batman", "Spiderman", "Ironman", "Hulk"];

const arrays = new Array(1,2,3,4)
console.log(array[11]); // "jain"
console.log(array.length); // 12

//array methods
array.push("vishal jain"); // Adds "vishal jain" to the end of the array
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "vishal", "jain", "vishal jain"]
array.pop(); // Removes the last element ("vishal jain") from the array
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "vishal", "jain"]
array.unshift("vishal"); // Adds "vishal" to the beginning of the array
console.log(array); // ["vishal", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "vishal", "jain"]
array.shift(); // Removes the first element ("vishal") from the array   
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "vishal", "jain"]
array.splice(2, 3); // Removes 3 elements starting from index 2
console.log(array); // [0, 1, 5, 6, 7, 8, 9, "vishal", "jain"]
const newArray = array.join()
console.log(newArray); // "0,1,5,6,7,8,9,vishal,jain"
array.reverse(); // Reverses the order of the array
console.log(array); // ["jain", "vishal", 9, 8, 7, 6, 5, 1, 0]
array.sort(); // Sorts the array in ascending order
console.log(array); // ["0", "1", "5", "6", "7", "8", "9", "jain", "vishal"]
array2.sort(); // Sorts the array of superheroes in alphabetical order
console.log(array2); // ["Batman", "Hulk", "Ironman", "Spiderman", "Superman"] 
array.slice(2, 3, "new1", "new2"); // Replaces 3 elements starting from index 2 with "new1" and "new2"
console.log(array); // ["0", "1", "new1", "new2", "6", "7", "8", "9", "jain", "vishal"]