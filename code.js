
let input = 0

// while (input !== 21) {
//     let message = `You chose ${input} last time. Please choose
//     a number that is not 21.`
//     input = prompt(message)
//     console.log("you chose: " + input)
//     if (input !== null){
//         input = parseInt(input)
//         // console.log("inside first if statement")
//     } else {
//         input = 21
//         // break
//     }
    
// }



function add( num1, num2) {
    return num1 + num2
}

console.log(add(2,3))

//multiply 5 * 3
// 5 + 5 + 5
function multiply(num1, num2){
    let result = 0
    for (let index = 0; index < num2; index += 1){
        result = add(result, num1)
    }
    return result
}

console.log(multiply(5, 3))


// function addThreeNumbers(numOne, numTwo, numThree){
//     let result = numOne + numTwo + numThree
//     return result
// }

// let sum1 = addThreeNumbers(2, 7, 15)
// let sum2 = addThreeNumbers(3, 7, 21)
// let sum3 = addThreeNumbers(4, 26, 104)
// let sum4 = addThreeNumbers(-1, 5, 21)

// function displayListItem(message1 , num, message2){
//     document.write(message1 + num + message2)
// }

// document.write("<ul>")
// displayListItem("<li>the sum is: ",sum1, "</li>")
// displayListItem("<li>the sum is: ", sum2, "</li>")
// displayListItem("<li>the sum is: ", sum3, "</li>")
// document.write("</ul>")