$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    $('.results').empty();

    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $('.results').append('<h4>You entered lengths of: ' + side1 + ', ' + side2 + ', and ' + side3 + '. This is not a triangle.</h4>');
    } else if (side1 === side2 && side2 === side3) {
      $('.results').append('<h4>You entered lengths of: ' + side1 + ', ' + side2 + ', and ' + side3 + '. All sides are equal, so this is an equilateral triangle.</h4>');
    } else if ((side1 === side2 && side3 != side1) || (side1 === side3 && side2 != side1) || (side2 === side3 && side1 != side2)) {
      $('.results').append('<h4>You entered lengths of: ' + side1 + ', ' + side2 + ', and ' + side3 + '. Only two sides are equal, so this is an isosceles triangle.</h4>');
    } else {
      $('.results').append('<h4>You entered lengths of: ' + side1 + ', ' + side2 + ', and ' + side3 + '. All sides are not equal, so this is a scalene triangle.</h4>');
    }
  });



// Jumbotron background code
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax(){
      var scrolled = $(window).scrollTop();
      $('.bg').css('height', (jumboHeight-scrolled) + 'px');
  }

  $(window).scroll(function(e){
      parallax();
  });

});
