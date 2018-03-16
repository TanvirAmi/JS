var arr = [10, 20, 30, 40, 50];

// Reserve 10 elements not the index/property.
var arr1 = Array(10); 

console.log(arr1.length);
// undefined cause we have just reserved not any value yet
console.log(arr1[1]); 

console.log(arr[2]); // 30

arr[2] = 100; // Assign new value in index 2.

// Assign a value(2500) in index 25.
//index starts from 0, so length will be n+1 => 25+1 = 26
arr[25] = 2500;

console.log(arr[2]); // new value assigned.


console.log(arr+ " | "+arr1);
console.log(arr.length+ " | "+arr1['length']);