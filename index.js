// let message= "hello world!";
// console.log(`${message} is greeting to world `);

// let colors=["Red","Green","Blue"];
// console.log(colors);
// colors.push("Black");
// console.log(colors);
// colors.shift();
// colors[0]=colors[1];
// colors[1]="Green";
// console.log(colors);
// colors.unshift("Yellow");
// console.log(colors);
// for(let i=0;i<5;i++){
//     for(let j=0;j<i;j++){
//         process.stdout.write("*");
//     }
//    console.log();

// }
// for(let i=5;i>0;i--){
//     for(let j=0;j<i;j++){
//         process.stdout.write("*");
//     }
//    console.log();

// // }
// let num=1;
// for(let i=1;i<4;i++){
//     for(let j=3;j>i;j--){
//         process.stdout.write(" ");
//     }
//     for(let k=0;k<i*2-1;k++){
//         process.stdout.write("*");
//     }
//     //num*=2
//    console.log();

// }

// const plustwo = numb => console.log(numb + 2);

// plustwo(2);
// plustwo(6);

// const calculateSquare = (side) => {
//     console.log(`The side of the square is ${side} `);
//     console.log(`Area of square is ${side*side}`);
//     console.log(`Perimeter of square is ${4*side}`);

// };

// calculateSquare(8);

let person={
    name:"John",
    age:"23",
    greeting:function greet(){
        console.log(`Hello! ${this.name}. I'm ${this.age} years old.`)
    },
};

person.greeting();