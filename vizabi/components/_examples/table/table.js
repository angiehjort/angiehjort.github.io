define([
    'jquery',
    'base/utils',
    'base/component',
], function($, utils, Component) {

    var container;

    var Table = Component.extend({
        init: function(parent, options) {
            this.template = "components/_examples/table/table";
            this._super(parent, options);
        },

        postRender: function() {
            this.update();
        },

        update: function() {
            var _this = this;

            //TODO: mapping of columns and data
            var columns = this.model.getState().columns,
                data = this.model.getData()[0];

            var table = this.element;
            table.html("");


            var thead = table.append("thead"),
                tbody = table.append("tbody");

            // append the header row
            thead.append("tr")
                .selectAll("th")
                .data(columns)
                .enter()
                .append("th")
                .text(function(column) {
                    return column;
                });

            // create a row for each object in the data
            var rows = tbody.selectAll("tr")
                .data(data)
                .enter()
                .append("tr");

            // create a cell in each row for each column
            var cells = rows.selectAll("td")
                .data(function(row) {
                    return columns.map(function(column) {
                        return {
                            column: column,
                            value: row[column]
                        };
                    });
                })
                .enter()
                .append("td")
                .text(function(d) {
                    return d.value;
                });
        }

    });

    return Table;
});
