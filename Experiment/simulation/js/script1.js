$('ul li').click(function() {
    $('.current').removeClass('current');
    $(this).addClass('current');
  });