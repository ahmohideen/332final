function d3ScatterPlot() {
	console.log("d3 scatter plot!");

	 d3.json("/get_scatterplot_data", function(p) {
        console.log(p);
        dummyData = {"Henry Street School for International Studies": [40, 45], "University Neighborhood High School": [77, 78], 
		"Marta Valle High School": [99, 100]};
        console.log(dummyData);
        var dictVal = Object.keys(dummyData).map(key => dummyData[key]);
        console.log(dictVal);


		// set the dimensions and margins of the graph
		var margin = {top: 10, right: 30, bottom: 30, left: 60},
		    width = 460 - margin.left - margin.right,
		    height = 400 - margin.top - margin.bottom;

		// append the svg object to the body of the page
		var svg = d3.select("#scatterPlot")
		  .append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform",
		          "translate(" + margin.left + "," + margin.top + ")");

	  

	  // Add X axis
	  var x = d3.scaleLinear()
	    .domain([0, 100])
	    .range([ 0, width ]);
	  svg.append("g")
	    .attr("transform", "translate(0," + height + ")")
	    .call(d3.axisBottom(x));

	  // Add Y axis
	  var y = d3.scaleLinear()
	    .domain([0, 100])
	    .range([ height, 0]);
	  svg.append("g")
	    .call(d3.axisLeft(y));

	  // Add dots
	  var circles = svg.append('g')
	    .selectAll("dot")
	    .data(dictVal)
	    .enter()
	    .append("circle")
	      .attr("cx", function (d) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
	      .attr("r", 4)
	      .style("fill", "#69b3a2")
	      .attr("class", "non_brushed");
	  // Add brushing
	  svg
	    .call( d3.brush()                 // Add the brush feature using the d3.brush function
	      .extent( [ [0,0], [width,height] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
	      .on("start brush", updateChart) // Each time the brush selection changes, trigger the 'updateChart' function
	    )

	  // Function that is triggered when brushing is performed
	  function updateChart() {
	    extent = d3.event.selection
	    circles.classed("selected", function(d){ return isBrushed(extent, x(d[0]), y(d[1])) } )
	  }

	  // A function that return TRUE or FALSE according if a dot is in the selection or not
	  function isBrushed(brush_coords, cx, cy) {
	       var x0 = brush_coords[0][0],
	           x1 = brush_coords[1][0],
	           y0 = brush_coords[0][1],
	           y1 = brush_coords[1][1];
	      return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;    // This return TRUE or FALSE depending on if the points is in the selected area
	  }


        
     });
}