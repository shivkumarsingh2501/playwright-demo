// Array
// push method : add element at the end and returns new lenght

// let arr = [10,20,30,40]
// let result = arr.push(40);
// console.log(arr)
// console.log(result);

// pop() method
//removes last element and return remove

// let arr2 = [10, 20, 30, 40];
// let removed = arr2.pop();
// console.log(arr2);
// console.log(removed);

//shift() method 
// removes first elements


// let arr = [10,20,30]
// let x = arr.shift();
// console.log(arr);
// console.log(x);


// unshift() method 
// adds elementes at the beginning 

// let arr = [20,30];
// let x = arr.unshift(10);
// console.log(arr);
// console.log(x);

// split() method 
// converts string to an anrray 


// let str ="Hello world";
// let arr = str.split("").reverse().join("");
// console.log(arr)


// join() method - convert array into a string 
// let arr = [10,20 ,30 ,40];
// let str = arr.join("/");
// console.log(str)



// slice() method

// return part of array
// original array is remained unchanged



// let arr = [10,20,30,40,50,60];
// let result = arr.slice(1,4);
// console.log(result);



// splice() method : add/remove items by index

// let arr = [10,20,30,40,50];
// arr.splice(2,1,111,222)
// console.log(arr);


// loppin arrays 
// let arr = [10,20,30,40,50];
// for(let x in arr){
//     console.log(x)
//     {for(let x of arr){
//         console.log(x)
//     }}
// }
// let arr = [10,20,30,40 ,50]
// arr.forEach(function(index, value)
// {
//     console.log(index, value)
// })


// fileter() return matched element only 

// let arr = [10,20,30,40]
// let result = arr.filter(x => x >20);
// console.log(result);

// Coding quesiton

// reverse and array

// let arr = [1,2,3,4,5];
// // let reversed = arr.reverse();
// // console.log(reversed);


// let result = [];
// for(let i = arr.length-1; i>=0; i--){
//     result.push(arr[i])
// }
// console.log(result)

//find the the mxiumum number

// let arr = [10,20,30,40,50];
// let max = Math.max(...arr);
// console.log(max);


// let  arr = [10,20,30,40 ,50]
// let max = arr.reduce((preveious ,current)=> (current > preveious ? current : preveious),arr[0])
// console.log(max);

// let  arr = [10,20,30,40 ,50]
// let max = arr.reduce((preveious ,current)=> (current > preveious ? current : preveious),arr[0])
// console.log(max);


// let arr = [10,30,40,50,60,70];
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(arr[i] >max){
//         max = arr[i];
//     }
// }
// console.log(max)

// second largest number 


// let arr = [10,20,30,40,50]
// let largest = -Infinity;
// let secondLargest = -Infinity 
// for(let num of arr){
//     if(num > largest){
//         secondLargest = largest ;
//         largest = num;

//     }else if ( num > secondLargest && num !== largest){
//         secondLargest = num;
//     }
// }
// console.log(secondLargest)


// let result = [...new  Set(arr)].sort((a,b) => b-a)[1]
// console.log(result);

// find the even number 
// let arrr =  [1,2,3,4,5,6,7];
// let evenNumbers = [];
// for(let i =0 ; i<arrr.length; i++){
//     if(arrr[i] % 2 === 0){
//         evenNumbers.push(arrr[i])
//     }
// }
// console.log(evenNumbers);

// remove duplicate elements
// let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,]
// // let unique = [...new Set(arr)].sort((a,b)=>b-a);
// // console.log(unique);
// // console.log(unique[1]);
// // count the occurence of each element
// let count= {}
// arr.forEach(x =>{
//     count[x] = (count[x] || 0) + 1;

// });
// console.log(count);

// rotate array right by 1
// let arr = [1,2,3,4,5]
// let last = arr.pop();
// arr.unshift(last);
// console.log(arr

// )


// flaten the nested array

// let arr = [1,[2,3],[4,[5]]]
// console.log(arr.flat(1))

// let arr = [1,2,3,5];
// let n = 5;
// let expected = n*(n+1)/2;
// let acutual = arr.reduce((a,b)=>a+b,0);
// console.log(expected-acutual);



// find the largest stiring

// let arr = ["cat", "elephant", "dog"]
// let longest = arr.reduce((a,b)=>
// a.length > b.length ? a:b);
// console.log(longest)



// find two sum problem


// let arr = [2,3,4,5,6,7,8,9]
// let target = 9;
// for(let i =0 ; i<arr.length; i++){
//     for(let j =i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]===target){
//             console.log(i,j)
//         }
//     }
// }

// find the first non-repeated elements
// let arr = [1,2,3,4,5,6,6]
// let result = arr.find(x =>
//     arr.indexOf(x) === arr.lastIndexOf(x)
    
// );
// console.log(result);