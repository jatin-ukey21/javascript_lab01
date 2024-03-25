function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    if (num2==0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
function modl(num1,num2){
    return num1 % num2;
}
function pow(num1,num2){
    return num1 ** num2;
}

module.exports = {add,sub,mul,div,modl,pow};
