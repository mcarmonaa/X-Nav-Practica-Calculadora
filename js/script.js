$(document).ready(function() {
  'use strict';

  $('#calculator').draggable();

  $('#screen')
    .mousedown(function() {
      $('#calculator').draggable('enable');
    })
    .mouseup(function() {
      $('#calculator').draggable('disable');
    });

  $('.key').click(function() {
    $('#screen').append($(this).text());
  });

  $('#eval').click(function() {
    try {
      $('#screen').text(eval($('#screen').text()));
    } catch (exception) {
      $('#screen').text('ERROR');
    }
  });

  $('#clear').click(function() {
    $('#screen').text('');
  });

  $(document).keypress(function(event) {
    console.log(event.which + '   ' + String.fromCharCode(event.which));
    if (String.fromCharCode(event.which) === $('#eval').text() || event.which === 13) {
      $('#eval').click();
      return;
    }

    $('.key').each(function(index, element) {
      if (String.fromCharCode(event.which) === $(element).text()) {
        $('#screen').append($(this).text());
      }
    });
  });
});
