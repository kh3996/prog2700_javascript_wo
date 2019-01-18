"use strict";

/*
    Author : Woojin Oh
    Date : Jan. 14, 2019
    Description : Assignment 1 - Question 2
*/

// Input and Variables
var promptArray = [1, 2, 3, 6, 9, 34, 2, 6];
// var promptArray = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
// var promptArray = [100, 101, 102, 3, 4, 5, 6, 9];
// var promptArray = [1, 3, 5, 7, 9];

var startingIndexArray = [];
var endingIndexArray = [];

var diffIndexArray = [];
var sumNumberArray = [];

var resultArray = [];

// Processing
// Find starting and ending index of consecutive increasing numbers group
for (var i = 0; i < promptArray.length; i++) {
    if (promptArray[i+1] === promptArray[i] + 1) {
        // Find starting index
        startingIndexArray.push(i);
    
        // Find ending index
        while (promptArray[i] + 1 === promptArray[i+1])
        {
            i++;
        }
        endingIndexArray.push(i);
    }
}

// End the program if there are no consecutive numbers in the array.
if (startingIndexArray.length === 0) {
    console.log("There are no consecutive numbers in the array.");
}

// Continue the program if there are no consecutive numbers in the array.
else {
    // Get the difference between starting index with ending index
    for (var i = 0; i < startingIndexArray.length; i++) {
        diffIndexArray.push(endingIndexArray[i]-startingIndexArray[i]);
    }

    // Get the sum of consecutive numbers
    for (var i = 0; i < startingIndexArray.length; i++) {
        var sum = 0;
        for (var j = startingIndexArray[i]; j < endingIndexArray[i] + 1; j++) {
            sum += promptArray[j];
        }
        sumNumberArray.push(sum);
    }

    // Make new array has total sum of consecutive numbers and the number of consecutive numbers
    for (var i = 0; i < sumNumberArray.length; i++) {
        resultArray.push([sumNumberArray[i],diffIndexArray[i]]);
    }

    // Sort array from highest the number of consecutive numbers to lowest, then from highest sum to lowest sum
    resultArray.sort(function(a, b) {
        if(a[1] === b[1]) {
            return a[0] < b[0];
        }

        return a[1] < b[1];
    });

    console.log("The sum of the longest streak of consecutive increasing numbers is: " + resultArray[0][0]);
    
}