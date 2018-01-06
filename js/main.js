// JavaScript Document
(function() {
	"use strict";
	console.log("SEAF fired");
	
	
var Fbutton = document.querySelector("#FshowMore");
var Jbutton = document.querySelector("#JshowMore");
var Frantext = document.querySelector("#franExpand");
var Julietext = document.querySelector("#julieExpand");
var status = "less";

function FtoggleText()
{
    if (status === "less") {
        Fbutton.innerHTML = "<p>" + "(Show Less..)" + "</p>";
		Frantext.style.display = 'block';
        status = "more";
		console.log('Fired from Fless');
    } else if (status === "more") {
        Fbutton.innerHTML = "<p>" + "(Show More..)" + "</p>";
		Frantext.style.display = 'none';
        status = "less";
		console.log('Fired from Fmore');
    }
}
	
function JtoggleText()
{
    if (status === "less") {
        Jbutton.innerHTML = "<p>" + "(Show Less..)" + "</p>";
		Julietext.style.display = 'block';
        status = "more";
		console.log('Fired from Jless');
    } else if (status === "more") {
        Jbutton.innerHTML = "<p>" + "(Show More..)" + "</p>";
		Julietext.style.display = 'none';
        status = "less";
		console.log('Fired from Jmore');
    }
}
	
	
Fbutton.addEventListener("click", FtoggleText, false);
Jbutton.addEventListener("click", JtoggleText, false);

})();