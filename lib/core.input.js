/*
 * Text Feild
 */

//Add blue animated border and remove with condition when focus and blur

$('body').on('focus', '.fg-line .form-control', function() {
    $(this).closest('.fg-line').addClass('fg-toggled');
})

$('body').on('blur', '.form-control', function() {
    var p = $(this).closest('.form-group, .input-group');
    var i = p.find('.form-control').val();
    if (p.hasClass('fg-float')) {
        if (i.length == 0) {
            $(this).closest('.fg-line').removeClass('fg-toggled');
        }
    } else {
        $(this).closest('.fg-line').removeClass('fg-toggled');
    }
});

//Add blue border for pre-valued fg-flot text feilds
$('.fg-float .form-control').each(function() {
    var i = $(this).val();
    if (!i.length == 0) {
        $(this).closest('.fg-line').addClass('fg-toggled');
    }
});

/*
    Set Auto Height of Textarea
 */
if ($('.auto-size')[0]) {
    autosize($('.auto-size'));
}