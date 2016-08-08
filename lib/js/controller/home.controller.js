window.template = {};




$(document).ready(function() {

    SyntaxHighlighter.defaults['quick-code'] = false;

    $("#s-main-container").empty().load("lib/html/userinterface/home.html");

    $('body').on('click', '.main-menu li', function(e){
        // Step 1 : Identify if this <li> is direct-menu or contains sub-menus
        if ($(this).find('a:first-child').data('menu-category')) { // This is a direct-menu
            
            // Then : Remove all <li class='active'>
            $('.main-menu li').removeClass('active');
            // Then : This <li> add Class 'active'
            $(this).addClass('active');
        } else { // This contains sub-menus
            // Step 2 : Identify if this <li> is expand or collapsed
            if ($(this).hasClass('toggled')) { // This is expanded <li>, contains class 'active'
                
            }
        }   
    });

    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
            top: y+'px',
            left:x+'px'
        }).addClass("animate");
    });

    /*
     * Waves Animation
     */
    (function(){
        Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
        Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
        Waves.init();
    })();

     /* --------------------------------------------------------
        Top Search
    ----------------------------------------------------------*/
    
    /* Bring search reset icon when focused */
    $('body').on('focus', '.hs-input', function(){
        $('.h-search').addClass('focused');
    });
    
    /* Take off reset icon if input length is 0, when blurred */
    $('body').on('blur', '.hs-input', function(){
        var x = $(this).val();
        
        if (!x.length > 0) {
            $('.h-search').removeClass('focused');
        } 
    });

    $('body').on('click', '[data-ma-action]', function(e) {
        e.preventDefault();
        //swal("Hello world!");
        var action = $(this).data('ma-action'),
            $this = $(this);

        switch (action) {
            /*-------------------------------------------
                Mainmenu and Notifications open/close
            ---------------------------------------------*/
            /* Open Sidebar */
            case 'sidebar-open':
                var target = $(this).data('ma-target');
                $this.addClass('toggled');
                $('#main').append('<div data-ma-action="sidebar-close" class="sidebar-backdrop animated fadeIn" />')
                if (target == 'main-menu') {
                    $('#s-main-menu').addClass('toggled');
                }
                if (target == 'user-alerts') {
                    $('#s-user-alerts').addClass('toggled');
                }
                $('body').addClass('o-hidden');
                break;
                /* Close Sidebar */
            case 'sidebar-close':
                $('[data-ma-action="sidebar-open"]').removeClass('toggled');
                $('.sidebar').removeClass('toggled');
                $('.sidebar-backdrop').remove();
                $('body').removeClass('o-hidden');
                break;
                /*----------------------------------
                    Header Search
                -----------------------------------*/
                /* Clear Search */
            case 'search-clear':
                /* For mobile only */
                $('.h-search').removeClass('toggled');
                /* For all */
                $('.hs-input').val('');
                $('.h-search').removeClass('focused');
                break;
                /* Open search */
            case 'search-open':
                $('.h-search').addClass('toggled');
                $('.hs-input').focus();
                break;
                /*----------------------------------
                    Main menu
                 -----------------------------------*/
                /* Toggle Sub menu */
            case 'submenu-toggle':
                $this.next().slideToggle(200);
                $this.parent().toggleClass('toggled');
                break;
                /*----------------------------------
                     Messages
                -----------------------------------*/
            case 'message-toggle':
                $('.ms-menu').toggleClass('toggled');
                $this.toggleClass('toggled');
                break;
                /*-------------------------------------------------
                    Action Header Search (used in listview.html)
                 -------------------------------------------------*/
                //Open action header search
            case 'ah-search-open':
                x = $(this).closest('.action-header').find('.ah-search');
                x.fadeIn(300);
                x.find('.ahs-input').focus();
                break;
                //Close action header search
            case 'ah-search-close':
                x.fadeOut(300);
                setTimeout(function() {
                    x.find('.ahs-input').val('');
                }, 350);
                break;
        }
    });

    $('body').on('click', '[data-menu-category]', function(e){
        e.preventDefault();
        $("#s-main-container").empty().load($(this).data('menu-category'));
    });

    $(".modal-header-close-icon").click(function() {
        $(this).closest('.mercury-slide-panel').addClass('mercury-slide-panel-closed');
    });

    /*
        Time
     */
    var clock = function() {
    var time = new Date();
    var currentTime = time.toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit", second: "2-digit"}); 
        $("#time").html(currentTime);
    }
    window.setInterval(clock, 1000);







});


