// write a javascript function to extract unique characters from a string .
// let str = "abcdabcdefgggh";

// function alu(str) {
//     let unique = "";

//     for (let i = 0; i < str.length; i++) {
//         let currch = str[i];
//         if (unique.indexOf(currch) == -1) {
//             unique += currch;
//         }
//     }

//     return unique;
// }

// console.log(alu(str)); // Output: "abcdefgh"
function findLongestCountry(countryNames) {
    // Initialize variables to store the longest country name and its length
    let longestCountry = "";
    let longestLength = 0;

    // Iterate over each country name in the array
    for (let i = 0; i < countryNames.length; i++) {
        let currentCountry = countryNames[i];
        
        // Check if the current country name is longer than the previously longest one
        if (currentCountry.length > longestLength) {
            longestCountry = currentCountry;
            longestLength = currentCountry.length;
        }
    }

    // Return the longest country name
    return longestCountry;
}

// Example usage:
let countries = ["United States", "Canada", "Australia", "India", "United Kingdom"];
let longestCountry = findLongestCountry(countries);
console.log("The longest country name is:", longestCountry);

