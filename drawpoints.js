d3.csv("points.csv").then(function(data)
{ 
    data.forEach(function(d) {
        d3.select("svg").append("circle")
        .attr("cx", d.x) //Setting x coordinate
        .attr("cy", d.y) //Setting y coordingate
        .attr("r", 20)
        .style("fill", function(){
        //Generates random colors with the hsl format.
        //just ended up choosing 80% and 45% because the colors look nice
        return "hsl(" + Math.random() * 360 + ", 80%, 45%)";
        })
        .style("opacity", 0.7); 
    });
});

