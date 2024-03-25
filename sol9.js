const cities = ["Nagpur","Bhopal","Delhi","Udaipur","Pune"]

let ucity = window.prompt("Enter city name :")
let flag = 0
for (let index = 0; index < cities.length; index++) {
    if (ucity == cities[index]) {
        alert(ucity + " found with index : " + index);
        flag = 1;
        break;
    }
}
if(flag == 0) alert("Not found!");