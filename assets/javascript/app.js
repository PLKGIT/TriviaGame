/*
    JavaScript and jQuery Code for Totally Trivial Trivia Game
*/

$(document).ready(function () {
    // Global Variables
    //Variable for total number of questions
    var qCount = 5;
    //Variables for timer
    var timer = 30;
    var intervalId;
    //Counter for correct answers
    var countRight;
    //Counter for incorrect answers
    var countWrong;
    //Storage for User's Answer
    var userQ1 = 0;
    var userQ2 = 0;
    var userQ3 = 0;
    var userQ4 = 0;
    var userQ5 = 0;
    //Array of answers
    var arrayCorrect = [[1, 3], [2, 2], [3, 2], [4, 1], [5, 4]]

    // On Page Load
    //Show game title
    //Show START button
    $("#start").show();
    //Form and Done button hidden
    $("#questions").hide();
    $("#done").hide();
    $("#message").hide();

    // Listen for Start and Done button clicks
    //Start button Clickedt
    $("#start").on("click", function () {
        $("#start").hide();
        //Show questions form
        $("#questions").show();
        //Show DONE button 
        $("#done").show();
        //Call run function to start the timer
        run();
        //  Run function
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        // Decrement function
        function decrement() {
            // Decrement by 1 second
            timer--;

            //  Show the updated number in the show-number span tag
            $("#show-number").text(timer);

            //  Call stop function once the timer reaches 0
            if (timer === 0) {

                //  Call stop function
                stop();

                //  Alert time's up
                alert("Time's Up!");
            }
        }

    })
    //Done button Clicked
    $("#done").on("click", function () {
        //Call Stop function
        stop();
    })

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        //Hide questions form
        $("#questions").hide();
        //Hide DONE button
        $("#done").hide();
        //Call Score function
        score();
    }

    function score() {
        //Display Game over message
        $("#message").show();
        //Check Answers Against Array
        // countRight = # Correct
        // countWrong = # Wrong
        // Unanswered = qCount - countRight - countWrong
        //Display answer statistics
        //Correct Answers: #
        //Incorrect Answers: #
        //Unanswered Questions: #
    }
})