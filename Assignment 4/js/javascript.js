// Importing navigation
$(function(){

    $("#navigation").load("navigation.html");

});

// importing footer
$(function(){

    $("#footer").load("footer.html");

});

// first drop funtion, for the light theme toggle
function dropFunction1()
{
    document.getElementById("myDropdown1").classList.toggle("show");
}

//second drop function for The Four Characters.

function dropFunction2()
{
    document.getElementById("myDropdown2").classList.toggle("show");
}

// This is a function I made fully on my own, which allows light theme to be used. It took quite some time.
function LightMode() 
{
    // Whenver the button is pressed, the following code is executed.

    //Body switches to light theme
    var element = document.body;
    element.classList.toggle("light-mode-body");

    //Each row switches to light theme
    var row1 = document.querySelector(".row-one");
    var row2 = document.querySelector(".row-two");
    var row3 = document.querySelector(".row-three");
    var row4 = document.querySelector(".row-four");


    row1.classList.toggle("light-mode");
    row2.classList.toggle("light-mode");
    row3.classList.toggle("light-mode");
    row4.classList.toggle("light-mode");

    //Each drop button is switched to light theme
    var header = document.querySelector(".dropbtn1");
    var header2 = document.querySelector(".dropbtn2");
    header.classList.toggle("light-mode-body");
    header2.classList.toggle("light-mode-body");

    //The footer is switched to light theme.
    var footer = document.querySelector(".name");
    footer.classList.toggle("light-mode-footer");


}