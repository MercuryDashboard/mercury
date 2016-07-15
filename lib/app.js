/*
    This is the major configuration for Project. 
 */
requirejs.config({
    baseUrl: 'lib/frame',
    deps: ['../../lib/main'],
    paths: {
        // Load jQuery Framework
        'jquery': 'jquery/lib/jquery-1.12.3',
        // Load Bootstrap Framework
        'bootstrap': 'bootstrap/lib/js/bootstrap',
        // Load Dom Ready Plugin
        'domReady': 'requirejs/lib/domReady',
        /*
            Load Data Table Plugins:
                @param {jquery.dataTables.js}
                @param {dataTables.buttons.js}
                @param {buttons.flash.js}
                @param {buttons.html5.js}
                @param {buttons.print.js}
                @param {pdfmake.js}
                @param {jszip.js}
                @param {vfs_fonts.js}
                @param {buttons.colVis.js}
                @param {dataTables.scroller.js}
         */
        'datatables.net': 'datatable/datatable/js/jquery.dataTables',
        'datatable.bootstrap': 'datatable/datatable/js/dataTables.bootstrap',
        'datatables.net-buttons': 'datatable/buttons/js/dataTables.buttons',
        'datatables.net-bs': 'datatable/buttons/js/buttons.bootstrap',
        'dtFlashBTN': 'datatable/buttons/js/buttons.flash',
        'dtHTML5BTN': 'datatable/buttons/js/buttons.html5',
        'dtPrintBTN': 'datatable/buttons/js/buttons.print',
        'dtPDFMaker': 'datatable/pdfmake/pdfmake',
        'dtJSZip': 'datatable/JSZip/jszip',
        'dtVFSFont': 'datatable/pdfmake/vfs_fonts',
        'dtColumnVis': 'datatable/colVis/js/buttons.colVis',
        'dtScroll': 'datatable/scroller/js/dataTables.scroller',
        'dtRowReorder': 'datatable/rowreorder/js/dataTables.rowReorder',
        'datatables.net-responsive': 'datatable/responsive/js/dataTables.responsive',
        'dtBootstrapResponsive': 'datatable/responsive/js/responsive.bootstrap'
    },
    shim: {
        'bootstrap': ['jquery'],
        // 'datatable': {
        //     deps: [
        //         'jquery',
        //         'datatables.net',
        //         'datatable.bootstrap',
        //         'datatables.net-buttons',
        //         'datatables.net-bs',
        //         'dtFlashBTN',
        //         'dtHTML5BTN',
        //         'dtPrintBTN',
        //         'dtPDFMaker',
        //         'dtJSZip',
        //         'dtVFSFont',
        //         'dtColumnVis',
        //         'dtRowReorder'
        //     ]
        //},
    },
    i18n: {
        'buttons.colvis': 'Show/Hide'
    }
});
