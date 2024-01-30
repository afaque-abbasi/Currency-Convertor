/*
Name: Afaque Ahmed Abbasi
Roll No: PIAIC227902
City: Karachi
Batch: 51
*/
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistani rupees", "USA Dollar", "Saudia Riyal"],
            message: "Select your input currency"
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the Amount You want to convert"
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Pakistani rupees", "USA Dollar", "Saudia Riyal"],
            message: "Select Your desired output Currency"
        }
    ]);
    const input = userInput.currencyInput;
    const output = userInput.currencyOutput;
    const amount = userInput.amountInput;
    if (input === "Pakistani rupees") {
        if (output === "USA Dollar") {
            console.log(`The ${amount} Pakistani Rupees is equal to ${amount / 281} US Dollars`);
        }
        else if (output === "Saudia Riyal") {
            console.log(`The ${amount} Pakistani Rupees is equal to ${amount / 75} Saudi Riyal`);
        }
    }
    else if (input === "USA Dollar") {
        if (output === "Pakistani rupees") {
            console.log(`The ${amount} US Dollars is equal to ${amount * 281} Pakistani Rupees`);
        }
        else if (output === "Saudia Riyal") {
            console.log(`The ${amount} US Dollars is equal to ${amount * 3.75} Saudi Riyal`);
        }
    }
    else if (input === "Saudia Riyal") {
        if (output === "Pakistani rupees") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount * 75} Pakistani Rupees`);
        }
        else if (output === "USA Dollar") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount / 3.75} US Dollar`);
        }
    }
    const calCulateAgain = await inquirer.prompt({
        type: "confirm",
        name: "calculateMore",
        message: "Do you want more conversion?",
        default: false
    });
    if (!calCulateAgain.calculateMore) {
        loop = false;
    }
}
