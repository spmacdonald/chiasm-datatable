var Model = require("model-js");
var ChiasmComponent = require("chiasm-component");

function DataTable(){

  var my = new ChiasmComponent({
    columns: Model.None,
    tableClass: "table"
  });

  var div = d3.select(my.initDIV());

  var table = div.append("table");
  var thead = table.append("thead");
  var tbody = table.append("tbody");

  my.when(["data", "columns"], function(data, columns) {
    var header = thead.append("tr").selectAll("th").data(columns);
      header.enter().append("th");
      header.exit().remove();
      header
          .text(function(d) { return d.value; })
          .each(function(d) { d3.select(this).style(d.style); });

    var rows = tbody.selectAll("tr").data(data);
      rows.enter().append("tr");
      rows.exit().remove();

    var cells = rows.selectAll("td")
        .data(function(row) {
          return columns.map(function(column) {
            return {column: column, value: row[column.value]};
          });
        });
      cells.enter().append("td");
      cells.exit().remove("td");
      cells
          .html(function(d) { return d.column.formatter(d.value); })
          .each(function(d) {
            d3.select(this).style(d.column.style);
            var color = d.column.color === undefined ? "auto" : d.column.color(d.value);
            d3.select(this).style({"color": color});
          });

  });

  my.when("tableClass", function(cls) {
    table.attr("class", cls);
  });

  return my;
}

module.exports = DataTable;
