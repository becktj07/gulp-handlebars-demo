// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#header').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { "header" : "<header class='header'><div class='header-logo'><a href='./index.html'><img src='./images/handlebars-logo.png' class='image-contain' /></a></div></header>"};

// html
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);