function d3ScatterPlot() {
	console.log("d3 scatter plot!");

	 d3.json("/get_scatterplot_data", function(p) {
        console.log(p);
        dummyData = {"Henry Street School for International Studies": [40, 45], "University Neighborhood High School": [77, 78], 
		"Marta Valle High School": [99, 100]};
		console.log(d3.entries(dummyData));
        console.log(dummyData);
        //var dictKeys = Object.values(dummyData).map()
        var keysArray = Object.keys(dummyData);
        console.log(keysArray);
        var dictVal = Object.keys(dummyData).map(key => dummyData[key]);
        console.log(dictVal);
        dictVal.forEach((item, i) => {
        	item.id = i;
        })
        console.log(dictVal);
        //okay so tmrw just take the array of dict keys
        //and use the id field to map to names inside the table
        //sum like that


		// set the dimensions and margins of the graph
		var margin = {top: 10, right: 30, bottom: 30, left: 60},
		    width = 370 - margin.left - margin.right,
		    height = 330 - margin.top - margin.bottom;

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
	      .extent( [ [0,0], [width+50,height+50] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
	      .on("start brush", updateChart) // Each time the brush selection changes, trigger the 'updateChart' function
	      .on("end", displayTable)
	    )

	     function displayTable() {

                // disregard brushes w/o selections  
                // ref: http://bl.ocks.org/mbostock/6232537
                if (!d3.event.selection) return;

                // programmed clearing of brush after mouse-up
                // ref: https://github.com/d3/d3-brush/issues/10
                //d3.select("#scatterPlot").call(brush.move, null);

                var d_brushed =  d3.selectAll(".selected").data();
                console.log(d_brushed);
                // populate table if one or more elements is brushed
                if (d_brushed.length > 0) {
                    clearTableRows();
                    d_brushed.forEach(d_row => populateTableRow(d_row))
                } else {
                    clearTableRows();
                }
            }

 		function clearTableRows() {

            //hideTableColNames();
            d3.selectAll(".row_data").remove();
        }
        function hideTableColNames() {
            d3.select("table").style("visibility", "hidden");
        }

        function showTableColNames() {
            d3.select("table").style("visibility", "visible");
        }

        function populateTableRow(d_row) {

            showTableColNames();
            
            var d_row_filter = [keysArray[d_row.id], //for now
                               d_row[0], 
                                d_row[1]];

            d3.select("table")
              .append("tr")
              .attr("class", "row_data")
              .selectAll("td")
              .data(d_row_filter)
              .enter()
              .append("td")
              .attr("align", (d, i) => i == 0 ? "left" : "right")
              .text(d => d);
        }



	  // Function that is triggered when brushing is performed
	  function updateChart() {
	    extent = d3.event.selection
	    circles.classed("selected", function(d){ return isBrushed(extent, x(d[0]), y(d[1])) } )
	    clearTableRows();
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