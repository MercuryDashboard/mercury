var Company = [{
    dimension: 'ALL ',
    unit: ' ',
    Sku_CNT: 101000,
    currentINV: 840000,
    tipINV: 841000,
    rowROQ: 333,
    roq: 1000,
    uploadROQ: 333,
    currentAMT: '136744m',
    tipAMT: '135211m',
    currentDOC: 23.79,
    tipDOC: 22.18,
    releaseDOC: 22.22,
    uploadDOC: 333,
    Unit: [{
        dimension: ' ',
        unit: 'Baby Core',
        Sku_CNT: 1436,
        currentINV: 528488,
        tipINV: 569797,
        rowROQ: 333,
        uploadROQ: 333,
        roqINV: 41319,
        currentAMT: '4246m',
        tipAMT: '2716m',
        currentDOC: 18.87,
        tipDOC: 14.46,
        releaseDOC: 17.99,
        uploadDOC: 333,
        Dimension: [{
            dimension: 'Manual Release',
            unit: 'Baby Core',
            Sku_CNT: 658,
            currentINV: 280657,
            tipINV: 294241,
            rowROQ: 333,
            roq: 13584,
            uploadROQ: 333,
            currentAMT: '0',
            tipAMT: '7.4m',
            currentDOC: 0,
            tipDOC: 14.28,
            releaseDOC: 15.11,
            uploadDOC: 333,
        }, {
            dimension: 'Auto Release',
            unit: 'Baby Core',
            Sku_CNT: 778,
            currentINV: 247831,
            tipINV: 275556,
            rowROQ: 333,
            roq: 27725,
            uploadROQ: '',
            currentAMT: '340m',
            tipAMT: '890m',
            currentDOC: 12.55,
            tipDOC: 13.68,
            releaseDOC: 15.34,
            uploadDOC: '',

        }]

    }, {
        dimension: ' ',
        unit: 'Beauty',
        Sku_CNT: 26048,
        currentINV: 1195318,
        tipINV: 549792,
        rowROQ: 333,
        roqINV: -683874,
        uploadROQ: 333,
        currentAMT: '136744m',
        tipAMT: '135211m',
        currentDOC: 23.79,
        tipDOC: 22.18,
        releaseDOC: 22.41,
        uploadDOC: 333,
        Dimension: [{
            dimension: 'Manual Release',
            unit: 'Beauty',
            Sku_CNT: 101000,
            currentINV: 247831,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18
        }, {
            dimension: 'Auto Release',
            unit: 'Beauty',
            Sku_CNT: 101000,
            currentINV: 247831,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18

        }]
    }, {
        dimension: ' ',
        unit: 'Food',
        Sku_CNT: 20266,
        currentINV: 1434588,
        tipINV: 1383792,
        rowROQ: 333,
        roqINV: -52844,
        uploadROQ: 333,
        currentAMT: '136744m',
        tipAMT: '135211m',
        currentDOC: 17.49,
        tipDOC: 16.87,
        releaseDOC: 17.55,
        uploadDOC: 333,
        Dimension: [{
            dimension: 'Manual Release',
            unit: 'Food',
            Sku_CNT: 101000,
            currentINV: 840000,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18
        }, {
            dimension: 'Auto Release',
            unit: 'Food',
            Sku_CNT: 101000,
            currentINV: 840000,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18

        }]
    }, {
        dimension: ' ',
        unit: 'Toys',
        Sku_CNT: 10266,
        currentINV: 734588,
        tipINV: 683792,
        rowROQ: 333,
        roqINV: -52844,
        uploadROQ: 333,
        currentAMT: '136744m',
        tipAMT: '135211m',
        currentDOC: 18.49,
        tipDOC: 17.87,
        releaseDOC: 18.55,
        uploadDOC: 333,
        Dimension: [{
            dimension: 'Manual Release',
            unit: 'Food',
            Sku_CNT: 101000,
            currentINV: 840000,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18
        }, {
            dimension: 'Auto Release',
            unit: 'Food',
            Sku_CNT: 101000,
            currentINV: 840000,
            tipINV: 820000,
            currentAMT: '136744m',
            tipAMT: '135211m',
            currentDOC: 23.79,
            tipDOC: 22.18

        }]
    }]



}];



/*
    company level dataGrid
*/
$(function() {
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: Company,
        autoExpandAll: true,
        columns: [{
            dataField: 'dimension',
            allowResizing: true,
            allowHiding: false, 
            alignment: 'center',
        }, {
            dataField: 'unit',
            allowResizing: true,
            alignment: 'center',
            width: 60,
        }, {
            dataField: 'Sku_CNT',
            allowResizing: true,
            alignment: 'center',
            allowGrouping: false,
            
        }, {
            dataField: 'currentINV',
            caption: 'CUR INV',
            alignment: 'center',
            

        }, {
            dataField: 'tipINV',
            alignment: 'center',
            
        }, {
            dataField: 'rowROQ',
            caption: 'Raw ROQ',
            alignment: 'center',
            cssClass: 'merge',
            
        }, {
            dataField: 'roq',
            caption: 'ROQ INV',
            alignment: 'center',
            cssClass: 'merge',
            
        }, {
            dataField: 'uploadROQ',
            caption: 'UPD-ROQ ',
            alignment: 'center',
            
        }, {
            dataField: 'currentDOC',
            //allowGrouping: false,
            alignment: 'center',
            cssClass: 'merge ',
            caption: 'CUR DOC',
        }, {
            dataField: 'tipDOC',
            //allowGrouping: false,
            alignment: 'center',
            cssClass: 'merge',
        }, {
            dataField: 'releaseDOC',
            caption: 'ROQ DOC',
            //format: 'currency', 
            //precision: 2, 
            //allowGrouping: false,
            alignment: 'center',
            cssClass: 'merge',
        }, {
            dataField: 'uploadDOC',
            caption: 'UPD-DOC',
            //format: 'currency', 
            //precision: 2, 
            //allowGrouping: false,
            alignment: 'center',


        }],

        allowColumnReordering: true,
        sorting: { mode: 'multiple' },

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

    });

    /*
        Master Details Information of Scenariot Management
    */
    var masterDetailUnit = function(container, options) {
        var currentUnitData = options.data;
        var oInstance;
        $("<div>", {'class':'instance-div'}).dxDataGrid({
            columnAutoWidth: true,
            autoExpandAll: true,
            columns: [{
                dataField: "dimension",
                caption: "",
            }, {
                dataField: "unit",
                alignment: 'center',
            }, {
                dataField: "Sku_CNT",
                alignment: 'center',
            }, {
                dataField: "currentINV",
                alignment: 'center',
                caption: 'CUR INV',
            }, {
                dataField: "tipINV",
                alignment: 'center',
            }, {
                dataField: 'rowROQ',
                caption: 'Raw ROQ',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
            }, {
                dataField: 'roqINV',
                caption: 'ROQ INV',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
            }, {
                dataField: 'uploadROQ',
                caption: 'UPD-ROQ ',
                allowGrouping: false,
                alignment: 'center',
            }, {
                dataField: 'currentDOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
                caption: 'CUR DOC',
            }, {
                dataField: 'tipDOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
            }, {
                dataField: 'releaseDOC',
                caption: 'ROQ DOC',
                allowGrouping: false,
                alignment: 'center',
                cssClass: 'merge',
            }, {
                dataField: 'uploadDOC',
                caption: 'UPD-DOC',
                allowGrouping: false,
                alignment: 'center',
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
                }
            }],
            dataSource: currentUnitData.Unit,
            showRowLines: true,
            masterDetail: {
                enabled: true,
                //autoExpandAll: true,
                template: function(container, options) {
                    masterDetailDiemsion(container, options, oInstance);
                }
            }
        }).appendTo(container);      
    };

    /*
        Master Details Information of Diemsion
    */

    var masterDetailDiemsion = function(container, options, o) {
        var currentDiemnsionData = options.data;
        $("<div>")
            .dxDataGrid({
                columnAutoWidth: true,
                columns: [{
                    dataField: "dimension",
                },{
                    dataField: "unit",
                    alignment: 'center',
                  },{
                    dataField: "Sku_CNT",
                    alignment: 'center',
                }, {
                    dataField: "currentINV",
                    alignment: 'center',
                    caption: 'CUR INV',
                }, {
                    dataField: "tipINV",
                    alignment: 'center',
                }, {
                    dataField: 'rowROQ',
                    caption: 'Raw ROQ',
                    cssClass: 'merge',
                    allowGrouping: false,
                    alignment: 'center',
                }, {
                    dataField: 'roq',
                    caption: 'ROQ INV',
                    cssClass: 'merge',
                    allowGrouping: false,
                    alignment: 'center',
                }, {
                    dataField: 'uploadROQ',
                    caption: 'UPD-ROQ',
                    allowGrouping: false,
                    alignment: 'center',
                }, {
                    dataField: 'currentDOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge',
                    caption: 'CUR DOC',
                }, {
                    dataField: 'tipDOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge',
                }, {
                    dataField: 'releaseDOC',
                    caption: 'ROQ DOC',
                    allowGrouping: false,
                    alignment: 'center',
                    cssClass: 'merge'
                }, {
                    dataField: 'uploadDOC',
                    caption: 'UPD-DOC',
                    allowGrouping: false,
                    alignment: 'center',
                }, {
                    dataField: "",
                    alignment: 'center',
                    caption: "Active",
                    cellTemplate: function(container, options) {
                        var eButton, sMsg,
                            that = container;

                        if (options.data.dimension == 'Manual Release') {
                            eButton = $('<button>').addClass('btn btn-primary btn-xs waves-effect'),
                                sMsg = "&nbsp;&nbsp;released&nbsp;&nbsp;";
                            eButton.append(sMsg).appendTo(container);

                            eButton.click(function() {
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
        Add Download and Upload buttons
     */

    setTimeout(function(){
            var div1 = $('<div>',{'class':'dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide'}),
                div2 = $('<div>', {'class':'dx-item-content dx-toolbar-item-content'}),
                div3 = $('<div>', {'class':'dx-datagrid-toolbar-button dx-datagrid-export-button dx-button dx-button-normal dx-widget dx-button'}),
                div4 = $('<div>', {'class':'dx-button-content'}),
                inputFile = $('<input>',{'class':'uploadFile','html':' ','type':'file','title':'Upload'}),
                upload = $('<i>', {'class':'dx-icon dx-icon-upload','html':' ','title':'Upload'});
                
            $(".dx-toolbar-after").append(div1.append(div2.append(div3.append(div4.append(upload).append(inputFile)))));
        
            $(".uploadFile").change(function(e) {
                    var $this = $(this);
                    // Get file extension
                    var sExtension = $(this).val().split(".").pop().toLowerCase();
                    // Identify if extension equals to .csv
                    if ($.inArray(sExtension, ["csv"]) == -1) { // Not the .csv file
                        sweetAlert("File Type Error"," ","error");
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
                                    if ( (i+j) === (iFileArrayLength + iLineArrayLength - 2) ) {
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
                
            });
});
