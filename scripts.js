$(document).ready(function(){

    $("#contacts").click(function(){
        $("#body").load("contacts.html");
    });

    $("#home").click(function(){
        $("#body").load("home.html");
    });

    $("#projects").click(function(){
        $("#body").load("my-projects.html");
    });

    $("#other").click(function(){
        $("#body").load("other.html");
    });
});

function reload() {
    $("#body").load("home.html");
}