var windowWidth = $(window).width();
var windowHeight = $(window).height();

$(function(){
    //initializied functions
    options = {
        showOverlay: false,
        zoom: 1,
        layout: layoutObj,
        elements: eleObj,
        style: styleObj,
        ready: function () {
            window.cy = this;
        }
    };
    //start cytoscape visualization
    $('#cy').cytoscape(options);

    // start cytoscape panzoom bar
    $("#cy").cytoscapePanzoom();

    // set mouse interactions
    mouse_hover();
    //left_click();
})

function mouse_hover() {
    // mouse hover to view first neighbor
    var cy = $("#cy").cytoscape("get");
    cy.$('node').on('mouseover', function (e) {
        var firstNeighbor = e.cyTarget.closedNeighborhood();
        //var secondNeighbor = firstNeighbor.closedNeighborhood();
        cy.$().css('opacity', '0.2');
        firstNeighbor.css('opacity', '1');
    });
    cy.$('node').on('mouseout', function (e) {
        cy.$('node').css('opacity', '1');
        cy.$('edge').css('opacity', '0.8');
    });
}

function left_click() {
    //left click to show property table
    var cy = $("#cy").cytoscape("get");
    cy.on('tap', function (e) {
        if (e.cyTarget === cy)
            $("#property").hide();
    });
    cy.$('node').on('tap', function (e) {
        e.cyTarget.select();
        property_table_node(e.cyTarget);
    });
    cy.$('edge').on('tap', function (e) {
        e.cyTarget.select();
        property_table_edge(e.cyTarget);
    });
}

function property_table_node(ele) {
    $('#property').empty();
    $('#property').show();
    $('#property').append('<table id="propertyTable"></table>');
    var data = ele.data();
    $('#propertyTable').append('<tr><td colspan="2" class="property-header">' + data.id + '</td></tr>');
    for (var i in data)
        $('#propertyTable').append('<tr><td class="property-table-td1">' + i + '</td><td class="property-table-td2">' + data[i], '</td></tr>');
    // or
    //var outList = ["Label"];
    //for (var i in outList)
    //    $('#propertyTable').append('<tr><td class="property-table-td1">' + outList[i] + '</td><td class="property-table-td2">' + data[outList[i]] + '</td></tr>');
    set_div_pos(ele.renderedPosition().x, ele.renderedPosition().y, "#property", 150, true);
    $("#propertyTable tr:even").css({"background-color": "#f4f4f4", "color": "#000"});
}

function property_table_edge(ele) {
    $('#property').empty();
    $('#property').show();
    $('#property').append('<table id="propertyTable"></table>');
    var data = ele.data();
    $('#propertyTable').append('<tr><td colspan="2" class="property-header"> Edge: </td></tr>');
    for (var i in data)
        $('#propertyTable').append('<tr><td class="property-table-td1">' + i + '</td><td class="property-table-td2">' + data[i], '</td></tr>');
    var eles = ele.connectedNodes();
    var x = eles[0].renderedPosition().x + eles[1].renderedPosition().x;
    var y = eles[0].renderedPosition().y + eles[1].renderedPosition().y;
    set_div_pos(x / 2, y / 2, "#property", 150, true);
    $("#propertyTable tr:odd").css({"background-color": "#f4f4f4", "color": "#000"});
}

function set_div_pos(x, y, divid, w, shift) {
    if (shift == true)
        var xs = 15, ys = 15;
    else
        var xs = 0, ys = 0;
    if (x + w > windowWidth)
        x = x - w - xs;
    else
        x = x + xs;
    var h = $(divid).height();
    if (y + h > windowHeight)
        y = y - h - ys;
    else
        y = y + ys;
    $(divid).offset({top: y, left: x});
}

//function save_options() {
//    var saveOpt = $('input[name="networkFormat"]').val();
//    var cy = $("#cy").cytoscape("get");
//    if (saveOpt == 'networkPng')
//        cy.png();
//}