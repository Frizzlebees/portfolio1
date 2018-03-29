$(document).ready(function() {
  const toggleNavView = function() {
    $('.menu').toggleClass('hidden');
    $('#nav').toggleClass('menuView');
    $('.nav-icon-bars').toggleClass('hidden');
    $('.nav-icon-close').toggleClass('hidden');
  };

  $('.nav-icon-bars').on('click', function() {
    toggleNavView();
  });

  $('.nav-icon-close').on('click', function() {
    toggleNavView();
  });

  // const isElementInViewport = function(el) {
  //   if (typeof jQuery === "function" && el instanceof jQuery) {
  //       el = el[0];
  //   }

  //   var rect = el.getBoundingClientRect();

  //   return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= $(window).height() && 
  //       rect.right <= $(window).width()
  //   );
  // };

  // function onVisibilityChange(el, callback) {
  //     var old_visible;
  //     return function () {
  //         var visible = isElementInViewport(el);
  //         if (visible != old_visible) {
  //             old_visible = visible;
  //             if (typeof callback == 'function') {
  //                 callback(old_visible);
  //             }
  //         }
  //     }
  // }

  // let el = $('#about');

  // var handler = onVisibilityChange(el, function(old_visible) {
  //   console.log(old_visible);
  // });

  // $(window).on('DOMContentLoaded load resize scroll', handler); 
});
