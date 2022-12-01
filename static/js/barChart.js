function d3BarChart(){
	// create 2 data_set
	//so we need to receive data HERE from the pie chart...

	d3.json("/get_barchart_data", function(data) {
		console.log("at barchart...");
		console.log(data);

		var manhattan = [
		   {group: "Proficient", value: 0},
		   {group: "Developing", value: 0},
		   {group: "Well Developed", value: 0}
		]
		var bronx = [
		   {group: "Proficient", value: 0},
		   {group: "Developing", value: 0},
		   {group: "Well Developed", value: 0}
		]
		var queens= [
		   {group: "Proficient", value: 0},
		   {group: "Developing", value: 0},
		   {group: "Well Developed", value: 0}
		]
		var brooklyn = [
		   {group: "Proficient", value: 0},
		   {group: "Developing", value: 0},
		   {group: "Well Developed", value: 0}
		]
		var staten_island = [
		   {group: "Proficient", value: 0},
		   {group: "Developing", value: 0},
		   {group: "Well Developed", value: 0}
		]
		data["Manhattan"].forEach((item, i) => {
        	manhattan[i].value = item
        })
        data["Bronx"].forEach((item, i) => {
        	bronx[i].value = item
        })
        data["Brooklyn"].forEach((item, i) => {
        	brooklyn[i].value = item
        })
        data["Queens"].forEach((item, i) => {
        	queens[i].value = item
        })
        data["Staten Island"].forEach((item, i) => {
        	staten_island[i].value = item
        })
        //console.log(manhattan);


		// set the dimensions and margins of the graph
		var margin = {top: 30, right: 30, bottom: 70, left: 60},
		    width = 430 - margin.left - margin.right,
		    height = 370 - margin.top - margin.bottom;

		// append the svg object to the body of the page
		var svg = d3.select("#barChart")
		  .append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform",
		          "translate(" + margin.left + "," + margin.top + ")");

		// X axis
		var x = d3.scaleBand()
		  .range([ 0, width ])
		  .domain(["Proficient", "Developing", "Well Developed"])
		  .padding(0.2);
		svg.append("g")
		  .attr("transform", "translate(0," + height + ")")
		  .call(d3.axisBottom(x))

		// Add Y axis
		var y = d3.scaleLinear()
		  .domain([0, 50])
		  .range([ height, 0]);
		svg.append("g")
		  .attr("class", "myYaxis")
		  .call(d3.axisLeft(y));

		var u = svg.selectAll("rect")
			.data(manhattan)
		  u
		    .enter()
		    .append("rect")
		    .merge(u)
		    .transition()
		    .duration(1000)
		      .attr("x", function(d) { return x(d.group); })
		      .attr("y", function(d) { return y(d.value); })
		      .attr("width", x.bandwidth())
		      .attr("height", function(d) { return height - y(d.value); })
		      .attr("fill", "pink")


		  //ughhhhhh

		// A function that create / update the plot for a given variable:
		// function update(data) {

		//   var u = svg.selectAll("rect")
		//     .data(data)

		//   u
		//     .enter()
		//     .append("rect")
		//     .merge(u)
		//     .transition()
		//     .duration(1000)
		//       .attr("x", function(d) { return x(d.group); })
		//       .attr("y", function(d) { return y(d.value); })
		//       .attr("width", x.bandwidth())
		//       .attr("height", function(d) { return height - y(d.value); })
		//       .attr("fill", "pink")
		// }

		// // Initialize the plot with the first dataset
		// update(manhattan)

	});

}