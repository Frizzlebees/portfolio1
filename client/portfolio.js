$(document).ready(function() {
  portfolio.view.setUpEventListeners();
});

const portfolio = {
  carousel: {
    currentSlide: 0,
    slides: $('.slide'),
    indicators: $('.slideshow-dot')
  },
  handlers: {
    goToNextSlide: () => {
      let previousSlide = portfolio.carousel.currentSlide;
      portfolio.view.toggleSlideView();
      portfolio.carousel.currentSlide = (portfolio.carousel.currentSlide + 1) % portfolio.carousel.slides.length;
      portfolio.view.toggleSlideView();
      portfolio.view.updateSlideIndicator(previousSlide, portfolio.carousel.currentSlide);
    },
    goToPreviousSlide: () => {
      let previousSlide = portfolio.carousel.currentSlide;
      portfolio.view.toggleSlideView();
      if (portfolio.carousel.currentSlide != 0) {
        portfolio.carousel.currentSlide--;
      } else {
        portfolio.carousel.currentSlide = portfolio.carousel.slides.length - 1;
      }
      portfolio.view.toggleSlideView();
      portfolio.view.updateSlideIndicator(previousSlide, portfolio.carousel.currentSlide);
    },
    goToSlide: (slideIndex) => {
      let previousSlide = portfolio.carousel.currentSlide;
      portfolio.view.toggleSlideView();
      portfolio.carousel.currentSlide = slideIndex;
      portfolio.view.toggleSlideView();
      portfolio.view.updateSlideIndicator(previousSlide, portfolio.carousel.currentSlide);
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

      $('.slideshow-dot').on('click', function(e) {
        portfolio.handlers.goToSlide($(e.target).index());
      });
    },
    toggleSlideView: () => {
      $(portfolio.carousel.slides[portfolio.carousel.currentSlide]).toggleClass('hidden');
    },
    updateSlideIndicator: (previousSlide, currentSlide) => {
      $(portfolio.carousel.indicators[previousSlide]).toggleClass('active');
      $(portfolio.carousel.indicators[currentSlide]).toggleClass('active');
    }
  }
};

