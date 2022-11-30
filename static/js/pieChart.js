function d3PieChart(dataset){
    console.log(dataset);
    pie_data = {};
    data_2 = [];

    d3.json("/get_piechart_data", function(p) {
        pie_data = p;
        console.log(pie_data);
        var dictVal = Object.keys(pie_data).map(key => pie_data[key]);
        console.log(dictVal);

        const margin = {top:20, right:20, bottom:20, left:20};
        const width = 350 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom,
        outerRadius = Math.min(width, height) / 2, 
        innerRadius = outerRadius * .5,
        color = d3.scaleOrdinal(d3.schemeAccent); //color scheme

        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#pieChart")
          .append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        const arcGenerator = d3
          .arc()
          .innerRadius(0)
          .outerRadius(outerRadius);

        const pieGenerator = d3
          .pie()
          .padAngle(0)
          .value((d) => d.value);

        const arc = svg
          .selectAll()
          .data(pieGenerator(d3.entries(pie_data)))
          .enter();

        arc
          .append('path')
          .attr('d', arcGenerator)
          .style('fill', function(d){ return(color(d.data.key)) })
          .style('stroke', '#ffffff')
          .style('stroke-width', 1);

        arc
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .text(function(d){ return d.data.key})
          .style('fill', (_, i) => color(5))
          .attr('transform', (d) => {
            const [x, y] = arcGenerator.centroid(d);
            return `translate(${x}, ${y})`;})

        //THIS CODE WORKS --> 
        // // set the dimensions and margins of the graph
        // var width = 450
        //     height = 450
        //     margin = 40

        // // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        // var radius = Math.min(width, height) / 2 - margin

        // // append the svg object to the div called 'my_dataviz'
        // var svg = d3.select("#pieChart")
        //   .append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        //   .append("g")
        //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // // Create dummy data
        // var data = {a: 9, b: 20, c:30, d:8, e:12}

        // // set the color scale
        // var color = d3.scaleOrdinal()
        //   .domain(data)
        //   .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

        // // Compute the position of each group on the pie:
        // var pie = d3.pie()
        //   .value(function(d) {return d.value; })
        // var data_ready = pie(d3.entries(pie_data))

        // // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        // svg
        //   .selectAll('whatever')
        //   .data(data_ready)
        //   .enter()
        //   .append('path')
        //   .attr('d', d3.arc()
        //     .innerRadius(0)
        //     .outerRadius(radius)
        //   )
        //   .attr('fill', function(d){ return(color(d.data.key)) })
        //   .attr("stroke", "black")
        //   .style("stroke-width", "2px")
        //   .style("opacity", 0.7)
        
    });
    

    //Function to update barchart when a piechart slice is clicked
    function click(d, i) {
        console.log("clicked!");
        //updateBarChart(d.data.category, color(i), datasetBarChart);
     }
}