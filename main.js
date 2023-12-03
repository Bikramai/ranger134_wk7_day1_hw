//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

//=============solution================
// 1. Here needs to parameters, a input string and dog name (inputString, dogNames)
// 2. Here we need to loop
// 3. I guess here we need to increment.
// 4. we need to set a variable equla to 0 (foundMatchesDog = 0)
// 5. last, return and call the Function at the end



let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

const searchDogName = (inputString, dogNames) => {
    let foundMatchesDog = 0;

    for (let i = 0; i < dogNames.length; i++ ){
        if (inputString.includes(dogNames[i])) {
            console.log("Matched dog_name: " + dogNames[i]);
            foundMatchesDog = 1;
        }
    }
    if (foundMatchesDog !== 0) {
        console.log("not Matches");
    } else {
        console.log("Thats a damn cat");
    }
}

searchDogName(inputString, dogNames);




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

// here we need function
// Here we need to loop
 

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function replaceEvenIndexWithSignatureMoves(arr) {
    const signatureMoves = {
        "Goku": "Bikram",
        "Vegeta": "Grace",
        "Trunks": "Miguel",
        "Krillin": "Jaun",
        "Gohan": "Andres",
        "Piccolo": "Kym"
        // we can add signature moves as we needed
    };

    for (let i = 0; i < arr.length; i += 2){
        const char = arr[i];
        const signatureMoves = signatureMoves[char] || "even index"
        arr.splice(i, 1, signatureMoves);
    }

    return arr;
}


let updatedArr = replaceEvenIndexWithSignatureMoves(arr);

console.log(updatedArr);


// Codewars JavaScript 1 MakeUpperCase
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript/6563f496a037958f6f65b7f5

function makeUpperCase(inputString) {
    return inputString.toUpperCase();
    
  };




// Codewar JavaScript 2
// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript/6563cb8fa037958f6f65b5c8

const yearDays = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} has 366 days`;  
    }else{ 
      return `${year} has 365 days`;
    }
    
  };