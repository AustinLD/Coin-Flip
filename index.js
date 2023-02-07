// var userChoice
// var computerChoice
// var randomNumber
// var birthYear
// var userAge



  

  var userChoice = prompt("Heads or Tails?");

  console.log(userChoice)
  
  var randomNumber = Math.round(Math.random())

  console.log(randomNumber)

  if (randomNumber === 0)
    computerChoice = "Heads"
  else
    computerChoice = "Tails"

  console.log(computerChoice);

  if (computerChoice == userChoice)
    alert("You guessed right, the coinflip landed on "+userChoice+ "!")
  else
    alert("Sorry, the coinflip landed on "+computerChoice+ ".")


// Part 2 of the assignment

var birthYear = prompt("What year were you born?")

console.log(birthYear)


var currentYear = 2023

var userAge = currentYear -= birthYear

console.log(userAge)

if (userAge > 21)
  alert("You are old enough to drink in the US.")
if (userAge < 21)
  alert("Sorry, You are not old enough to drink in the US.")
if (userAge === 21)
  alert("You are old enough to drink in the US...barely.")











// prompt user for "head or tails"
// computer chooses "head or tails" based on 0-1 from math.random (math.floor / round?)
// computer will update prompt with "you guessed right, the coinflip landed on [choice]" or "Sorry, the coinflip landed on [Not your choice]" if numbers match.
// prompt user for age.
// if user was born before 2001 prompt will update with "You are old enough to drink in the US." 
// if user was born after 2001 prompt will update with "Sorry, You are not old enough to drink in the US." 
// if user was born on 2001 prompt will update with "You are old enough to drink in the US...barely."
