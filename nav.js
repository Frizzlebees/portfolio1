$(document).ready(function() {
  const toggleNavView = function() {
    $('#menu').toggleClass('hidden');
    $('#nav').toggleClass('menuView');
    $('#navIconBars').toggleClass('hidden');
    $('#navIconClose').toggleClass('hidden');
  };

  $('#navIconBars').on('click', function() {
    toggleNavView();
  });

  $('#navIconClose').on('click', function() {
    toggleNavView();
  });
});
