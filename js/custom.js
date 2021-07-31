/**
 * Main JS file for BlogBox behaviours
 */
(function ($) {
    "use strict";

    var $searchField = $('#search-field'),
        $searchResults = $('#search-results'),
        $searchCount = $('.search-count');

    $(document).ready(function(){
        var $body = $(document.body),
            $menuToggle = $('#menu-toggle'),
            $navMenu = $('#nav-menu');

        // Responsive video embeds
        $('.entry-content').fitVids();

        // Scroll to top
        $('.top-link').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({'scrollTop': 0});
        });

        // Site search navigation
        $('.search-toggle').on('click', function(e){
            if ( $body.hasClass('search--opened') ) {
                $body.removeClass('search--opened');
                setTimeout(function() {
					$searchField.val('');
					$searchResults.html('');
					$searchCount.text('0');
				}, 300);
            } else {
                $body.addClass('search--opened');
                setTimeout(function() {
                    $('#search-field').focus();
                }, 300);
            }
            e.preventDefault();
        });

        // Enable menu toggle
        $menuToggle.click(function(){
            if ( $menuToggle.hasClass( 'toggled--on' ) ) {
                $menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
                $navMenu.slideUp();
            } else {
                $menuToggle.addClass('toggled--on').attr('aria-expanded', 'true');
                $navMenu.slideDown();
            }
        });

        // Adjust full-width images
        adjustImages();

        $(window).bind('resize orientationchange', function() {
            adjustImages();
            if ( $menuToggle.is(':hidden') ) {
                $menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
                $navMenu.removeAttr('style');
            }
        });
    });

    function adjustImages() {
        var $entry = $('.entry-box'),
            $entryContent = $entry.find('.entry-content'),
            entryWidth = $entry.outerWidth(),
            entryContentWidth = $entryContent.width();
        $entryContent.find('.full-width').each(function() {
            var _this = $(this);
            _this.css({ 'margin-left': entryContentWidth / 2 - entryWidth / 2, 'max-width': 'none', 'width': entryWidth });
            _this.find('img').css({ 'width': entryWidth });
        });
    }

}(jQuery));