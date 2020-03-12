(function($){
'use strict';

    $(window).resize(function() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            
            $(".new-top-navbar-left").hide();
            $(".mobile-button").on("click", function(e){
                e.preventDefault();
                $(".new-top-navbar-left").slideToggle();
            });
        }
    });

    $(document).ready(function() {
        $(window).trigger('resize'); 

        $(".right-search-icon").on("click", function() {
            $(this).toggleClass("active").siblings(".right-search-input").toggleClass("active");
        });

        // dropdown menu

        $(".right-user-dropdown").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
        $(".right-user a").click(function(e) {
            e.preventDefault();
            var thisItem = $(this);

            if(thisItem.parent().hasClass("sel")) {
                thisItem.parent().find(".right-user-dropdown").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
                thisItem.parent(".right-user.sel").removeClass("sel");
            }

            else {
                thisItem.parent().find(".right-user-dropdown").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out", "pointer-events": "none"});
                thisItem.parent(".right-user.sel").removeClass("sel");

                if(thisItem.next(".right-user-dropdown").length) {
                    thisItem.parent().addClass("sel");
                    thisItem.next(".right-user-dropdown").css({"transform": "scale(1)", "opacity": "1", "pointer-events": "all"});
                }
            }
        });

        $(document).mouseup(function(e){
            var body = $(".right-user-dropdown");
            
            if(!body.is(e.body) && body.has(e.target).length === 0){
                body.css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
            }
        });

        $(document).mouseup(function(e){
            var selbody = $(".right-user.sel");
            
            if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
                selbody.removeClass("sel");
            }
        });
    });

    
})(jQuery);