var windowWidth = $(window).width();
var windowHeight = $(window).height();

$(function () {
    //initializied functions
    options = {
        showOverlay: false,
        zoom: 1,
        layout: {
            name: 'grid',
            padding: 5
        },
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
    left_click();

    // display options
    // dp_prop_template('property_name', 'property_list', {});
    // dp_prop_template("Year", stat.years, {});
});

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
        if (e.cyTarget === cy) {
            cy.$().unselect();
            $("#property").hide();
        }
    });
    cy.$('node').on('tap', function (e) {
        e.cyTarget.select();
        // if (e.cyTarget.data().Group == "faculty")
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
    $("#propertyTable tr:odd").css({
        "background-color": "#f4f4f4",
        "color": "#000"
    });
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
    if (eles.length > 1) {
        var x = eles[0].renderedPosition().x + eles[1].renderedPosition().x;
        var y = eles[0].renderedPosition().y + eles[1].renderedPosition().y;
        set_div_pos(x / 2, y / 2, "#property", 150, true);
    }
    else
        set_div_pos(eles.renderedPosition().x, eles.renderedPosition().y, "#property", 150, true);
    $("#propertyTable tr:odd").css({
        "background-color": "#f4f4f4",
        "color": "#000"
    });
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


function display_options() {
    var cy = $("#cy").cytoscape("get");
    //cy.load(eleObj);
    cy.$().css('opacity', '1');
    var yearHideList = $(stat.years).not(get_checked_value("dpYear")).get();
    var hideEle = cy.$('node').filter(function (i, element) {
        return containsAll(yearHideList, element.data("years_of_involvement").split(', '))
    });
    hideEle.css('opacity', '0.4');
    hideEle.connectedEdges().css('opacity', '0.4');
    left_click();
}

function dp_prop_template(prop, list, dict) {
    $("#dp" + prop + "Div").append('<input type="checkbox" id="dp' + prop + 'All" onchange=dp_name_check_all("dp' + prop + '"); checked > All ');
    if (list.length > 0)
        list.forEach(function (ele) {
            $("#dp" + prop + "Div").append('<input type="checkbox" class="indention-1" name="dp' + prop + '" value="' + ele + '" onchange="display_options()" checked >' + ele + '&nbsp;');
        });
    else
        $("#dp" + prop + "All").prop({"disabled": true, "checked": false});
}

function containsAll(a, b) {
    // if a contain all elements from b, return true
    for (var i = 0, len = b.length; i < len; i++) {
        if ($.inArray(b[i], a) == -1) return false;
    }
    return true;
}

function get_checked_value(name) {
    return $('input[type="checkbox"][name="' + name + '"]:checked').map(function () {
        return this.value
    }).get()
}

function dp_name_check_all(cls) {
    if ($('#' + cls + 'All').prop("checked"))
        $('input[name="' + cls + '"]').each(function () {
            if (!$(this).prop('disabled'))
                $(this).prop('checked', true).trigger("onchange");
        });
    else
        $('input[name="' + cls + '"]').each(function () {
            if (!$(this).prop('disabled'))
                $(this).prop('checked', false).trigger("onchange");
        });
}

function animation(name) {
    $('#' + name + 'All').prop('checked', false).trigger("onchange");
    $('input[type="checkbox"][name="' + name + '"]').each(function (i) {
        var checkbox = $(this);
        setTimeout(function () {
            checkbox.prop('checked', true).trigger("onchange")
        }, i * 1000);
        setTimeout(function () {
            checkbox.prop('checked', false).trigger("onchange");
        }, i * 1000 + 995);
    });
    setTimeout(function () {
        $('#' + name + 'All').prop('checked', true).trigger("onchange");
    }, $('input[type="checkbox"][name="' + name + '"]').length * 1000);
}