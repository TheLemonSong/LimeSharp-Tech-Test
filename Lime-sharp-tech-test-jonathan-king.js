//////////////////////////////////////////////////////////////////////////////////////
// Lime Sharp Tech Test //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
// Task 1:
// Make this work (repeat 3 times the contents of an array).
// E.g. Triple the the number of values in an array (values are the array's
// original contents).
function repeat (inputArray) {

    let outputArray = [];

    for(i = 0; i <= 2; i++) {
        for (let j = 0; j < inputArray.length; j++ ) {
            outputArray.push(inputArray[j]);
        }
    }
    return outputArray;
}

repeat([1,2,3]);


//////////////////////////////////////////////////////////////////////////////////////
// Task 2:
// Create a function using the template below to:
//  a) Change all upper-case characters to lower-case (except the first character
//     of the string, which should be made upper-case).
//  b) Remove all vowel characters from string (a,e,i,o,u).
//    characters from the string.
// e.g. reformat("liMeSHArp DeveLoper TEST") ===> 'Lmshrp dvlpr tst'.

function reformat(originalString) {
    return (originalString.charAt(0).toUpperCase() + originalString.toLowerCase().slice(1)).replace(/[aeiou]/ig,'');
}

reformat("liMeSHArp DeveLoper TEST");


//////////////////////////////////////////////////////////////////////////////////////
// Task 3 (optional, for bonus points):
// Without using any built-in functions and using only a 'for' loop, return the next
// binary number as a string or an array.
// Possible test cases:
//      [1,0] => [1,1]
//      [1,1] => [1,0,0]
//      [1,1,0] => [1,1,1]
//      .......
//      [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]

function next_binary_number (binaryArray) {
    let incrementedBinaryArray = binaryArray;

    for (let i = binaryArray.length - 1; i >= 0; i--) {
        
        if (!binaryArray[i]) {
            incrementedBinaryArray[i] = 1;
            break;
        }
        else {
            incrementedBinaryArray[i] = 0;
            if (i === 0) {
                incrementedBinaryArray.unshift(1);
            }
        }
    }
    return incrementedBinaryArray;
}

next_binary_number([1,0,0,0,0,0,0,0,0,1]);
