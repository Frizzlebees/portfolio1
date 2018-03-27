$(document).ready(function() {
  $('.one, .two, .three, .four, .five, .six').on('click', function() {
    $('.projectOneModal').modal('show');
  });

  $('.one, .two, .three, .four, .five, .six').dimmer({
    on: 'hover'
  });
});
