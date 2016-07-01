jQuery(function($){
   // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 1 :
           (window.innerWidth < 800) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      slideshow: true,                //Включание автопроигрывания слайдшоу (true/false)
	  slideshowSpeed: 4000, 
	  pauseOnAction: true,
	  pauseOnHover: true,
      itemWidth: 210,
      animationLoop: true,
      itemMargin: 30,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  // $window.resize(function() {
  //   var gridSize = getGridSize();
 
  //   flexslider.vars.minItems = gridSize;
  //   flexslider.vars.maxItems = gridSize;
  // });
	$window.on('resize orientationchange', function() {
        var gridSize = getGridSize();

        $(".flexslider").data("flexslider").vars.minItems = gridSize;
        $(".flexslider").data("flexslider").vars.maxItems = gridSize;

    });
  // menu
  var body = $("body");
	var menuBurger = $(".menu-burger");
	menuBurger.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('mobile-menu-open').removeClass('city-open');
	});
	var mobileMenu = $(".mobile-menu");
	mobileMenu.on('click', function(event) {
		event.preventDefault();
		body.removeClass("mobile-menu-open");
	});
	var mobileMenuItem = $(".mobile-menu-item");
	mobileMenuItem.on('click', function(event) {
		event.stopPropagation();
	});

	// city
	var city = $(".city");
	city.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('city-open').removeClass('mobile-menu-open');
	});

	var bottomMenuRight = $(".bottom-menu-right");
	bottomMenuRight.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('bottom-menu-burger-open');
	});

	// news-left
	var newsleft = $(".news-left");
	newsleft.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('news-left-open');
	});

	// media-left
	var medialeft = $(".media-left");
	medialeft.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('media-left-open');
	});

	// map-left
	var mobileMapTextItem = $(".mobile-map-text-item");
	mobileMapTextItem.on('click', function(event) {
		event.preventDefault();
		body.toggleClass('mobile-map-text-list-open');
	});

	// filters-media
	var mediaRightFilters = $(".media-right-filters");
	mediaRightFilters.on('click', function(event) {
		event.preventDefault();
		var mediaRight = $(".media-right");
		mediaRight.toggleClass('media-right-filters-open');
	});

	// var mediaRrightItems = $(".media-right-items").find("label");
	//   var mediaContainer = $(".media-container");
	//   mediaRrightItems.on('click', function(event) {
	//     $(this).addClass('active').siblings().removeClass('active');
	//     var index = mediaRrightItems.index($(this));
	//     mediaContainer.eq(index).addClass('active').siblings().removeClass('active');    
	//   });

	// filters-news
	// var newsRightFilters = $(".news-right-filters");
	// newsRightFilters.on('click', function(event) {
	// 	event.preventDefault();
	// 	var newsRight = $(".news-right");
	// 	newsRight.toggleClass('news-right-filters-open');
	// });

	// var newsRrightItems = $(".news-right-items").find("a");
	//   var newsContainer = $(".news-container");
	//   newsRrightItems.on('click', function(event) {
	//     event.preventDefault();
	//     $(this).addClass('active').siblings().removeClass('active');
	//     var index = newsRrightItems.index($(this));
	//     newsContainer.eq(index).addClass('active').siblings().removeClass('active');    
	//   });
});
// $(window).load(function() {
// 			$('.flexslider').flexslider({
// 			 animation: "slide",
// 			 controlsContainer: ".flexslider-container"
// 			});
// 		});