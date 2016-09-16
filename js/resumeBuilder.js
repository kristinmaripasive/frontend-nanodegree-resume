

// var awesomeThoughts = "I am Kristin and I am AWESOME!";
//
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Kristin Pasive");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
