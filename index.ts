#! /usr/bin/env node

// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull welcome message
console.log(chalk.bold.bgCyanBright("\n \t\t Welcome to MinzaIshaq - Word Counter\n"))
console.log("=" .repeat(40));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=" .repeat(40));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=" .repeat(40));