$(document).ready(function() {
  $('.project-one, .project-two, .project-three, .project-four, .project-five, .project-six').on('click', function() {
    $('.project-one-modal').modal('show');
  });

  $('.portfolio-project').dimmer({
    on: 'hover'
  });
});
