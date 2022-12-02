function d3ScatterPlot() {
	console.log("d3 scatter plot!");
	scatter = {
		'Henry Street School for International Studies': [40.0, 56.3], 'University Neighborhood High School': [67.3, 70.7], 'East Side Community School': [55.7, 71.6], 'Marta Valle High School': [47.9, 56.4], 'New Explorations into Science, Technology and Math High School': [82.8, 95.3], 'Bard High School Early College': [96.8, 97.6], '"47" The American Sign Language and English Secondary School': [30.4, 69.6], 'Food and Finance High School': [59.6, 82.0], 'Essex Street Academy': [61.3, 67.5], 'High School of Hospitality Management': [42.7, 79.3], 'PACE High School': [78.7, 91.5], 'The Urban Assembly School of Design and Construction': [46.5, 66.3], 'The Facing History School': [43.4, 55.3], 'The Urban Assembly Academy of Government and Law': [64.4, 67.8], 'Lower Manhattan Arts Academy': [58.7, 76.2], 'The Urban Assembly School of Business for Young Women': [63.9, 80.3], 'Gramercy Arts High School': [47.9, 77.8], 'High School for Environmental Studies': [81.2, 83.2], 'Institute for Collaborative Education': [57.4, 83.3], 'Professional Performing Arts High School': [68.3, 93.1], 'Baruch College Campus High School': [90.6, 100.0], 'NYC Lab School for Collaborative Studies': [88.3, 96.4], 'School of the Future High School': [63.2, 84.3], 'NYC Museum School': [85.7, 98.0], 'Eleanor Roosevelt High School': [97.4, 100.0], 'Millennium High School': [84.2, 97.3], 'Landmark High School': [43.2, 53.1], 'High School for Health Professions and Human Services': [72.0, 82.4], 'Leadership and Public Service High School': [48.6, 79.1], 'Manhattan Village Academy': [76.7, 97.8], 'Vanguard High School': [55.1, 66.3], 'Manhattan International High School': [49.2, 58.5], 'High School of Economics and Finance': [73.6, 82.9], 'Unity Center for Urban Technologies': [50.0, 65.5], 'Talent Unlimited High School': [82.1, 95.2], 'Murry Bergtraum High School for Business Careers': [42.2, 65.8], 'Jacqueline Kennedy Onassis High School': [39.8, 61.3], 'Repertory Company High School for Theatre Arts': [62.5, 80.0], 'Manhattan Bridges High School': [51.7, 77.6], 'New Design High School': [47.8, 72.2], 'High School for Dual Language and Asian Studies': [94.8, 97.4], 'Urban Assembly New York Harbor School': [54.4, 68.9], 'Richard R. Green High School of Teaching': [40.8, 60.8], 'The High School of Fashion Industries': [64.2, 91.2], 'Chelsea Career and Technical Education High School': [25.3, 59.7], 'Art and Design High School': [50.9, 79.1], 'Life Sciences Secondary School': [46.4, 75.9], 'High School for Arts, Imagination and Inquiry': [37.2, 59.3], 'The Urban Assembly School for Media Studies': [41.7, 71.9], 'Wadleigh Secondary School for the Performing & Visual Arts': [41.9, 61.3], 'Beacon High School': [88.7, 98.6], 'High School for Law, Advocacy and Community Justice': [53.1, 74.5], 'High School of Arts and Technology': [40.8, 71.8], 'Manhattan/Hunter Science High School': [82.1, 87.5], 'Frederick Douglass Academy II Secondary School': [52.4, 68.3], 'Coalition School for Social Change': [32.7, 51.4], 'Manhattan Center for Science and Mathematics': [74.2, 92.0], 'Park East High School': [47.0, 73.5], 'Central Park East High School': [58.1, 80.6], "Young Women's Leadership School": [82.8, 98.4], 'The Heritage School': [28.6, 62.3], 'Mott Hall High School': [58.7, 72.8], 'Academy for Social Action: A College Board School': [71.2, 86.5], 'The Urban Assembly School for the Performing Arts': [57.1, 70.0], 'Frederick Douglass Academy': [73.0, 91.7], 'Thurgood Marshall Academy for Learning and Social Change': [65.3, 78.9], 'The College Academy': [42.9, 67.6], 'High School for Media and Communications': [37.3, 60.7], 'High School for Law and Public Service': [52.8, 73.3], 'High School for Health Careers and Sciences': [40.8, 60.9], 'A. Philip Randolph Campus High School': [63.4, 82.6], 'Gregorio Luperon High School for Science and Mathematics': [51.7, 68.5], 'South Bronx Preparatory: A College Board School': [63.2, 91.2], 'International Community High School': [41.0, 59.0], 'Community School for Social Justice': [60.3, 73.1], 'Mott Haven Village Preparatory High School': [39.3, 58.3], 'University Heights Secondary School': [70.6, 89.9], 'Hostos-Lincoln Academy of Science': [73.6, 90.8], 'Foreign Language Academy of Global Studies': [57.3, 57.3], 'Bronx Leadership Academy II High School': [37.3, 57.3], 'New Explorers High School': [19.5, 50.0], 'Urban Assembly School for Careers in Sports': [54.9, 86.6], 'The Urban Assembly Bronx Academy of Letters': [66.3, 83.1], 'Alfred E. Smith Career and Technical Education High School': [14.6, 53.7], 'Health Opportunities High School': [63.2, 74.2], "Women's Academy of Excellence": [74.2, 86.4], 'Renaissance High School for Musical Theater & Technology': [39.4, 71.7], 'Pablo Neruda Academy ': [37.6, 51.4], 'Millennium Art Academy': [27.8, 71.3], 'Holcombe L. Rucker School of Community Research': [37.0, 59.0], 'Herbert H. Lehman High School': [33.8, 50.6], 'Bronx Guild': [39.5, 69.8], 'The Felisa Rincon de Gautier Institute for Law and Public Policy': [34.6, 63.0], 'Banana Kelly High School': [32.3, 55.6], 'Bronx Collegiate Academy': [37.4, 47.3], 'Eagle Academy for Young Men': [52.6, 71.6], 'The Urban Assembly School for Applied Math and Science': [86.1, 95.8], 'Eximius College Preparatory Academy: A College Board School': [50.0, 74.1], 'Mott Hall Bronx High School': [67.6, 83.3], 'Bronx Center for Science and Mathematics': [66.3, 84.7], 'Validus Preparatory Academy: An Expeditionary Learning School': [40.2, 65.7], 'Leadership Institute': [39.1, 57.5], 'Morris Academy for Collaborative Studies': [29.5, 68.6], 'DreamYard Preparatory School': [34.4, 48.9], 'Academy for Language and Technology': [31.1, 81.1], 'Bronx International High School': [41.0, 59.0], 'School for Excellence': [29.4, 63.5], 'Bronx High School of Business': [30.3, 50.8], 'Bronx High School for Medical Science': [56.5, 78.3], 'Bronx School for Law, Government and Justice': [61.6, 70.7], 'Frederick Douglass Academy III Secondary School': [52.2, 80.0], 'Bronx Leadership Academy High School': [41.9, 67.1], 'High School for Violin and Dance': [33.3, 76.5], 'Riverdale/Kingsbridge Academy (MS/HS 141)': [82.0, 87.0], 'Bronx Engineering and Technology Academy': [45.7, 69.0], 'Theatre Arts Production Company School': [77.6, 82], 'The Marie Curie School for Medicine, Nursing, and Health Professions': [39.7, 64.1], 'West Bronx Academy for the Future': [45.7, 58.6], 'Kingsbridge International High School': [31.1, 59.3], 'Bronx School of Law and Finance': [43.9, 69.4], 'International School for Liberal Arts': [34.0, 64.0], 'IN-Tech Academy (MS/HS 368)': [59.3, 77.1], 'Knowledge and Power Preparatory Academy International High School': [78.9, 93.9], 'High School for Teaching and the Professions': [52.9, 70.2], 'Belmont Preparatory High School': [46.6, 72.6], 'Fordham High School for the Arts': [31.9, 85.5], 'Fordham Leadership Academy for Business and Technology': [37.8, 45.7], 'Bronx High School for Law and Community Service': [30.2, 53.1], 'DeWitt Clinton High School': [40.3, 57.1], 'The Celia Cruz Bronx High School of Music': [62.4, 78.8], 'Marble Hill High School for International Studies': [63.2, 81.1], 'Bronx Theatre High School': [41.0, 59.0], 'Discovery High School': [44.8, 62.2], 'Bronx High School for Writing and Communication Arts': [33.3, 61.5], 'Bronx Lab School': [41.8, 69.2], 'Academy for Scholarship and Entrepreneurship: A College Board School': [40.5, 57.5], 'High School of Computers and Technology': [51.9, 76.2], 'Collegiate Institute for Math and Science': [61.2, 80.6], 'Bronx Academy of Health Careers': [61.5, 70.9], 'Astor Collegiate Academy': [41.4, 65.5], 'Bronx High School for the Visual Arts': [37.3, 64.4], 'Harry S Truman High School': [32.1, 62.1], 'New World High School': [50.0, 54.5], 'The Bronxwood Preparatory Academy': [28.1, 46.4], 'Pelham Preparatory Academy': [83.2, 92.5], 'High School for Contemporary Arts': [49.1, 74.5], 'Bronx Aerospace High School': [55.7, 60], 'The Metropolitan High School': [53.2, 70.0], 'Explorations Academy': [41.7, 69.2], 'Bronx Latin': [70.0, 77.5], 'East Bronx Academy for the Future': [42.0, 75.0], 'Peace and Diversity Academy': [21.4, 51.4], 'Fannie Lou Hamer Freedom High School': [30.9, 58.8], 'Wings Academy': [28.8, 57.6], 'Monroe Academy for Visual Arts & Design': [25.2, 47.7], 'Dr. Susan S. McKinney Secondary School of the Arts': [50.7, 79.5], 'The Urban Assembly School of Music and Art': [60.0, 60.0], 'Brooklyn Community High School of Communication, Arts and Media': [46.2, 66.3], 'Science Skills Center High School for Science, Technology and the Creative Arts': [56.5, 80.2], 'Brooklyn International High School': [54.3, 87.2], 'The Urban Assembly School for Law and Justice': [83.0, 86.4], 'ACORN Community High School': [39.3, 67.1], 'Bedford Academy High School': [75.6, 96.7], 'George Westinghouse Career and Technical Education High School': [46.6, 63.3], 'Benjamin Banneker Academy': [72.2, 92.6], 'Juan Morel Campos Secondary School': [35.9, 45.6], 'Foundations Academy': [25.0, 25], 'Green School: An Academy for Environmental Careers': [41.9, 59.3], 'PROGRESS High School for Professional Careers': [39.9, 62.9], 'School for Legal Studies': [52.4, 67.1], 'The High School for Enterprise, Business and Technology': [54.4, 84.7], 'Brooklyn Preparatory High School': [61.7, 79.0], 'Williamsburg High School for Architecture and Design': [48.0, 88.2], 'Williamsburg Preparatory School': [73.0, 91.0], 'Lyons Community School': [46.2, 61.5], 'Automotive High School': [26.4, 53.6], 'El Puente Academy for Peace and Justice': [35.6, 68.9], 'Brooklyn School for Global Studies': [49.3, 61.3], 'Brooklyn Secondary School for Collaborative Studies': [76.6, 90.9], 'Secondary School for Law': [47.1, 75.0], 'Secondary School for Journalism': [45.8, 61.4], 'Park Slope Collegiate': [43.5, 60.0], 'School for International Studies': [50.0, 52], 'Cobble Hill School of American Studies': [31.8, 57.4],
		'Brooklyn High School of the Arts': [62.5, 88.5], 'Frederick Douglass Academy IV Secondary School': [31.8, 65.2], 'Boys and Girls High School': [21.2, 45.7], 'Brooklyn High School for Law and Technology': [41.2, 77.3], 'Gotham Professional Arts Academy': [33.3, 55.0], 'Academy for College Preparation and Career Exploration: A College Board School': [40.7, 61.7], 'Academy of Hospitality and Tourism': [53.9, 72.4], 'International High School at Prospect Heights': [43.2, 61.6], 'The High School for Global Citizenship': [31.7, 53.3], 'The School for Human Rights': [36.0, 78.7], 'School for Democracy and Leadership': [41.5, 64.6], 'High School for Youth and Community Development at Erasmus': [32.2, 58.7], 'High School for Service & Learning at Erasmus': [43.5, 74.8], 'Science, Technology and Research Early College High School at Erasmus': [84.3, 94.3], 'High School for Public Service: Heroes of Tomorrow': [82.2, 96.0], 'Brooklyn Academy of Science and the Environment': [46.9, 70.3], 'Brooklyn School for Music & Theatre': [36.4, 70.5], 'Medgar Evers College Preparatory School': [75.6, 97.5], 'Clara Barton High School': [55.3, 66.2], 'It Takes a Village Academy': [87.9, 90.7], 'Brooklyn Generation School': [34.6, 55.1], 'Brooklyn Theatre Arts High School': [39.7, 73.8], 'Kurt Hahn Expeditionary Learning School': [52.8, 66.3], 'Victory Collegiate High School': [43.0, 81.0], 'Arts & Media Preparatory Academy': [40.0, 78.2], 'Academy for Young Writers': [59.2, 85.5], 'East New York Family Academy': [52.2, 86.6], 'FDNY High School for Fire and Life Safety': [8.9, 11], 'High School for Civil Rights': [29.3, 71.5], 'Performing Arts and Technology High School': [38.1, 62.9], 'World Academy for Total Community Health High School': [42.9, 66.3], 'Multicultural High School': [22.6, 51.9], 'Transit Tech Career and Technical Education High School': [48.5, 85.2], 'Cypress Hills Collegiate Preparatory School': [36.3, 53.1], 'W.H. Maxwell Career and Technical Education High School': [25.3, 60.7], 'New Utrecht High School': [56.5, 71.0], 'High School of Telecommunication Arts and Technology': [72.1, 80.0], 'Fort Hamilton High School': [54.9, 70.3], 'Franklin Delano Roosevelt High School': [46.9, 59.1], 'International High School at Lafayette': [47.5, 49.2], 'Rachel Carson High School for Coastal Studies': [55.3, 67.5], 'High School of Sports Management': [58.5, 56.5], 'Abraham Lincoln High School': [48.0, 63.5], 'Edward R. Murrow High School': [72.0, 76.0], 'John Dewey High School': [53.6, 65.9], 'Life Academy High School for Film and Music': [43.2, 78.4], 'Expeditionary Learning School for Community Leaders': [44.1, 41.2], 'William E. Grady Career and Technical Education High School': [33.7, 50.4], 'Brooklyn Studio Secondary School': [59.9, 72.3], 'Midwood High School': [81.7, 86.7], 'James Madison High School': [56.7, 73.3], 'Leon M. Goldstein High School for the Sciences': [88.5, 95.8], 'Brooklyn College Academy': [88.7, 98.7], 'Brooklyn Collegiate: A College Board School': [46.2, 64.2], 'Frederick Douglass Academy VII High School': [41.8, 76.9], 'Teachers Preparatory High School': [39.6, 73.6], 'Academy of Finance and Enterprise': [75.2, 90.6], 'High School of Applied Communication': [52.6, 70.5], 'Pan American International High School': [26.3, 47.5], 'Bard High School Early College Queens': [92.7, 96.4], 'Newtown High School': [39.5, 62.4], 'Grover Cleveland High School': [31.7, 57.8], 'Middle College High School at LaGuardia Community College': [55.4, 78.2], 'International High School at LaGuardia Community College': [56.9, 80.2], 'High School for Arts and Business': [52.4, 79.6], 'Robert F. Wagner, Jr. Secondary School for Arts and Technology': [67.5, 74.6], 'Queens Vocational and Technical High School': [52.6, 76.7], 'Aviation Career & Technical Education High School': [56.5, 87.9], 'Flushing International High School': [42.4, 58.7], 'East-West School of International Studies': [74.7, 84.3], 'World Journalism Preparatory: A College Board School': [81.9, 90.3], 'John Bowne High School': [43.1, 66.0], 'Flushing High School': [37.1, 60.4], 'Townsend Harris High School': [100.0, 100.0], 'Robert F. Kennedy Community High School': [65.3, 74.2], 'Benjamin N. Cardozo High School': [75.5, 85.3], 'Francis Lewis High School': [78.6, 87.5], 'Martin Van Buren High School': [44.5, 64.3], 'Bayside High School': [73.3, 86.2], 'Queens High School of Teaching, Liberal Arts and the Sciences': [69.6, 88.1], 'Frederick Douglass Academy VI High School': [55.2, 69.5], 'Channel View School for Research': [72.3, 90.1], "Scholars' Academy": [97.0, 100.0], 'August Martin High School': [29.7, 67.0], 'Richmond Hill High School': [35.4, 58.6], 'John Adams High School': [39.4, 64.1], 'High School for Construction Trades, Engineering and Architecture': [82.1, 97.9], 'Forest Hills High School': [66.2, 84.4], 'Hillcrest High School': [54.5, 75.6], 'Thomas A. Edison Career and Technical Education High School': [69.4, 87.7], 'Queens Gateway to Health Sciences Secondary School': [89.8, 99.0], 'High School for Law Enforcement and Public Safety': [54.6, 78.5], "The Young Women's Leadership School, Queens": [80.7, 94.7], 'Queens Preparatory Academy': [43.2, 67.4], 'Pathways College Preparatory School: A College Board School': [59.0, 80.3], 'Excelsior Preparatory High School': [41.7, 67.8], 'George Washington Carver High School for the Sciences': [42.0, 81.3], 'Preparatory Academy for Writers: A College Board School': [40.7, 68.4], 'Mathematics, Science Research and Technology Magnet High School': [56.3, 74.6], 'Humanities & Arts Magnet High School': [47.7, 76.1], 'William Cullen Bryant High School': [43.2, 56.5], 'Long Island City High School': [42.9, 65.7], 'Frank Sinatra School of the Arts High School': [87.6, 93.4], 'Information Technology High School': [52.0, 72.6], 'Newcomers High School': [44.4, 72.6], 'Academy of American Studies': [85.2, 89.0], 'Baccalaureate School for Global Education': [92.2, 100.0], 'CSI High School for International Studies': [82.4, 94.1], 'The Michael J. Petrides School': [67.7, 86.6], 'New Dorp High School': [52.8, 75.6], 'Port Richmond High School': [47.5, 63.9], 'Curtis High School': [47.7, 69.8], 'Tottenville High School': [65.2, 83.5], 'Susan E. Wagner High School': [74.0, 81.2], 'Ralph R. McKee Career and Technical Education High School': [46.1, 63.0], 'Academy for Environmental Leadership': [34.0, 72.8], 'EBC High School for Public Service - Bushwick': [47.0, 60.1], 'Bushwick School for Social Justice': [32.7, 68.3], 'Academy of Urban Planning': [30.9, 63.4], 'All City Leadership Secondary School': [77.1, 100.0], 'Bushwick Leaders High School for Academic Excellence': [25.2, 48.9], 'Fiorello H. LaGuardia High School of Music & Art and Performing Arts': [93.3, 98.2], 'Staten Island Technical High School': [90.0, 100.0], 'Stuyvesant High School': [98.7, 98.5], 'High School for Mathematics, Science and Engineering at City College': [60.4, 98.2], 'High School of American Studies at Lehman College': [98.8, 100.0], 'Brooklyn Technical High School': [94.8, 97.7], 'Bronx High School of Science': [99.9, 100.0], 'The Brooklyn Latin School': [85.7, 91.4], 'Queens High School for the Sciences at York College': [100.0, 100.0]
	}








	 d3.json("/get_scatterplot_data", function(data) {
        console.log(scatter);
        dummyData = {"Henry Street School for International Studies": [40, 45], "University Neighborhood High School": [77, 78], 
		"Marta Valle High School": [99, 100]};
		// console.log(d3.entries(dummyData));
  		//       console.log(dummyData);
        //var dictKeys = Object.values(dummyData).map()
        var keysArray = Object.keys(scatter);
        //console.log(keysArray);
        var dictVal = Object.keys(scatter).map(key => scatter[key]);
        //console.log(dictVal);
        dictVal.forEach((item, i) => {
        	item.id = i;
        })
        //console.log(dictVal);
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
	      .style("fill", "pink")
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
                //console.log(d_brushed);
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