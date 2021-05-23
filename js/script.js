// Task 1 //

// function calculation(num, degree = 1) {
//     if (isNaN(num && degree)) {
//         alert('You enter wrong number or degre!!!')
//     } else if (num && degree != NaN) {
//         let result = Math.pow(num, degree);
//         alert(`Result ${num} in degree ${degree} = ${result}`);
//     }
// };
// let num = +prompt('enter your number');
// let degree = +prompt('enter your degree');

// calculation(num, degree);


//  Task 2 //

//Example 1

// function padString(str, strLength, strChar, strBoolean = true) {
//     let resChar = '';
//     let result = '';
//     let resLength = strLength - str.length;
//     if (str === undefined || strLength === undefined || strChar === undefined) {
//         return 'ERROR WRONG INPUT'
//     } else if (strLength <= str.length) {
//         return str.substr(0, strLength)
//     } else if (str.length < strLength) {
//         for (let i = 1; i <= resLength; i++) {
//             resChar += strChar
//         }
//     }
//     if (strBoolean) {
//         result = str + resChar;
//     } else {
//         result = resChar + str;
//     }
//     return result
// };
// console.log(padString("hello", 8, '*', false));
// console.log(padString("hello", 6, '*', false));
// console.log(padString("hello", 2, ''));

// Example 2

function padString(str, num, symbol, right = true) {

    if (typeof str !== 'string') { return 'str type must be a string' };
    if (typeof num !== 'number') { return 'num type must be a number' }

    if (str.length === num) { return str; }

    if (str.length > num) { return str.substr(from = 0, num) }
    if (str.length > num) { return 'symbol must be only one char' }

    const symbolsQty = num - str.length;
    let localSymbols = '';
    for (let i = 0; i < symbolsQty; i++) {
        localSymbols += symbol;
    }
    let result = null;

    if (right) { result = str + localSymbols }
    if (!right) { result = localSymbols + str }

    return result;
}
console.log(padString("hello", 8, '*', false));
console.log(padString("hello", 6, '*', false));
console.log(padString("hello", 2, ));