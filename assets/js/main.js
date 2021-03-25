(function ($) {
    "use strict";
     /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');
        
    /*--
        Scroll Up
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<img src="../assets/img/arrow-long.svg"> Back to top <span>Hide</span>',
    });
    jQuery(document).ready(function(){
        jQuery('#scrollUp span').on('click', function(event) {   
            jQuery('#scrollUp').off("click").attr('href', "javascript: void(0);").remove();     
        });
    });

    
    $('.collapse').collapse({
        toggle: false
      })
    
    $("#small_search").select2( {
        placeholder: "Browse topics",
        allowClear: true
    } );

    

    /*--
        Search for large device
    -----------------------------------*/
    /*var boxes = [];

    sxQuery(document).ready(function() {

        var settings = {
            // REQUIRED
            suggestUrl: 'https://http://localhost:2368&limit=10&maxQuerySuggestions=50&query=', // the URL that provides the data for the suggest -> this is just an example
            // suggestUrl: 'http://yourserver.com/suggests?query=', // the URL that provides the data for the suggest
            ivfImagePath: 'http://yourserver.com/images/ivf/', // the base path for instant visual feedback images

            // OPTIONAL
            instantVisualFeedback: 'all', // where the instant visual feedback should be shown, 'top', 'bottom', 'all', or 'none', default: 'all'
            throttleTime: 100, // the number of milliseconds before the suggest is triggered after finished input, default: 300ms
            extraHtml: undefined, // extra HTML code that is shown in each search suggest
            highlight: true, // whether matched words should be highlighted, default: true
            queryVisualizationHeadline: '', // A headline for the image visualization, default: empty
            animationSpeed: 200, // speed of the animations, default: 300ms
            callbacks: {
                enter: function(text,link){console.log('enter callback: '+text);}, // callback on what should happen when enter is pressed, default: undefined, meaning the link will be followed
                enterResult: function(text,link){console.log('enter callback result: ' + text);}, // callback on what should happen when enter is pressed on a result or a suggest is clicked
            },
            placeholder: 'Search for something',
            minChars: 3, // minimum number of characters before the suggests shows, default: 3
            suggestOrder: [], // the order of the suggests
            suggestSelectionOrder: [], // the order of how they should be selected
            noSuggests: '<b>We haven\'t found anything for you, <u>sooorrryyy</u></b>',
            emptyQuerySuggests: {
                            "suggests":{
                                "Circular economy":[
                                    {"id":"1","name":"Textile innovations will transform the fashion industry<span>Podcast</span>","link":"#"},
                                    {"id":"2","name":"What’s up with hydrogen?<span>Article</span>","link":"#"},
                                    {"id":"3","name":"Food of the Future: Could microbial proteins be on the menu?<span>Podcast</span>","link":"#"}
                                ]
                            }
                        },
            //maxWidth: 400 // the maximum width of the suggest box, default: as wide as the input box
        };

        // apply the settings to an input that should get the unibox
        // apply to multiple boxes
        boxes = sxQuery(".s").unibox(settings);
    });*/


    // =====================
  // Search
  // =====================

  /*var search_field = $('.js-search-input'),
  search_results = $('.js-search-results'),
  toggle_search = $('.js-search-toggle'),
  search_result_template = "\
  <a href={{link}} class='c-search-result'>\
    <div class='c-search-result__content'>\
      <h3 class='c-search-result__title'>{{title}}</h3>\
      <p class='c-search-result__excerpt'>{{excerpt}}</p>\
      <time class='c-search-result__date'>{{pubDate}}</time>\
    </div>\
    <div class='c-search-result__media'>\
      <div class='c-search-result__image is-inview' style='background-image: url({{featureImage}})'></div>\
    </div>\
  </a>";

    toggle_search.click(function(e) {
    e.preventDefault();
    $('.js-search').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.js-off-canvas-container').removeClass('is-active');

    setTimeout(function() {
    search_field.focus();
    }, 500);
    });

    $('.c-search, .js-search-close, .js-search-close .icon').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'js-search-close' || event.target.className == 'icon' || event.keyCode == 27) {
    $('.c-search').removeClass('is-active');
    }
    });

    search_field.ghostHunter({
    results: search_results,
    onKeyUp         : true,
    result_template : search_result_template,
    zeroResultsInfo : false,
    displaySearchInfo: false,
    before: function() {
    search_results.fadeIn();
    }
    });*/

    $("#closeButton").click(function () {
        $(".uniboxActive").css("display", "none");
    });
    
    $(".normal-suggest-box.uniboxActive").click(function () {
        $(".uniboxActive").css("display", "none");
    });
    
    
   
    /*--
        Smooth Scroll
    -----------------------------------*/
    var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');
    if (document.querySelector('[data-easing]')) {
        var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});
    }


    /*--
        Off Canvas Function
    -----------------------------------*/
    (function () {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
        $offCanvasToggle.on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('offcanvas-open');
            $($target).addClass('offcanvas-open');
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass('mobile-menu-toggle')) {
                $this.addClass('close');
            }
        });
        $('.offcanvas-close, .offcanvas-overlay').on('click', function (e) {
            e.preventDefault();
            $body.removeClass('offcanvas-open');
            $offCanvas.removeClass('offcanvas-open');
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find('a').removeClass('close');
        });
    })();

    /*--
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu, .overlay-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .menu-expand', function (e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();


    /*========================
    * Author in post card
    =========================*/
    var counter = $('.mrz-authors .mrz-authors-counter'),
        authorItem = $('.mrz-authors .more-list a');
    //console.log(authorItem.length);
    counter.html(" +" + authorItem.length);


    
})(jQuery);