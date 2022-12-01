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

                // Add the tooltip container to the vis container
                // it's invisible and its position/contents are defined during mouseover
                var tooltip = d3.select("#map-container").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

                // tooltip mouseover event handler
                var tipMouseover = function(d) {
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
                };

                // tooltip mouseout event handler
                var tipMouseout = function(d) {
                    //this.classList.remove("circle-hover"); // remove hover class

                    tooltip.transition()
                        .duration(300) // ms
                        .style("opacity", 0); // don't care about position!
                };

                svg.selectAll("circle")
                    .data(data)
                  .enter().append("circle")
                    .attr("fill", function(d) { return "pink"; })
                    .attr("cx", function(d) { return projection([+d.longitude, +d.latitude])[0]; })
                    .attr("cy", function(d) { return projection([+d.longitude, +d.latitude])[1]; })
                    .attr("r",  function(d) { return 2.5; })
                    .on("mouseover", tipMouseover)
                    .on("mouseout", tipMouseout);

                //addLegend(colorScale);
            };

    // d3.json("/get_geo_map", function(data) {
    // 	console.log(data);
    // });

}