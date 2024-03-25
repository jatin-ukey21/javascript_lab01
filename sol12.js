function intersection(arr1,arr2) {
    let new_arr = arr1.filter((Element) => arr2.includes(Element));
    return new_arr;
}



const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7,8]

const ans = intersection(arr1,arr2)
console.log(ans)