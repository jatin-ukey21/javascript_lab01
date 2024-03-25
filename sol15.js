try {
    let undefined;
    console.log(undefined.name);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("caught error:",error.message);
    }
    else{
        console.log("caught error:",error.message);
    }
}