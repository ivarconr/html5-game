//Global and ugly...
speed = {
    dx: 2,
    dy: 2
};

$(function() {    
    function buildRow(rowContainer) {
        var row, i, cell;        
        row = $("<tr>");    
        for(i=0;i<9;i++) {
            cell = $("<td>").html("☆").addClass("cell");
            row.append(cell);
            cell.click(function() {
                $(this).html("★").toggleClass("selected");
            });
        }
        rowContainer.append(row);
    }
    function buildRows(rowContainer) {
        var i;
        for(i=0;i<9;i++) {
            buildRow(rowContainer);
        }        
    }
    buildRows($("#row-container"));
});
