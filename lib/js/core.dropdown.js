(function(){
	$.fn.mercurydp = function(o){
		var triggerOpen     = $('.mercury-dropdown');
        var triggerClose    = $('.mercury-dropdown-ul').find('li');
        var marka           = $('.mercury-icon');

        // set initial Marka icon
        var m = new Marka('.mercury-icon');
        m.set('triangle').size(10);
        m.rotate('down');

        // trigger dropdown
        triggerOpen.add(marka).on('click', function(e) {
            e.preventDefault();
            $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');


            if($('.mercury-icon').hasClass("marka-icon-times")) {
                m.set('triangle').size(10);
            } else {
                m.set('times').size(15);
            }
        });

        triggerClose.on('click', function() {
            // set new placeholder for demo
            var options = $(this).find('a').html();
            triggerOpen.text(options);

            $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');
            m.set('triangle').size(10);
        });
	};
})(jQuery)



            var triggerOpen     = $('.mercury-dropdown');
            var triggerClose    = $('.mercury-dropdown-ul').find('li');
            var marka           = $('.mercury-icon');

            // set initial Marka icon
            var m = new Marka('.mercury-icon');
            m.set('triangle').size(10);
            m.rotate('down');

            // trigger dropdown
            triggerOpen.add(marka).on('click', function(e) {
                e.preventDefault();
                $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');


                if($('.mercury-icon').hasClass("marka-icon-times")) {
                    m.set('triangle').size(10);
                } else {
                    m.set('times').size(15);
                }
            });

            triggerClose.on('click', function() {
                // set new placeholder for demo
                var options = $(this).find('a').html();
                triggerOpen.text(options);

                $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');
                m.set('triangle').size(10);
            });