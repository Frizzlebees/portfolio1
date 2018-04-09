$(document).ready(function() {
  const scroll = new SmoothScroll('a[href*="#"]');
  const toggleNavView = function() {
    $('.menu').toggleClass('hidden');
    $('#nav').toggleClass('menuView');
    $('.nav-icon-bars').toggleClass('hidden');
    $('.nav-icon-close').toggleClass('hidden');
  };

  $('.nav-icon-bars').on('click', function() {
    toggleNavView();
  });

  $('.menu-close').on('click', function() {
    toggleNavView();
  });

  $('.menu-item').on('mouseenter mouseleave', function(e) {
    for (let child of e.currentTarget.children) {
      $(child).toggleClass('hidden');
    }
  })
});
