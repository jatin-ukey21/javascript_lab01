//task 1
console.log("Task 1");
var byear = 2003;

var currentDate = new Date();
var currentYaer = currentDate.getFullYear();

console.log(currentYaer);
console.log("Current age : ",currentYaer - byear);

console.log("Task 2");
let a = 10;
let b = 20;

console.log("a + b",a+b);
console.log("a - b",a-b);
console.log("a * b",a*b);
console.log("a / b",a/b);

console.log("Task 3");
var str = "nagpur";
str += " city";
console.log("Concatenated string :",str);


console.log("Task 4");
var num = 12;
if (num%2==0) {
    console.log("Even number")
}
else{
    console.log("Odd number");
}
console.log("Task 5");
function isPalindrome(str){
    var rstr = str.split('').reverse().join('');

    return rstr == str ? "Palindrome" : "Not palindrome";
}

var str = "star";
console.log("is ",str,"palindrome ? :",isPalindrome(str));


console.log("FUNCTIONS");
function areaOfRec(l,b){
    console.log("Area of rectangle",l*b);
}

areaOfRec(10,2);

function areaOfRec(l,b){
    console.log("Area of rectangle",l*b);
}
function circumference(radius){
    const pi=3.14;
    console.log("Circumference of a circle",2*pi*radius);
}
circumference(7);

var ct = 45.44;
var ft = 2;

function converter(ct,ft){
    var r1 = 33.8*ct;
    var r2 = ft/33.8;

    console.log("Celsius to Fahrenheit ",r1);
    console.log("Fahrenheit to Celsius ",r2);
}
converter(ct,ft);