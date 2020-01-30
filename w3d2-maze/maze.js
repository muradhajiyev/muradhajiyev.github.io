$(document).ready(function(){
    "use strict";

    let isGameStarted = false;

    $(".boundary").mouseover(function(e){
        if (isGameStarted)
            $("div.boundary").addClass("youlose");
    });

    $("body").mouseover(function(e){
        // e.stopPropagation();
        if (e.target.id === "maze" || e.target.id === "start" || e.target.id === "end")
            return false;

        if (isGameStarted){
            isGameStarted = false;
            $("div.boundary").addClass("youlose");
            alert("You lost! Try again by clicking the 'S'");
        }

    })

    $("#start").click(function(){
        console.log("Game Started");
        if ($("div.boundary").hasClass("youlose")) {
            $("div.boundary").removeClass("youlose");
        }
        isGameStarted = true;

    });

    $("#end").mouseover(function(){
        if (isGameStarted){
            alert("You won =)");
            isGameStarted = false;
        }
    });


});