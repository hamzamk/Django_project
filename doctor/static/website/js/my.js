$("#link").click(function() {
    $('html, body').animate({
      scrollTop: $("#appointmentform").offset().top
    }, 1000);
  });