
// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#home-content').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { title: "Handlebars", description: "Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates.", imageOverlayText: "grumpy wizards make toxic brew", imageSource: "<img src='http://placehold.it/2200x500' alt='' class='image-contain--full-screen-image'>"};

// html
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);