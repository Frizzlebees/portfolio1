$(document).ready(function() {
  portfolio.view.setUpEventListeners();
});

const portfolio = {
  carousel: {
    currentSlide: 0,
    slides: $('.slide')
  },
  handlers: {
    goToNextSlide: () => {
      portfolio.view.toggleSlideView();
      portfolio.carousel.currentSlide = (portfolio.carousel.currentSlide + 1) % portfolio.carousel.slides.length;
      portfolio.view.toggleSlideView();
    },
    goToPreviousSlide: () => {
      portfolio.view.toggleSlideView();
      if (portfolio.carousel.currentSlide != 0) {
        portfolio.carousel.currentSlide--;
      }
      portfolio.view.toggleSlideView();
    }
  },
  view: {
    setUpEventListeners: () => {
      $('.project-one, .project-two, .project-three, .project-four, .project-five, .project-six').on('click', function() {
        $('.project-one-modal').modal('show');
      });

      $('.portfolio-project').dimmer({
        on: 'hover'
      });

      $('.angle.icon').on('mouseenter mouseleave', function(e) {
        $(e.target).toggleClass('grey inverted');
      });
    },
    toggleSlideView: () => {
      $(portfolio.carousel.slides[portfolio.carousel.currentSlide]).toggleClass('hidden');
    }
  }
};

