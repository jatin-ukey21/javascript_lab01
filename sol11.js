function maxString(arr){
    var maxlen = 0
    var mindex;
for (let index = 0; index < arr.length; index++) {
    const item_len = arr[index].length;
    if (item_len > maxlen) {
        maxlen = item_len
        mindex = index
    }
}
return mindex;
}

const arr = ["Nagpur","Mumbai","Thiruvananthpuram","Goa","Bengaluru","Ahmedabad","Kolkata","Chennai","Delhi","Jaipur"]
var ans = maxString(arr)
console.log("String with longest length : " + arr[ans])