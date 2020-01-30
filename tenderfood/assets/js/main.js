


// Show mobile menu

$(document).ready(function() {
  $('.navbar__mobile-menu-button').on('click', function() {
    $('.mobile-menu-wrap').addClass('show');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    // $('.mobile-menu-wrap .close-button').on('click', function() {
    //   $('.mobile-menu-wrap').removeClass('show');
    //   $('.screen-shadow').removeClass('show');
    //   $('body').removeClass('hidden');
    // })

    $('.screen-shadow.show, .mobile-menu-wrap .close-button').on('click', function() {
      $('.mobile-menu-wrap').removeClass('show');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
    })

  })
})


