const scroll = new SmoothScroll('a[href*="#"]');

const toggleNavView = function() {
  $('.menu').toggleClass('hidden');
  $('#nav').toggleClass('menuView');
  $('.nav-icon-bars').toggleClass('hidden');
  $('.nav-icon-close').toggleClass('hidden');
};

$('.menu-item').on('mouseenter mouseleave', function(e) {
  for (let child of e.currentTarget.children) {
    $(child).toggleClass('hidden');
  }
})

$(document).click(function(event) { 
  if($('#nav').hasClass('menuView') && !$(event.target).closest('.menuView').length) {
    toggleNavView();
  }        
});
