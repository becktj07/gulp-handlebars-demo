
//custom nav helper
Handlebars.registerHelper('customNav', function(items, options) {
    var out = "<nav class='main-nav'><ul class='main-nav__list'>";
  
    for(var i=0, l=items.length; i<l; i++) {
      out = out + "<li class='main-nav__link'>" + options.fn(items[i]) + "</li>";
    }
  
    return out + "</ul></nav>";
  });

//list helper
Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});

//return string based on conditional
Handlebars.registerHelper("mustacheStatus", function(isAlive) {
  if(isAlive) {
    return new Handlebars.SafeString(
      "<span style='color:green;'>This mustache is still with us!</span>");
  } else {
    return new Handlebars.SafeString(
      "<span style='color:red;'>This mustache has passed.</span>");
  }
})