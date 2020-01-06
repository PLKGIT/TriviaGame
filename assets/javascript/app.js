/*
    JavaScript and jQuery Code for Totally Trivial Trivia Game
*/

$(document).ready(function () {

    // Set Global Variables

    // Game timer variables
    var timer = 20;
    var intervalId;

    // Counter for correct answers
    var countRight = 0;

    // Counter for incorrect answers
    var countWrong = 0;

    // Counter for unanswered questions
    var countUnanswered = 0;

    // Variables for user's input
    var userQ1;
    var userQ2;
    var userQ3;
    var userQ4;
    var userQ5;

    // Answer Key Array
    var arrayCorrect = [["userQ1", 2], ["userQ2", 4], ["userQ3", 3], ["userQ4", 2], ["userQ5", 1]];

    //Show START button
    $("#start").show();
    //Make sure form, done button, and all done message are hidden
    $("#questions").hide();
    $("#done").hide();
    $("#message").hide();

    // Listen for START, DONE, EXIT button clicks

    // EXIT button clicked

    $("#exitgame").click(function () {

    alert("Goodbye!");
    window.location.href = 'https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html';
    })


    // DONE button clicked
    $("#done").on("click", function () {

        //Call stop() function
        stop();
    })

    // START button clicked
    $("#start").on("click", function () {

        // Hide the START button
        $("#start").hide();

        //Show trivia questions form
        $("#questions").show();

        //Show DONE button 
        $("#done").show();

        //Call run () function
        run();

        //  run() function
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        // decrement() function
        function decrement() {

            // Decrement timer by 1 second
            timer--;

            // Update the "show-number" span tag with the current timer value
            $("#show-number").text(timer);

            // Stop the game if the timer reaches 0 before the DONE button is clicked
            if (timer === 0) {

                //  Call stop() function
                stop();

                //  Alert user that time has run out
                alert("Time's Up!");
            }
        }

    })


    function stop() {
        //  Clear intervalId variable by passing it to the clearInterval () function
        clearInterval(intervalId);

        // Check if question is unanswered and increment the countUnanswered variable if true
        // Score User's input for each answered question and imcrement the appropriate counter (countRight or countWrong)

        // Question 1

        // Check to see if the question was answered
        if ($("input[name='inlineQ1']:checked").length > 0) {
            // If answered, set the value of the user's input to the userQ1 variable
            userQ1 = $("input[name='inlineQ1']:checked").val();
            // Loop through the multidimentional answer key array
            for (var i = 0; i < arrayCorrect.length; i++) {
                // Search the array for the matching question
                if (arrayCorrect[i][0] === 'userQ1') {
                    // Compare user's answer to the correct answer
                    if (arrayCorrect[i][1] == userQ1) {
                        // If the user's input matches the correct answer, increment the countRight variable and break out of the loop
                        countRight++;
                        break;
                    } else {
                        // If the user's input does not match the correct answer, increment the countWrong variable and break out of the loop
                        countWrong++;
                        break;
                    }
                }
            }

        } else {
            // Increment the unanswered question counter
            countUnanswered++;
        }

        // Question 2 (see detailed comments from Question 1)

        if ($("input[name='inlineQ2']:checked").length > 0) {
            userQ2 = $("input[name='inlineQ2']:checked").val();
            for (var i = 0; i < arrayCorrect.length; i++) {
                if (arrayCorrect[i][0] === 'userQ2') {
                    if (arrayCorrect[i][1] == userQ2) {
                        countRight++;
                        break;
                    } else {
                        countWrong++;
                        break;
                    }
                }
            }

        } else {
            countUnanswered++;
        }

        // Question 3 (see detailed comments from Question 1)

        if ($("input[name='inlineQ3']:checked").length > 0) {
            userQ3 = $("input[name='inlineQ3']:checked").val();
            for (var i = 0; i < arrayCorrect.length; i++) {
                if (arrayCorrect[i][0] === 'userQ3') {
                    if (arrayCorrect[i][1] == userQ3) {
                        countRight++;
                        break;
                    } else {
                        countWrong++;
                        break;
                    }
                }
            }
        } else {
            countUnanswered++;
        }

        // Question 4 (see detailed comments from Question 1)

        if ($("input[name='inlineQ4']:checked").length > 0) {
            userQ4 = $("input[name='inlineQ4']:checked").val();
            for (var i = 0; i < arrayCorrect.length; i++) {
                if (arrayCorrect[i][0] === 'userQ4') {
                    if (arrayCorrect[i][1] == userQ4) {
                        countRight++;
                        break;
                    } else {
                        countWrong++;
                        break;
                    }
                }
            }
        } else {
            countUnanswered++;
        }

        // Question 5 (see detailed comments from Question 1)

        if ($("input[name='inlineQ5']:checked").length > 0) {
            userQ5 = $("input[name='inlineQ5']:checked").val();
            for (var i = 0; i < arrayCorrect.length; i++) {
                if (arrayCorrect[i][0] === 'userQ5') {
                    if (arrayCorrect[i][1] == userQ5) {
                        countRight++;
                        break;
                    } else {
                        countWrong++;
                        break;
                    }
                }
            }
        } else {
            countUnanswered++;
        }

        // Hide trivia questions form
        $("#questions").hide();

        // Hide DONE button
        $("#done").hide();

        // Call gameOver() function
        gameOver();
    }

    function gameOver() {
        // Show "All Done!" message
        $("#message").show();

        // Display user score statistics
        $("#right").text(countRight);
        $("#wrong").text(countWrong);
        $("#unanswered").text(countUnanswered);
    }
})