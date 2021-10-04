function isAnyLowerCase(string)
{
   return string.search(/[a-z]/) !== -1;
}

async function deafGrandma()
{
    console.log("HEY KID!");

    //let prompt = require('prompt-sync')();
    const prompt = require('prompt');

    let goodbyeCount = 0;

    while(goodbyeCount != 2)
    {
        //const response = prompt();
        const {response} = await prompt.get(response);
    
        if(response === "")
        {
            console.log("WHAT!");
        }
        else if(isAnyLowerCase(response))
        {
            console.log("SPEAK UP, KID!");
        }
        else if(response === "GOODBYE!")
        {
            goodbyeCount++;
            
            if(goodbyeCount === 1)
            {
                console.log("LEAVING SO SOON?");
            }
            else if(goodbyeCount === 2)
            {
                console.log("LATER, SKATER!");
            }
        }
        else
        {
            console.log("NO, NOT SINCE 1946!");
        }
    } 
}

//deafGrandma();

const prompt = require("prompt-async");
 
async function example_async() // Available only with `prompt-async`!
{
    // Start the prompt.
    prompt.start();
 
    // Get two properties from the user: the `username` and `email`.
    const {username, email} = await prompt.get(["username", "email"]);
    // Get two properties from the user: the `password` and `food`.
    const {password, food} = await prompt.get(["password", "food"]);
 
    // Log the results.
    console.log("Command-line input received: ");
    console.log(`  username: ${username},`);
    console.log(`  password: ${password},`);
    console.log(`  email: ${email},`);
    console.log(`  food: ${food}.`);
}