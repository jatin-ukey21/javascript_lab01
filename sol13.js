const arr = [10,20,30,10,40,20,40,80,10]

const newarr = arr.reduce(uniques,[]);


function uniques(prev,Current) {
    if(!prev.includes(Current)){
        prev.push(Current);
    }
    return prev;
}

console.log(newarr)