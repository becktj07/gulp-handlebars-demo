// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#footer').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { "footer" : "<footer class='footer'><div class='footer-inner'>Handlebars</div></footer>"};

// html
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);