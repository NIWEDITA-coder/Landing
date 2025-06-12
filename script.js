if (window.location.href.indexOf('/thankyou.html') !== -1) {
  gtag('event', 'conversion', {
    'send_to': 'AW-11116975813/WgxzCLyT65EYEMWt_rQp'
  });
}

$(document).ready(function ()) {
  $('a[href="#contact-section"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#contact-section').offset().top
    }, 800);
  });

  