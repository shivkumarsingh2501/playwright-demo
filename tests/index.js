

// let transactions = [
//   { amount: 1000, type: "credit" },
//   { amount: 500, type: "debit" },
//   { amount: 200, type: "credit" }
// ];

// for(let i in transactions){
//     console.log(i)
//     console.log(transactions[i])
// }

// let transaction = [100 , 200 , 300]

// for(let i in transaction) {
//     console.log(`transaction ${i}: ${transaction[i]}`);
// }


// for(let value of transaction){
//     console.log(value);
// }

// for(let [index, value] of transaction.entries()){
//     console.log(index, value);
// }

// transaction.forEach((value, index) => {
//     console.log(index, value);
// })

// let tran = [100 , 200 , 300 , 400];
// let updated = tran.map(t => t * 1.1);
// // console.log(updated)
// let email = 'userbank.com';
// if(email.indexOf('@') === -1) {
//     console.log("Invalid email")
// }


// let input = "9";
// if(input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57){
//     console.log("Number Entered")
// }




// let masked = "1234-5678-9012";
// console.log(masked.replaceAll("-", ""));


// let txn = "TXN12345";
// if(txn.match(/[0-9]/)){
//     console.log("contains numbers")

// }


// const blanceText = await page.locator('#balance').textContent();


// //  remove currency symbol
// const balance = blanceText.replace("&","").trim();


// // convert to the number

// const numerciBalance =Number(balance);
// expect(numerciBalance).toBeGreaterThan(0);


// let apiResponse = {
//   name: "Shiv",
//   balance: 5000
// };

//  Object.entries(apiResponse).forEach(([key, value]) => {
//      console.log(key, value);
// });
// const response = apiResponse.hasOwnProperty("name");
// console.log(response);8


// Removing duplicates object

// let arr = [10 , 20 , 30 , 10 , 40 , 20];
// let obj = {};
// arr.forEach(X => obj[X] = 1);
// let unique = Object.keys(obj);
// console.log(unique)


// let arr = [10 , 20 , 30 ,10 , 40 , 20];
// // let unique = [...new Set(arr)];
// // console.log(unique)
// let unique = Object.keys(arr)
// console.log(unique)

// let one = {x : 100};
// let two = {y : 200};
// // let merged = Object.assign({}, one , two );
// // console.log(merged)
// let merged = {...one, ...two}
// console.log(merged)



// let apiResponse = {

//     customerId : "CS15000",
//     account : {
//         blance : 5000,
//         currency : "USD"
//     },
//     transactions: [
//         {amount : 100 , type : "credit"},
//         {amount : 50 , type : "deb


// console.log(x); // undefined
// var x = 10;



// let obj1 = {
//     name : "god",
//     address : "heven",
//     mode : "fake baba"
// }




// let obj = Object.create({
//     name : "alex",
//     city : "Mumbai"     



// })

// console.log(obj.name);


// let obj3 = new Object();
// obj3.name = "shiv";
// console.log(obj3)



// class Customer {
//     constructor(name , balance){
//         this.name = name;
//         this.balance = balance
//     }
// }


// let obj4 = {
//     a : 1,
//     b : 2
// }
// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))



// let apiRespnose = {
//     name : "shiv",
//     blance : 5000
// }

// console.log(Object.entries(apiRespnose))



// Object.entries(apiRespnose).forEach(([key,value])  =>{
//     console.log(key, value);


// })


// let[a,b, ...rest] = [10, 20 , 30 , 40 , 50 ]
// console.log(a);
// console.log(b)
// console.log(rest);
// // last variable become array of remaining value


// function sum(...number){
//     return number.reduce((acc, val) => acc + val, 5 );
// };
// console.log(sum(1,2,3,4))

// // using object : remove duplicates vale in array
// let arr = [10, 20 , 30 , 40 , 10 , 20 , 30 ,40]

// let obj = {};

// console.log(typeof(obj))
// arr.forEach(x => obj[x] = 1)
// let unique = Object.keys(obj)
// console.log(unique);

// // using set

// let unique2 = [...new Set(arr)];
// console.log(unique2)
// // Object.assign() ( Merge of two object )

// let one = {x : 100};
// let two = {y: 200}

// let merged = Object.assign({}, one , two)
// console.log(merged)

// let merged2 = {...one,...two}
// console.log(merged2)

/*
create a object with this data 
customerId : "1234"
balance : 5000
transactions: 
  amount : 100 , type :"credit"
  amount : 50 , type : "debit"

*/

// let customerDetails  ={
//     customerId : "123",
//     balance : 5000,
//     transaction : [
//         {amount : 100 , type : "credit"},
//         {amount : 200, type : "debit"}
//     ]

// }



// let obj = {
//     "first name" : "ALEX",
//      age : 25
// }



// let  var const : used to declacre variable 
// let has block scoped , reassign , but redeclaration is not poassib;e
// let x = 10
// // x = "loan";
// // let y = 10
// // let y = 20 

// var : function scope , reassign and redeclaration is possible 


// var x = 10
// x = "loan"
// var y = 10
// var y = 20 

// const blocked scope , and reassign and redecaltration is not possible 

// duplicate keys in object

// let obj = {
//     name : "shiv",
//     city : "hyderabad",
//     name : "nikhil",
//     city : "delhi"
// }

// console.log(Object.entries(obj))
// console.log(Object.keys(obj))


// let user = [

//     {name : "shiv" , city : "Hyderabad"}, //0
//     {name : "John", city : "Chennai"} //1
// ]
// console.log(Object.keys(user))
// console.log(user[1].name)

// let user = {
//     name : "shiv",
//     age : 25,
//     city : "delhi"
// };
// let {name , ...rest} = user;
// console.log(name);
// console.log(rest);

// function createUser(id, ...data){
//     return{id, data};

// }
// createUser(1,"shiv", 25 , "India");
// console.log(createUser())



// let arr = [10 , 20 , 30];
// function print(a, b, c){
//     console.log(a, b, c);
// }
// // print(...arr);
// let arr1 = [1,2,3];
// let arr2 = [ ...arr1]
// arr2.push(3);
// console.log(arr1);
// console.log(arr2);


// // array merging
// let a = [1,2];
// let b = [3, 4];
// let merged = [...a, ...b]
// console.log(merged);


// let arr = [1,2,5];
// let newArr = [...arr.slice(0,2), 3 , 4 , ...arr.slice(2)];
// console.log(newArr);

// let obj1 = {name : "shiv"};
// let obj2 = {...obj1};
// obj2.city = "Rahul";
// console.log(obj1.name)  // shiv
// console.log(Object.entries(obj2))  //rahul

// let obj1 = { name : "shiv", city : "Delhi"};

// let obj2 = obj1 ; // this does not create a new object , it create reference to the same object
// obj2.city = "chennai";
// console.log(obj1.city);
// console.log(obj2.city);



// function updateUser(user){
//     user.name = "Updated";
//     user.city = "delhi"

// }
// let user = {name: "shiv"}

// updateUser(user);
// console.log(user.name)
// console.log(Object.entries(user).forEach(([key,value]) => {
//         console.log(key,value)
// }));



// shallow copy : it creates a new object ( new memory ) , but nested objects are still shared

// spred operator (...)
// let obj2 = {... obj1};


// Object.assign()

//let obj2 = Object.assign({}. obj1);



// let obj1 = {
//     name : "shiv" , 
//     age : 25,
//     address : {city : "delhi"}
// };
// let obj2 = { ...obj1};

// obj2.name = "rahul"
// obj2.address.city = "Mumbai";
// console.log(obj1.name);
// console.log(obj2.name);
// console.log(obj2.address.city);
// console.log(obj1.address.city);


// //deep copy : creates a completely independet copy 
// let obj1 = {
//     name : "shiv" , 
//     age : 25,
//     address : {city : "delhi"}
// };

// let obj2 = structuredClone(obj1);
// obj2.address.city = "Mumbai";
// console.log(obj1.address.city);
// console.log(obj2.address.city);


// JSON METHOD ( OLD BUT Common)

// //let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj1 = {
//     date : new Date()
// }

// let obj3 = JSON.parse(JSON.stringify(obj1))
// console.log(typeof obj3.date)



// let obj1 = {
//     name: "shiv",
//     address : {city :"delhi"}
// };
// // shallow copy 
// let obj2 = {...obj1};


// // deep copy
// let obj3 = structuredClone(obj1);


// // mdoifiny nest 

// obj2.address.city = "mumbai";
// obj3.address.city = "chennai";

// console.log(obj1.address.city);
// console.log(obj2.address.city);

// console.log(obj3.address.city);


// let obj1 = {
//     name : "Shiv",
//     date : new Date(),
//     func: () => {}
// };

// let obj2 =JSON.parse(JSON.stringify(obj1));
// console.log(typeof obj2.date)
// console.log(obj2.func);



// browser object model = it is a set o fobject provided by the browser that allow javascript to intrect with the browser itself and not jsut html

// window : the top level object in the browser ... everything in BOM lives inside window 

// json : javascript object notation : it is used for data transfer ( API communication )


// // JSON.stringify() : converts object to json string

// let user = {name : "shiv"};
// let str = JSON.stringify(user)
// console.log(str);


// //JSON.parse() : it convert JSON to string --- object 


// let str2 = {"name" : "shiv"};
// let obj =  JSON.parse(str);
// console.log(obj.name);



// let a = { x : 1  }


// //let x  = 100
// function fun1(){
//     {
//       let x = 100

//    }
// console.log(x)
// }
// fun1();
// function fun2(){
//   console.log(x)
// }
// fun2()
// console.log(x); // undefined
// var x = 10;
// console.log(y); // ❌ ReferenceError
// let y = 20;

sayHi();

function sayHi() {
  console.log("Hello");
}