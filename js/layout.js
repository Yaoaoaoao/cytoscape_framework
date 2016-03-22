var layoutObj =  {
    name: 'arbor',
    padding: 5
};

// var layoutObj =  {
//     name: 'springy',
//     fit: true,
//     maxSimulationTime: 4000,
//     stiffness: 100,
//     repulsion: 500,
//     damping: 0.4
// };

//the concentric layout
//var layoutObj = {
//    name: 'concentric',
//        //fit: eleObj.nodes.length>30 ? true : false,
//        startAngle: 3/2 * Math.PI,
//    minNodeSpacing: 30,
//    concentric: function(){
//    // returns numeric value for each node, placing higher nodes in levels towards the centre// return this.degree();
//    if (this.data().Layout == undefined)
//        return 0;
//    else
//        return parseInt(this.data().Layout);
//},
//    levelWidth: function(nodes){
//        // the variation of concentric values in each level
//        return nodes.maxDegree() / 4;
//    }
//};