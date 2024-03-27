#! /usr/bin/env node
import inquirer from "inquirer";
let computer_guessed_number = Math.floor(Math.random() * 6 + 1);
const user_guessed_number = await inquirer.prompt([
    {
        name: "user_guessed_number",
        type: "number",
        message: "Enter a number 1-6",
    },
]);
if (user_guessed_number.user_guessed_number > 0 &&
    user_guessed_number.user_guessed_number <= 6) {
    if (user_guessed_number.user_guessed_number === computer_guessed_number) {
        console.log(`You guesses correctly`);
        console.log(`Your guessed number was ${user_guessed_number.user_guessed_number} and computer guessed number was ${computer_guessed_number}`);
    }
    else {
        console.log(`You are wrong`);
        console.log(`Your guessed number was ${user_guessed_number.user_guessed_number} and computer guessed number was ${computer_guessed_number}`);
    }
}
else {
    console.log("Please guess the number within given Range... ");
}
