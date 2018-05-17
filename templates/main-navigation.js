// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#main-navigation').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { nav: [
                    {url:"#", linkText: "Link 1"},
                    {url:"#", linkText: "Link 2"},
                    {url:"#", linkText: "Link 3"},
                    {url:"#", linkText: "Link 4"}
                ]
            };
// html
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);