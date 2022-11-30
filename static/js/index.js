const urls = [pieChartDataUrl];

Promise.all(urls.map(url => d3.json(url))).then(run);

function run(dataset) {
    console.log("hit index");
    console.log("index.js dataset");
    console.log(dataset);
    d3PieChart(dataset[0]);
    d3ScatterPlot();
};