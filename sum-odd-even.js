/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

//Display sum of all the odd numbers from 81 to 131.

let n = 81;
let total = 0;
while( n <= 131){
    if( n % 2 === 1){
        console.log("The odd number is :", n)
        total = total + n;
        console.log("Total number is : ",total);
    }
    // console.log(n);
    n++;

}
console.log("=====================")
//Display sum of all the even numbers from 206 to 311.

let num = 206;
let sum = 0;
while( num <= 311){
    if( num % 2 === 0){
        console.log("The even number is :", n)
        total = total + num;
        console.log("Total number is : ",total);
    }
    // console.log(n);
    num++;

}

