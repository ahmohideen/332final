function geoMap() {
	var width = 900,
    height = 600;

    var svg = d3.select("#map-container").append("svg")
        .attr("width", width)
        .attr("height", height);

    var projection = d3.geoMercator() // mercator makes it easy to center on specific lat/long
        .scale(50000)
        .center([-73.94, 40.70]); // long, lat of NYC

    var pathGenerator = d3.geoPath()
        .projection(projection);

    var colorStatScale = function(d) {
    	color = "";
    	if (d >= 90) {
            color = "#0000A0";
    	}
        else if (d >= 75 && d < 90) {
            color = "#736AFF"  
        }
        else if (d >= 65 && d < 75) {
            color = "FFFFFF"  
        }
        else if (d >= 50 && d < 65) {
            color = "#FF0099"   
        }
        else if (d < 50) {
            color = "#FF0000"  
        }
        //console.log(color);
        return color;
    }

    d3.json("static/data/boroughs.geo.json", function(error, boroughs) {
                if (error) return console.error(error);
                //console.log(boroughs);

                svg.selectAll("path")
                    .data(boroughs.features)
                  .enter().append("path")
                    .attr("class", "boroughs")
                    .attr("d", pathGenerator);

                // With map made, load data and add it to the map
                // d3.csv('./nyc-crime-subset.csv', function(error2, crimeData) {
                //     if (error2) return console.error(error2);

                //     addPointsToMap(crimeData);
                // });
                d3.json("/get_geo_map", function(data) {
    				addPointsToMap(data);
    			});

            });

    		var addPointsToMap = function(data) {
                var colorScale  = d3.scaleOrdinal(d3.schemeAccent);

                var radiusScale = d3.scaleSqrt()
                    //.domain(d3.extent(data, function(crime) { return +crime.TOT; }))
                    .domain(314)
                    .range([2, 15]);

                var Tooltip = d3.select("#map-container")
			    .append("div")
			    .style("opacity", 0)
			    .attr("class", "tooltip")
			    .style("background-color", "white")
			    .style("border", "solid")
			    .style("border-width", "2px")
			    .style("border-radius", "5px")
			    .style("padding", "5px")
			    // Three function that change the tooltip when user hover / move / leave a cell
				var mouseover = function(d) {
				    Tooltip
				      .style("opacity", 1)
				    d3.select(this)
				      .style("stroke", "black")
				      .style("opacity", 1)
				  }
				var mousemove = function(d) {
				    Tooltip
				      .html("" + d.name)
				      .style("left", (d3.mouse(this)[0]+10) + "px")
				      .style("top", (d3.mouse(this)[1]) + "px")
				  }
				var mouseleave = function(d) {
				    Tooltip
				      .style("opacity", 0)
				    d3.select(this)
				      .style("stroke", "none")
				      .style("opacity", 0.8)
				  }


				 var keys = ["College Enrollment >= 90%", "75% <= College Enrollment < 90%", "65% <= College Enrollment < 75%", "50% <= College Enrollment < 65%", "College Enrollment < 50%"]

				 var keyColor = function(d) {
				 	color = ""
				 	if(d == "College Enrollment >= 90%") {
				 		color = "#0000A0";
				 	}
				 	if(d == "75% <= College Enrollment < 90%") {
				 		color = "#736AFF";
				 	}
				 	if(d == "65% <= College Enrollment < 75%") {
				 		color = "FFFFFF";
				 	}
				 	if(d == "50% <= College Enrollment < 65%") {
				 		color = "#FF0099";
				 	}
				 	if(d == "College Enrollment < 50%") {
				 		color = "#FF0000"
				 	}
				 	return color;
				 }


                // Add the tooltip container to the vis container
                // it's invisible and its position/contents are defined during mouseover
                // var tooltip = d3.select("#map-container").append("div")
                //     .attr("class", "tooltip")
                //     .style("opacity", 0);

                // // tooltip mouseover event handler
                // var tipMouseover = function(d) {
                    //this.setAttribute("class", "circle-hover"); // add hover class to emphasize

                    // var color = colorScale(d.CR);
                    // var html  = "<span style='color:" + color + ";'>" + d.CR + "</span><br/>" +
                    //             "Count: " + d.TOT + "<br/>Date: " + d.MO + "/" + d.YR;

                    // tooltip.html(html)
                    //     .style("left", (d3.event.pageX + 15) + "px")
                    //     .style("top", (d3.event.pageY - 28) + "px")
                    //   .transition()
                    //     .duration(200) // ms
                    //     .style("opacity", .9) // started as 0!
                //};

                // tooltip mouseout event handler
                // var tipMouseout = function(d) {
                //     //this.classList.remove("circle-hover"); // remove hover class

                //     tooltip.transition()
                //         .duration(300) // ms
                //         .style("opacity", 0); // don't care about position!
                // };

                svg.selectAll("circle")
                    .data(data)
                  .enter().append("circle")
                    .attr("fill", function(d) { return colorStatScale(d.stat); })
                    .attr("cx", function(d) { return projection([+d.longitude, +d.latitude])[0]; })
                    .attr("cy", function(d) { return projection([+d.longitude, +d.latitude])[1]; })
                    .attr("r",  function(d) { return 2.5; })
                    .on("mouseover", mouseover)
				    .on("mousemove", mousemove)
				    .on("mouseleave", mouseleave)
                    // .on("mouseover", tipMouseover)
                    // .on("mouseout", tipMouseout);

                svg.selectAll("mydots")
				  .data(keys)
				  .enter()
				  .append("circle")
				    .attr("cx", 370)
				    .attr("cy", function(d,i){ return 470 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
				    .attr("r", 7)
				    .style("fill", function(d){ return keyColor(d)})
				svg.selectAll("mylabels")
				  .data(keys)
				  .enter()
				  .append("text")
				    .attr("x", 400)
				    .attr("y", function(d,i){ return 470 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
				    .style("fill", function(d){ return keyColor(d)})
				    .text(function(d){ return d})
				    .attr("text-anchor", "left")
				    .style("alignment-baseline", "middle")


                //addLegend(colorScale);
            };

    // d3.json("/get_geo_map", function(data) {
    // 	console.log(data);
    // });

}