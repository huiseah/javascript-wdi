$(document).ready(function () {

  var create_paint_boxes = function (boxes) {
    for (var i = 0; i < boxes; i++) {
      var $paint = $('<div/>').addClass('paint');
      $('#canvas').append($paint);
    }
  };
  create_paint_boxes(5000);

  var paint_box = function (event) {
    if (! event.ctrlKey) return;
    var $box = $(this);
    var color = $('#current').css('background-color');
    $box.css('background-color', color);
  };
  $('.paint').mouseover(paint_box);

  var clear_all = function () {
    $('#colors, #images').empty();
    $('#current').css('background-color', 'white');
  }
  $('#clear').click(clear_all);


  var add_color = function () {
    var color = $('#color').val();

    var $box = $('<div/>');
    $box.addClass('box');
    $box.css('background-color', color);
    $box.text(color);

    $('#colors').prepend($box);
    $('#color').val('').focus();
  };
  $('#add_color').click(add_color);


  var set_color = function () {
    var $box = $(this);
    var color = $box.css('background-color');

    $('#current').css('background-color', color);
  };
  $('#colors').on('click', '.box', set_color);

  var add_image = function () {
    var img = $('#image').val();
    var $img = $('<img>').attr('src', img);

    $('#images').prepend($img);
    $('#image').val('').focus();
  };
  $('#add_image').click(add_image);

  var set_image = function () {
    var $img = $(this);
    var img = $img.attr('src');

    $('#current_image img').attr('src', img);
    $('#canvas').css('background-image', 'url(' + img + ')');
  };
  $('#images').on('click', 'img', set_image);
});