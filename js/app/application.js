define(
    [
        "require",
        "exports",
        "tslib",
        "jquery",
        "kendo.all.min",
        "jquery.stickytableheaders",
        "data/people", 
        "text!template/column/header/id.html",
        "extensions/array"
    ],
    function(require, exports, tslib, $, kendo, jqSticky, data, idHeaderTemplate) {
        var application = (function() {
            function application() {
            }
            application.prototype.Start = function () {
                var optionColumns;
                var gridOptions = {
                    columns: [
                        {
                            field: "Id",
                            title: "ID",
                            width: 200,
                            headerTemplate: template,
                            minResizableWidth: 200
                        },
                        {
                            field: "PerInfor",
                            title: "Personal Information",
                            headerTemplate: "<span class='expander' data-field='PerInfor'>-</span>",
                            width: 400,
                            minResizableWidth: 100,
                            isCollapsed: false,
                            columns: [
                                {
                                    field: "FirstName",
                                    title: "First Name",
                                    width: 100,
                                    minResizableWidth: 100
                                },
                                {
                                    field: "LastName",
                                    title: "Last Name",
                                    width: 100,
                                    minResizableWidth: 100
                                },
                                {
                                    field: "PhoneNumber",
                                    title: "Phone",
                                    width: 200,
                                    minResizableWidth: 200
                                }
                            ]
                        },
                        {
                            field: "Description",
                            title: "Description",
                            width: 500,
                            minResizableWidth: 500
                        }  
                    ],
                    resizable: true,
                    scrollable: false,
                    dataSource: {
                        data: data.people,
                        //data: data.noData
                    },
                    pageable: {
                        pageSize: 5,
                        pageSizes: true,
                        messages: {
                            itemsPerPage: "data items per page"
                        }
                    },
                    dataBound: function (e) {
                        //"No data available on current page. Current page is: #=this.dataSource.page()#"
                        var grid = e.sender;
                        var table = grid.table;
                        var width = table.width();
                        var div;
                        var $message = $("<div>No data available on current page.</div>");
                        if (!grid._data || grid._data.length == 0) {
                            div = grid.table.parent().find("div[data-role='pager']").detach();
                            grid.table.parent().append($message).append(div);
                            $message.width(width);
                        }
                        /*
                        console.log("width = " + width);
                        var columns = getColumnWidths(table.find("thead tr"));
                        columns.sort(function(a, b) {
                            return a.posLeft < b.posLeft ? -1 : 1;
                        });
                        console.log(columns);

                        optionColumns = $.extend(true, [], grid.getOptions().columns);
                        var flatColumns = getFlatColumns(optionColumns);
                        table.find("colgroup col").each(function (index, element) {
                            $(element).width(columns[index].width);
                            flatColumns[columns[index].field].width = columns[index].width;
                        });
                        
                        */
                        table.addClass("table-fixed").parent().width(0);
                        var pager = table.parent().find("div[data-role='pager']");
                        pager.width(width);
                    }
                };
                var grid = $("#grid").kendoGrid(gridOptions).data("kendoGrid");

                //grid.setOptions({columns: optionColumns});
                //$("#grid").data("kendoGrid").table.stickyTableHeaders();
                
                $("#grid").data("kendoGrid").table.on("click", ".expander", function (e) {
                    var $thead = $(e.target).closest("th");
                    var column = grid.columns.toQuery().first(function (column, x) {
                        return column.field == $thead.data("field");
                    });
                    for (var index = 1; index < column.columns.length; index ++) {
                        grid.hideColumn(column.columns[index].field);
                    }
                });

                var minTableWidth;
                var th;
                var idx;
                var lastPoint;
                var deltaX = 0;

                $("#grid").data("kendoGrid").resizable.bind("start", function(e) {
                    console.log("start");
                    console.log(e);
                    th = $(e.currentTarget).data("th");
                    console.log(th);
                    idx = th.index();
                    grid = th.closest(".k-grid").data("kendoGrid");
                });

                $("#grid").data("kendoGrid").resizable.bind("resize", function(e) {
                    var table = grid.tbody.closest("table");
                    var tableWidth = table.width();
                    /*
                    var tableParentWidth = table.parent().width();
                    console.log("div width = " + tableParentWidth);
                    console.log("table width = " + tableWidth);
                    */
                    var pager = table.parent().find("div[data-role='pager']");
                    pager.width(tableWidth);
                });

                $("#grid").data("kendoGrid").resizable.bind("stop", function(e) {
                    console.log(e);
                });
            };
            return application;
        })();

        var template = function (Te) {
            return idHeaderTemplate;
        };

        var getColumnWidths = function ($theads) {
            var totalRows = $theads.length;
            var columnWidth = [];
            $theads.each(function (rowIndex, rowElement) {
                var $thead = $(rowElement);
                $thead.find("th:visible").each(function (colIndex, colElement) {
                    var $col = $(colElement);
                    var rowspanStr = $col.attr("rowspan");
                    console.log("row span = " + rowspanStr);
                    var rowSpan = kendo.parseInt(rowspanStr);
                    rowSpan = rowSpan == null ? 1 : rowSpan;
                    console.log("rowSpan = " + rowSpan);
                    if (rowIndex + rowSpan == totalRows) {
                        console.log("position left = " + $col.position().left);
                        console.log("offset left = " + $col.offset().left);
                        columnWidth.push({ width: $col.outerWidth(), posLeft: $col.position().left, offLeft: $col.offset().left, field: $col.data("field")});
                    }
                });
            });
            return columnWidth;
        };

        function getFlatColumns(columns) {
            results = {};
            function dfs(columns) {
                for (var index = 0; index < columns.length; index ++) {
                    var col = columns[index];
                    if (!$.isArray(col.columns)) {
                        results[col.field] = col;
                    } else {
                        dfs(col.columns);
                    }
                }
            }
            dfs(columns);
            return results;
        }
        return application;
    }
);