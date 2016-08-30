/*
    company level dataGrid
*/
(function() {
    
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: "lib/js/data/adoption.json",
        remoteOperations: false,
        autoExpandAll: true,
        columns: [{
            dataField: 'dimension',
            allowResizing: true,
            allowHiding: false,
            allowSorting: false,
            alignment: 'center'
        }, {
            dataField: 'unit',
            allowResizing: true,
            alignment: 'center',
            allowSorting: false,
            width: 60,
        }, {
            dataField: 'skuCount',
            allowResizing: true,
            alignment: 'center',
            allowGrouping: false,
            allowSorting: false,
        }, {
            dataField: 'currentINV',
            caption: 'CUR INV',
            alignment: 'center',
            allowSorting: false,
        }, {
            dataField: 'tipINV',
            alignment: 'center',
            allowSorting: false,
        }, {
            dataField: 'rawRoq',
            caption: 'Raw ROQ',
            alignment: 'center',
            cssClass: 'merge',
            allowSorting: false,
        }, {
            dataField: 'roq',
            caption: 'ROQ INV',
            alignment: 'center',
            cssClass: 'merge releaseHighlight',
            allowSorting: false,
        }, {
            dataField: 'updRoq',
            caption: 'UPD ROQ',
            alignment: 'center',
            cssClass: 'highlight',
            allowSorting: false,
        }, {
            dataField: 'currentDOC',
            allowGrouping: false,
            alignment: 'center',
            cssClass: 'merge ',
            caption: 'CUR DOC',
            allowSorting: false,
        }, {
            dataField: 'tipDOC',
            allowGrouping: false,
            alignment: 'center',
            cssClass: 'merge',
            allowSorting: false,
        }, {
            dataField: 'roqDOC',
            caption: 'ROQ DOC',
            alignment: 'center',
            cssClass: 'merge releaseHighlight',
            allowSorting: false,
        }, {
            dataField: 'updDOC',
            caption: 'UPD DOC',
            alignment: 'center',
            cssClass: 'highlight',
            allowSorting: false,
        }],
        showRowLines: true,
        paging: { pageSize: 7 },
        "export": {
            enabled: true,
            fileName: "Employees",
            allowExportSelectedData: true
        },
        groupPanel: { visible: true, emptyPanelText: '9999-oozie-id     2016-07-26' },
        masterDetail: {
            enabled: true,
            autoExpandAll: true,
            template: function(container, options) {
                masterDetailUnit(container, options);

            }
        }
    }).dxDataGrid('instance');

       

    /*
        Master Details Information of Unit
    */
    var masterDetailUnit = function(container, options) {
        var currentUnitData = options.data,
            oInstance,
            oData;
        $("<div>", { 'class': 'instance-div' }).dxDataGrid({
            columnAutoWidth: true,
            autoExpandAll: true,
            columns: [{
                dataField: "dimension",
                caption: "",
            }, {
                dataField: "unit",
                alignment: 'center',
                allowSorting: false,
            }, {
                dataField: "skuCount",
                alignment: 'center',
                allowSorting: false,
            }, {
                dataField: "currentINV",
                alignment: 'center',
                caption: 'CUR INV',
                allowSorting: false,
            }, {
                dataField: "tipINV",
                alignment: 'center',
                allowSorting: false,
            }, {
                dataField: 'rawRoq',
                caption: 'Raw ROQ',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
                allowSorting: false,
            }, {
                dataField: 'roq',
                caption: 'ROQ INV',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge releaseHighlight',
                allowSorting: false,
            }, {
                dataField: 'updRoq',
                caption: 'UPD ROQ',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'highlight',
                allowSorting: false,               
            }, {
                dataField: 'currentDOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
                caption: 'CUR DOC',
                allowSorting: false,
            }, {
                dataField: 'tipDOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
                allowSorting: false,
            }, {
                dataField: 'roqDOC',
                caption: 'ROQ DOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge releaseHighlight',
                allowSorting: false,
            }, {
                dataField: 'updDOC',
                caption: 'UPD DOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'highlight',
                allowSorting: false,
            }, {
                dataField: "",
                caption: "Status",
                width: 80,
                alignment: 'center',
                cellTemplate: function(container, options) {
                    var divWrapper = $('<div>').addClass('checkbox-container-adoption'),
                        inputWrapper = $('<input>').attr('id', options.data.unit).attr('type', 'checkbox'),
                        labelWrapper = $('<label>').attr('for', options.data.unit).text(' ');

                    divWrapper.appendTo(container);
                    inputWrapper.appendTo(divWrapper);
                    labelWrapper.appendTo(divWrapper);

                    oInstance = divWrapper;
                    oData = options;
                }
            }],
            dataSource: currentUnitData.Unit,
            showRowLines: true,
            masterDetail: {
                enabled: true,
                template: function(container, options) {
                    masterDetailDiemsion(container, options, oInstance, oData);
                }
            }
        }).appendTo(container);
    };

    /*
        Master Details Information of Diemsion
    */
    var masterDetailDiemsion = function(container, options, o,d) {
        var currentDiemnsionData = options.data;
        $("<div>")
            .dxDataGrid({
                columnAutoWidth: true,
                columns: [{
                    dataField: "dimension",
                    allowSorting: false,
                }, {
                    dataField: "unit",
                    alignment: 'center',
                    allowSorting: false,
                }, {
                    dataField: "skuCount",
                    alignment: 'center',
                    allowSorting: false,
                }, {
                    dataField: "currentINV",
                    alignment: 'center',
                    caption: 'CUR INV',
                    allowSorting: false,
                }, {
                    dataField: "tipINV",
                    alignment: 'center',
                    allowSorting: false,
                }, {
                    dataField: 'rawRoq',
                    caption: 'Raw ROQ',
                    cssClass: 'merge',
                    allowGrouping: false,
                    alignment: 'center',
                    allowSorting: false,
                }, {
                    dataField: 'roq',
                    caption: 'ROQ INV',
                    cssClass: 'merge releaseHighlight',
                    allowGrouping: false,
                    alignment: 'center',
                    allowSorting: false,
                }, {
                    dataField: 'updRoq',
                    caption: 'UPD ROQ',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'highlight',
                    allowSorting: false,
                }, {
                    dataField: 'currentDOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge',
                    caption: 'CUR DOC',
                    allowSorting: false,
                }, {
                    dataField: 'tipDOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge',
                    allowSorting: false,
                }, {
                    dataField: 'roqDOC',
                    caption: 'ROQ DOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge releaseHighlight',
                    allowSorting: false,
                }, {
                    dataField: 'updDOC',
                    caption: 'UPD DOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'highlight',
                    allowSorting: false,
                }, {
                    dataField: "",
                    alignment: 'center',
                    caption: "Active",
                    cellTemplate: function(container, options) {

                        var eButton, sMsg,
                            that = container;

                        if (options.data.dimension == 'Manual Release') {
                            eButton = $('<button>').addClass('btn btn-primary btn-xs waves-effect'),
                                sMsg = "&nbsp;&nbsp;Released&nbsp;&nbsp;";
                            eButton.append(sMsg).appendTo(container);

                            eButton.click(function() {
                                console.log(d);
                                o.addClass('released');
                            });
                        }
                    }
                }],
                showRowLines: true,
                dataSource: currentDiemnsionData.Dimension
            }).appendTo(container);
    };

    /*
    
     */
    var initialEvents = function() {
        addPopOver();
        addUploadButton();
        dataGrid.off("contentReady");
    };

    var addPopOver = function() {
        $.each(dataGrid.element().find("td[aria-label][role='columnheader']"), function(i,v) {
            var sValue = $(this).find('div.dx-datagrid-text-content').text(),
                sMsg;
             switch (sValue) {
                case "Sku CNT":
                    sMsg = "Sku count";
                    break;
                case "CUR INV":
                    sMsg = "Current Inventory";
                    break;
                case "Tip INV": 
                    sMsg = "Tip Inventory";
                    break;
                case "ROQ INV":
                    sMsg = "ROQ Inventory";
                    break;
                case "CUR DOC":
                    sMsg = "Current Days of cover";
                    break;
                case "Tip DOC": 
                    sMsg = "Tip Days of cover";
                    break;
                case "ROQ DOC":
                    sMsg = "ROQ Days of cover";
                    break;
                case "UPD DOC":
                    sMsg = "Upload Days of cover";
                    break;
                case "UPD ROQ":
                    sMsg = "Upload ROQ";
                    break;
                default:
                    sMsg = sValue;
            }
            var pop = $("<div>").dxPopover({
                target: $(this),
                position: "top",
                width: 'auto',
                animation: { 
                    show: {
                        type: "pop",
                        from: {  scale: 0 },
                        to: { scale: 1 }
                        },
                    hide: {
                        type: "fade",
                        from: 1,
                        to: 0
                    }
                },
                contentTemplate: function(container) {
                    $("<div>", {"html": sMsg}).appendTo(container);
                }
            }).appendTo($("#gridContainer")).dxPopover("instance");

            $(this).hover(function() { 
                pop.show();
            },function() { 
                pop.hide();
            });
        });   
    };

    /*
        Add Download and Upload buttons
     */
    var addUploadButton = function() {
        var div1 = $('<div>', { 'class': 'dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide' }),
            div2 = $('<div>', { 'class': 'dx-item-content dx-toolbar-item-content' }),
            div3 = $('<div>', { 'class': 'dx-datagrid-toolbar-button dx-datagrid-export-button dx-button dx-button-normal dx-widget dx-button' }),
            div4 = $('<div>', { 'class': 'dx-button-content' }),
            inputFile = $('<input>', { 'class': 'uploadFile', 'html': ' ', 'type': 'file', 'title': 'Upload' }),
            upload = $('<i>', { 'class': 'dx-icon dx-icon-upload', 'html': ' ', 'title': 'Upload' });

        $(".dx-toolbar-after").append(div1.append(div2.append(div3.append(div4.append(upload).append(inputFile)))));

        $(".uploadFile").change(function(e) {
            var $this = $(this);
            // Get file extension
            var sExtension = $(this).val().split(".").pop().toLowerCase();
            // Identify if extension equals to .csv
            if ($.inArray(sExtension, ["csv"]) == -1) { // Not the .csv file
                sweetAlert("File Type Error", " ", "error");
                return false;
            }
            if (e.target.files != undefined) {
                // Open FileReader
                var reader = new FileReader();
                // Load file
                reader.onload = function(e) {
                    // Remove "Enter" symbol. Return Array Object.
                    var aFileArray = e.target.result.split("\n");
                    // Column Length
                    var iColumnLength = aFileArray[0].split(",").length;
                    // Result value
                    var sResult = "";
                    // File Array Length
                    var iFileArrayLength = aFileArray.length;
                    // Loop aFileArray
                    for (var i = 0; i < iFileArrayLength; i++) {
                        // Array of each line, split via ","
                        var aLineArray = aFileArray[i].split(",");
                        // Line Array Length
                        var iLineArrayLength = aLineArray.length;
                        // Loop aLineArray
                        for (var j = 0; j < iLineArrayLength; j++) {
                            if ((i + j) === (iFileArrayLength + iLineArrayLength - 2)) {
                                sResult += aLineArray[j];
                            } else {
                                sResult += aLineArray[j] + ",";
                            }
                        }
                    }
                    //$this.closest('td.col-3-value').find('.condition_value').val(sResult);
                };
                reader.readAsText(e.target.files.item(0));
            }
            $this.val("");
        });
    };

    dataGrid.on({
        "contentReady" : initialEvents
    }); 
    
})();
