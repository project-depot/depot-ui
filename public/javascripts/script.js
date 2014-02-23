$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  $('.sign-up').click(function(){
    $('.intro').removeClass('move-down').addClass('move-up');
    $('.buttons').animate({ opacity: 0 }, function(){
      $('.form-register').fadeIn(700, function(){

      });
    })
  })

  $('.sign-in').click(function(){
    $('.intro').removeClass('move-down').addClass('move-up');
    $('.buttons').animate({ opacity: 0 }, function(){
      $('.form-login').fadeIn(400, function(){

      });
    })
  })

  $('.cancel-register').click(function(e){

    $('.form-register').fadeOut(400, function(){
      $('.intro').removeClass('move-up').addClass('move-down');
      $('.buttons').animate({ opacity: 1 }, function(){

      });
      $('form').each (function(){
        this.reset();
      });
    })
    e.preventDefault();

  })

  $('.cancel-login').click(function(e){

    $('.form-login').fadeOut(400, function(){
      $('.intro').removeClass('move-up').addClass('move-down');
      $('.buttons').animate({ opacity: 1 }, function(){

      });
      $('form').each (function(){
        this.reset();
      });
    })


    e.preventDefault();

  })

  var options = {
        url: '/register',
        type: 'post',
        success:   function(){
          window.location.replace('/home')
        },
        error: function(){
          $('#register input').addClass('error-input');
        }
    };

  $('#register').ajaxForm(options);

  var options = {
        url: '/login',
        type: 'post',
        success:   function(){
          window.location.replace('/home')
        },
        error: function(){
          $('#login input').addClass('error-input');
        }
    };


  $('#login').ajaxForm(options);

});
