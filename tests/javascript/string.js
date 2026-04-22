// strings are immutable 
// let str = "hello";
// let srt2 = str.replace("h","y");
// console.log(str);
// console.log(srt2);


// charCodeAt() : return ascii / unicode value of character at specific index

// let str = "Welcome";
// console.log(str.charCodeAt(0));


// // validate the first character is uppercase

// let text = "Admin"
// let validation = text.charCodeAt(0).toBeGreaterThanOrEqual(65);
// console.log(validation);

// replace vs replace all

// let price = "$500";
// price = price.replace("$","")
// console.log(price)

// let actual = "order success!!!!!"
// actual = actual.replaceAll("!","");
// console.log(actual);


// let msg = "your OTP is 4576"
// let opt = msg.substring(16,4)
// console.log(opt)

// let msg = "Payment Successful";
// if(msg.indexOf("Successful") !== -1){
//     console.log("pass")
// }


// regex Example

// let str = "OTP1234"
// console.log(str.match(/[0-9]+/));



// let email = "shivkumarsingh@gmail.com";
// // let user = email.substring(0,email.indexOf("@"));
// let user = email.split("@")[1]

// console.log(user);

// reverse a stirng

// let str = "Hello my name is shiv";
// let rev = str.split("").reverse().join("");
// console.log(rev);

// check palindorme

// let str = "MADAM"
// let rev = str.split("").reverse().join("");
// console.log(str===rev)

//count vowels
// let str = "welcome";
// let count = 0;
// for(let ch of str)
//     {
//     if("aeiou".includes(ch))
//         count++;
    
// }
// console.log(count)

// count consonants 

// let str = "welcome"
// let count = 0;
// for(let ch of str){
//     if(/[a-z]/.test(ch) && !"aeiou".includes(ch))
//     count++;    
// }
// console.log(count);


// let str = "I love JavaScript"
// console.log(str.split(" ").length)


// find duplicate characters

// let str = "programming";
// let obj = {};

// for(let ch of str){
//     obj[ch] = (obj[ch] || 0) + 1;
// }

// console.log(obj);

// for(let key in obj){
//     if(obj[key] > 1){
//         console.log(key + " = " + obj[key]);
//     }
// }


//remove the duplicate characters form the string 
// let str = "banana";
// console.log([...new Set(str)].join(""))

let a = "listen";
let b = "silent";
let x = a.split("").sort().join("")
let y = b.split("").sort().join("")
console.log(x===y)








