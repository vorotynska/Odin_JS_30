let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )