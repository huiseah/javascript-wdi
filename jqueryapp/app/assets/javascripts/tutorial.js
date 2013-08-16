$(document).ready(function () {
  $('h2').css('color', 'red');
  $('h2:last').text('I love jQuery');

  $('div:odd').addClass('success');
  $('div:even').addClass('alert');

  var cool_popup = function () {
    var name = $('#name').val();
    if (! name) {
      name = 'Contest winner';
    }
    alert(name + ', you have won 1 billion dollars');
  }

  $('#btn').click(cool_popup);

  var backgroundColor = function () {
    var color = $('#color').val();
    $('body').css('background-color', color);
  }

  $('#btncolor').click(backgroundColor);

  $('#hide').click(function () {
    $('h2').hide();
  });

  $('#show').click(function () {
    $('h2').show();
  });

  $('#toggle').click(function () {
    $('h2').toggle(500);
  });

  var compute_area = function () {
    var width = parseInt($('#width').val());
    var height = parseInt($('#height').val());
    var a = area(width, height);
    $('#area').text(a + ' square feet');
    $('#area').removeClass('alert success');
    if (a < 100) {
      $('#area').addClass('success');
    } else {
      $('#area').addClass('alert');
    }
  }

  var area = function (width, height) {
    return width * height;
  }
  $('#calc').click(compute_area);

});