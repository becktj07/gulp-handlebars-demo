// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#people').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = {
    people: [
      {firstName: "Hulk", lastName: "Hogan", mustacheType: "white handlebars", isAlive: true, imgSource:"<img src='./images/hulk.jpg'/>", detailImgSource:"<img src='./images/hulk-detail.jpg'/>", bio:"Terry Gene Bollea (/bəˈleɪə/, born August 11, 1953), better known by his ring name Hulk Hogan, is an American retired professional wrestler, actor, television personality, entrepreneur and musician."},
      {firstName: "Freddie", lastName: "Mercury", mustacheType: "full and dark", isAlive: false, imgSource:"<img src='./images/freddie.jpg'/>", detailImgSource:"<img src='./images/freddie-detail.jpg'/>", bio:"Frederick Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer, songwriter and record producer, best known as the lead vocalist of the rock band Queen."},
      {firstName: "Salvador", lastName: "Dali", mustacheType: "pointy", isAlive: false, imgSource:"<img src='./images/dali.jpg'/>", detailImgSource:"<img src='./images/dali-detail.jpg'/>", bio:"Dalí was a skilled draftsman, best known for the striking and bizarre images in his surrealist work. His painterly skills are often attributed to the influence of Renaissance masters. His best-known work, The Persistence of Memory, was completed in August 1931."}
    ]
  }

// html
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);