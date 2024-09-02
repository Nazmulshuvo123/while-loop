/** 
Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
//Find all the odd numbers from 61 to 100.

let n = 61;
while( n <= 100){
    // console.log(n);
    if( n % 2 !== 0){
        console.log("The odd number is : ", n);
    }
    n++;
}

console.log("==============")
//Find all the even numbers from 78 to 98.

let num = 78;

while( num <= 98){
    if( num % 2 !==1){
        console.log("The even number is : ", num);

    }
    num++;
}