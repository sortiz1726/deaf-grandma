function isAnyLowerCase(string)
{
   return string.search(/[a-z]/) !== -1;
}

console.log("HEY KID!");

const prompt = require('prompt-sync')();

let goodbyeCount = 0;

while(goodbyeCount != 2)
{
    const response = prompt();

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