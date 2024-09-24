// Chapter 21 to 25 String Method:

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//Prompt the user from first name
var firstName = prompt("Q1a) Enter your First Name:")

//Prompt the user for their last Name
var lastName = prompt("Q1b) Enter your Last Name:")

//merge the first Name and last name into a fullname
var FullName = firstName + " " + lastName

//Greet the user using their fullname
alert("Hello, " + FullName + "!")


//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// Prompt the user for their favorite mobile phone model
var favoritePhone = prompt("Q2) Please enter your favorite phone");

// Find the length of the user input
var inputlength = favoritePhone.length;

// Display the length of the user input in the browser
document.write("<blockquote><h4><br>Q2) Your Favorite Phone is:", " " + favoritePhone)
document.write("<br>The Length of string: " + " " + inputlength + "")


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

//JavaScript code to find the index of letter "n" in the word "Pakistani"
var word = "Pakistani";
var letter = "n";
var index = word.indexOf(letter);

document.write("<br><br>Q3) String:" + " " + word)
document.write("<br>The index of 'n':", index);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// JavaScript code to find the last index of letter "l" in the phrase "Hello World"
var phrase = "Hello World";
var letter = "l";
var lastIndex = phrase.lastIndexOf(letter);

document.write("<br><br>Q4) String:" + " " + phrase)
document.write("<br>The last index of 'l':", lastIndex);


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// JavaScript code to find the character at the 3rd index in the word "Pakistani"
var word = "Pakistani";
var index = 3;
var character = word.charAt(index);

document.write("<br><br>Q5) String:" + " " + word)
document.write("<br>Character at index 3:", lastIndex);

// 6. Repeat Q1 using string concat() method.

// Take user inputs for first and last name

var firstName = prompt("Q6a) Please enter your first name:");
var lastName = prompt("Q6b) Please enter your last name:");

// Merge the first and last name using the concat() method
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// Original word
var originalWord = "Hyderabad";

// Replace "Hyder" with "Islam"
var newWord = originalWord.replace("Hyder", "Islam");

// Display the result in the browser
document.write("<br><br>Q7) City: " + originalWord + "<br>");
document.write("After replacement: " + newWord);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

// Original message
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var newMessage = message.replace(/and/g, "&");

// Display the result in the browser
document.write("<br><br>Q8) Original message: " + message + "<br>");
document.write("Modified message: " + newMessage );

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// Original string
var str = "472";

// Convert string to number
var num = Number(str);

// Display the values and their types in the browser
document.write("<br><br>Q9) Original value: " + str + " <br>(type: " + typeof str + ")<br>");
document.write("Converted value: " + num + " <br>(type: " + typeof num + ")");

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// Function to convert input to uppercase and display it
function convertToUpperCase() {
// Get the user input
var input = prompt("Q10) Enter text here:");
    
if (input !== null) {
// Convert the input to uppercase
var upperCaseInput = input.toUpperCase();
        
// Display the converted text
document.write("<br><br>Q10) User input: " + input)
document.write("<br>Converted Uppercase Text: " + upperCaseInput);
    }
}
// Call the function to execute the conversion process
convertToUpperCase();

// 11. Write a program that takes user input. Convert and show the input in title case.

// Take user input
var input = prompt("Q11) Enter text here:");

if (input !== null) {
    // Split the input into an array of words
    var words = input.split(" ");
    
    // Initialize an array to hold the title-cased words
    var titleCasedWords = [];
    
    // Loop through each word
    for (var i = 0; i < words.length; i++) {
        // Get the current word
        var word = words[i];
        
        // Convert the first character to uppercase and the rest to lowercase
        var titleCasedWord = '';
        for (var j = 0; j < word.length; j++) {
            if (j === 0) {
                titleCasedWord += word[j].toUpperCase();
            } else {
                titleCasedWord += word[j].toLowerCase();
            }
        }
        
        // Add the title-cased word to the array
        titleCasedWords.push(titleCasedWord);
    }
    
    // Join the title-cased words into a single string
    var titleCasedInput = titleCasedWords.join(" ");
    
    // Display the title-cased text
    document.write("<br><br>Q11) Input Text:" + input)
    document.write("<br>Converted Title Text: " + titleCasedInput);
}


// 12. Write a program that converts the variable num to string.
//var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// Initialize the variable
var num = 35.36;

// Convert the number to a string
var numString = num.toString();

// Remove the dot from the string
var result = numString.replace(".", "");

// Display the result in the browser
document.write("<br><br>Q12) Number: " + num)
document.write("<br>Result: " + result + "</h4></blockquote>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

// Function to check for special characters
function containsSpecialSymbols(username) {
    // Define the ASCII codes of the special characters
    var specialSymbols = [33, 44, 46, 64];
    
    // Check each character in the username
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        if (specialSymbols.includes(charCode)) {
            return true;
        }
    }
    return false;
}

// Prompt the user to enter a username
var username = prompt("Q13a) Enter your username:");

while (containsSpecialSymbols(username)) {
    alert("Username contains invalid characters. Please enter a valid username.");
    username = prompt("Q13b) Please enter your valid username:");
}

// Display the valid username
alert("Your username is: " + username);


// Function to check for special characters
function containsSpecialSymbols(username) {
    // Define the ASCII codes of the special characters
    var specialSymbols = [33, 44, 46, 64];
    
    // Check each character in the username
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        if (specialSymbols.includes(charCode)) {
            return true;
        }
    }
    return false;
}

// Prompt the user to enter a username
var username = prompt("Enter your username:");

while (containsSpecialSymbols(username)) {
    alert("Username contains invalid characters. Please enter a valid username.");
    username = prompt("Enter your username:");
}

// Display the valid username
alert("Your username is: " + username);


// 14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an 
//array. After searching, prompt the user whether the given item is found in the list or not.
//Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program 
//should inform about its availability. Example

// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search
function searchItem(item) {
    // Convert user input to lowercase
    var searchItem = item.toLowerCase();

    // Check if the item is in the array (case-insensitive)
    var found = A.some(arrItem => arrItem.toLowerCase() === searchItem);

    // Inform the user whether the item is found or not
    if (found) {
        alert("Ans14) " + item + " is available in our Bakery.");
      } else {
    alert("Ans14) We are sorry. " + item + " is not available in our Bakery.");
}   
} 

// Example usage:
// Get user input (you can replace 'cookie' with any other test value)
var userInput = prompt("Q14) Welcome to ABC Bakery.\nWhat do you want to order Sir/ma'am?");
searchItem(userInput);

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

function isValidPassword(password) {
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        return false;
    }

    // Check if the password starts with a number
    if (!isNaN(password[0])) {
        return false;
    }

    // Check if the password contains at least one alphabet and one number
    var hasAlphabet = /[a-zA-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);

    if (!hasAlphabet || !hasNumber) {
        return false;
    }

    return true;
}

function promptPassword() {
    var password = prompt("Q15) Enter your password:");

    while (!isValidPassword(password)) {
        alert("Invalid password. Please enter a valid password that meets the requirements:\n- Contains alphabets and numbers\n- Does not start with a number\n- At least 6 characters long");
        password = prompt("Q15) Enter your password:");
    }

    alert("Ans15) Password is valid!");
}
// Example usage
promptPassword();

// 16. Write a program to convert the following string to an array using string split method.
//var university = “University of Karachi”; Display the elements of array in your browser.

// String to be converted
var university = "University of Karachi";

// Convert the string to an array using split method
var universityArray = university.split(" ");

// Display the elements of the array in the browser
document.write("<ul>");
for (var i = 0; i < universityArray.length; i++) {
    document.write("<li>" + universityArray[i] + "</li>");
}
document.write("</ul>");

// 17. Write a program to display the last character of a user input.

// Function to get the last character of the input
function getLastCharacter(input) {
    if (input.length === 0) {
        return "Input is empty.";
    }
    return input[input.length - 1];
}

// Prompt user for input
var userInput = prompt("Q17) Enter a string:");

// Get the last character
var lastCharacter = getLastCharacter(userInput);

// Display the last character
alert("Ans17) User input " + userInput)
alert("Ans17) The last character of your input is: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// Given string
var str = "Ans17) Text: The quick brown fox jumps over the lazy dog";

// Function to count occurrences of the word "the"
function countOccurrences(word, str) {
    // Convert the string to lowercase to perform a case-insensitive search
    var lowerStr = str.toLowerCase();
    
    // Split the string into an array of words
    var wordsArray = lowerStr.split(" ");
    
    // Count the occurrences of the word "the"
    var count = 0;
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Count occurrences of "the" in the string
var wordToCount = "the";
var count = countOccurrences(wordToCount, str);

// Display the result
console.log(str);
console.log(`The word "${wordToCount}" occurs ${count} times in the given string.`);




