var moreData = [{
    label: 'Forecast Model',
    value: 'Normal'
}, {
    label: 'Lead time Model',
    value: 'Normal'
}, {
    label: 'Scenario Name',
    value: '(0609)RoundingFactor&CriticalRatio&OrderFrequency'
}, {
    label: 'Run By',
    value: 'Liu Ce(Chuck L/Chuck L)'
}, {
    label: 'Forecast - Total Input/Output',
    value: '439048/439048'
}];

function growTile(tile) {
    var scrollTop = $(window).scrollTop();
    var osTop = tile.offset().top;
    var osLeft = tile.offset().left;
    // make copy
    var copy = tile.clone().addClass('copy');
    // make original invisible to keep tile space
    tile.addClass('invisible');
    copy.css({
        left: osLeft,
        top: osTop - scrollTop
    });
    addDetailsWithLayout(copy);
    copy.appendTo('.tiles');
    $('body').addClass('no-scroll');
    $('.overlay').fadeIn(200, function() {
        copy.addClass('zoom');
    });
    $('.viewMore').hide();
}

function shrinkTile() {
    $('body').removeClass('no-scroll');
    $('.copy').removeClass('zoom');
    setTimeout(function() {
        $('.invisible').removeClass('invisible');
        $('.copy').remove();
        $('.overlay').fadeOut(600);
        $('.viewMore').show();
        $('.tile').removeClass('overflow');
    }, 600);
}

function generateDefHTML(label, value) {
    return '<div class="col-md-11">' +
        '<label class="gridLabel">' + label + '</label>' +
        '<label class="gridValue">' +
        value +
        '</label>' +
        '</div>';
}

function addDetailsWithLayout(copy) {
    var initialDataCount = 2,
        moreDataCount = moreData.length,
        totalDataCount = initialDataCount + moreDataCount,
        columnCount = Math.ceil(totalDataCount * 1 / 3);
    for (var i = 0; i < moreData.length; i++) {
        var def = generateDefHTML(moreData[i].label, moreData[i].value);
        // determine column (columns read down then across)
        copy.find('.details .col-md-12').append(def);
    }

}

function viewAttachments() {
    alert('View attachments function');
}

function viewReport() {
    alert('View report function');
}

// toggle 'selected' state on a tile
$(document).on('change', ':checkbox', function() {
    $(this).closest('.tile').toggleClass('selected');
    if ($(this).closest('.tile').hasClass('copy')) {
        $('.invisible').find(':checkbox').click();
    }
});

// toggle details view
$(document).on('click', '.viewMore', function() {
    var tile = $(this).closest('.tile');
    if (tile.hasClass('copy')) {
        // do nothing
    } else {
        tile.addClass('overflow');
        growTile(tile);
    }
});

// click anywhere off tile to close
$(document).on('click', '.overlay', shrinkTile);

// view attachments
$(document).on('click', '.fa.fa-paperclip', viewAttachments);

// view report
$(document).on('click', '.fa.fa-file-text', viewReport);
