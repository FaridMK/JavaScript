function printValue(value) {
    console.log(value);
}


function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
        action(i);
    }
}

repeat(3, printValue);





// const numbers = [1, -5, 12, 22, -33];
// const moreNumbers = [3, 49, 20, -4];
// // console.log(numbers);
// // console.log(...numbers);

// // console.log(Math.min(...numbers));
// const copyOfNumbers = [...numbers];
// const newNumbers = [...numbers, ...moreNumbers];
// console.log(copyOfNumbers);
// console.log(newNumbers);