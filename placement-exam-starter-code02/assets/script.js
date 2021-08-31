// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Ryan Wilson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totalcookies = cc + gb + sugar


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1
    document.getElementById("qty-gb").textContent = gb
    console.log('Ginger bread + button was clicked!')
})

    // TODO: Write the code to be run when the "-" button for "Ginger Bread" is clicked
document.getElementById('minus-gb').addEventListener('click', function() {
    gb -= 1
    document.getElementById("qty-gb").textContent = gb
        console.log('Ginger bread - button was clicked!')
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1
    document.getElementById("qty-cc").textContent = cc
    console.log('Chocolate Chip + button was clicked!')
})

    // TODO: Write the code to be run when the "-" button for "Chocolate Chip" is clicked
document.getElementById('minus-cc').addEventListener('click', function() {
    cc -= 1
    document.getElementById("qty-cc").textContent = cc
        console.log('Chocolate Chip - button was clicked!')
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1
    document.getElementById("qty-sugar").textContent = sugar
    console.log('Sugar Sprinkle + button was clicked!')

})

    // TODO: Write the code to be run when the "-" button for "Sugar Sprinkle" is clicked
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar -= 1
    document.getElementById("qty-sugar").textContent = sugar


        console.log('Sugar Sprinkle - button was clicked!')
})



// if (total < 0) {
//     total = 0
// }

document.getElementById("qty-total").textContent = gb + cc + sugar




//document.getElementById('qty-gb') = gb
//document.getElementById('qty-cc').textContent = cc
//document.getElementById('qty-sugar').textContent = sugar
//document.getElementById('qty-total').textContent = total
