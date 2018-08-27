// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

//1. assign our html element to a variable
//2. listen for a click event
//3. in the click event callback function, change the html elements text

$(function() {
  var title = $('h1');
  title.click(changeTitle);
  
  var body = $('body')
  body.click(changeTitleColor)
});

function changeTitleColor (event) {
    var color = getRandomColor();
    var title = $('h1');
    title.css('color', color);
}


function changeTitle(event) {
    var newTitle = prompt('What would you like the new title to be?')
    $(this).text(newTitle)
}



function getRandomColor(){
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}
