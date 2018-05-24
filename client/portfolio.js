$(document).ready(function() {
  portfolio.view.setUpEventListeners();
});

const portfolio = {
  carousel: {
    currentSlide: 0,
    slides: null,
    indicators: null
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
    },
    setCurrentCarousel: (project) => {
      portfolio.carousel.currentSlide = 0;
      portfolio.carousel.slides = $($($($(project).closest('.portfolio-project')[0]).next()[0])[0]).find('.slide');
      portfolio.carousel.indicators = $($($($(project).closest('.portfolio-project')[0]).next()[0])[0]).find('.slideshow-dot')
    }
  },
  view: {
    setUpEventListeners: () => {
      $('.portfolio-project').on('click', function(e) {
        $($(e.target.closest('.portfolio-project')).next()[0]).modal('show');
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

// function Carousel(slides, indicators) {
//   this.currentSlide = 0;
//   this.slides = slides;
//   this.indicators = indicators;
//   this.goToNextSlide = () => {
//     let previousSlide = this.currentSlide;
//     this.toggleSlideView();
//     this.currentSlide = (this.currentSlide + 1) % this.slides.length;
//     this.toggleSlideView();
//     this.updateSlideIndicator(previousSlide, portfolio.carousel.currentSlide);
//   };
//   this.goToPreviousSlide = () => {
//     let previousSlide = this.currentSlide;
//     this.toggleSlideView();
//     if (this.currentSlide != 0) {
//       this.currentSlide--;
//     } else {
//       this.currentSlide = portfolio.carousel.slides.length - 1;
//     }
//     this.toggleSlideView();
//     this.updateSlideIndicator(previousSlide, this.currentSlide);
//   };
//   this.goToSlide = (slideIndex) => {
//     let previousSlide = this.currentSlide;
//     this.toggleSlideView();
//     this.currentSlide = slideIndex;
//     this.toggleSlideView();
//     this.updateSlideIndicator(previousSlide, this.currentSlide);
//   };
//   this.toggleSlideView = () => {
//     $(this.slides[this.currentSlide]).toggleClass('hidden');
//   };
//   this.updateSlideIndicator = (previousSlide, currentSlide) => {
//     $(this.indicators[previousSlide]).toggleClass('active');
//     $(this.indicators[currentSlide]).toggleClass('active');
//   };
// };

