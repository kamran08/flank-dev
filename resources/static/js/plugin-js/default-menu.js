'use strict';

    // $(window).resize(function() {
    //     var width = $(window).width();
        
    
    //     if(width > 991) {
    //         $(".toggleButtonProperty").click(function() {
    //             var $this = $(this);
    //             $this.toggleClass("toggle-collapsed");
    //             $(".sidebar-logo").toggleClass("sidebar-logo-tab");
    //         });
    //     }
    
    //     else if (width = 991) {
    //         $(".toggleButtonProperty").click(function() {
    //             var $this = $(this);
    //             $this.toggleClass("toggle-collapsed");
    //             $(".sidebar-logo").toggleClass("sidebar-logo-tab");
    //         });
    //     }
        
    // });

    $(document).ready(function () {
        // $(window).trigger('resize');

        $(".toggleButtonProperty").click(function() {
            var $this = $(this);
            $this.toggleClass("toggle-collapsed");
            $(".sidebar-logo").toggleClass("sidebar-logo-tab");
        });

        //  Function for top bar dropdown
        $("#upper-dropdown-1").click(function(e) {
            e.preventDefault();
            $("#menu-dropdown-1").toggleClass("menu-dropdown-active");
        });
    
        $("#upper-dropdown-2").click(function(e) {
            e.preventDefault();
            $("#menu-dropdown-2").toggleClass("menu-dropdown-active");
        });
    
        // Function for nav
        $(".self-collapsable").click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass("active").next(".self-collapse").slideToggle("slow").addClass("self-collapse-in");
        });
    });
    
  