var RadarChart = {
  draw: function(id, d, options){
    var initialData = d;
    var cfg = {
     radius: 0,
     w: 600,
     h: 600,
     factor: 1,
     factorLegend: .85,
     levels: 3,
     maxValue: 0,
     radians: 2 * Math.PI,
     opacityArea: 0.3,
     ToRight: 5,
     TranslateX: 250,
     TranslateY: 50,
     ExtraWidthX: 100,
     ExtraWidthY: 100,
     color: d3.scaleOrdinal().range(["#f4ebdf","#e2d6c3","#f0cb80","#d15c33","#a30f09","#640607"])//更改颜色
    };

    if('undefined' !== typeof options){
      for(var i in options){
      if('undefined' !== typeof options[i]){
        cfg[i] = options[i];
      }
      }
    }

    cfg.maxValue = 100;
    //y轴range

    var allAxis = (d[0].map(function(i, j){return i.area}));
    var total = allAxis.length;
    var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
    var Format = d3.format('%');
    d3.select(id).select("svg").remove();



    var g = d3.select(id)
        .append("svg")
        .attr("width", cfg.w+cfg.ExtraWidthX)
        .attr("height", cfg.h+cfg.ExtraWidthY)
        .append("g")
        .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");

    // d3.select("svg")
    // .call(d3.zoom()
    //     .scaleExtent([1, 8])
    //     .on("zoom", zoom));

// function zoom() {
//   g.attr("transform", d3.event.transform);
// }

    var tooltip;

    series = 0;

    var axis = g.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");

    axis.append("line")
      .attr("x1", cfg.w/2)
      .attr("y1", cfg.h/2)
      .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
      .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
      .attr("class", "line")
      .style("stroke", "grey")
      .style("stroke-width", "1px");


    axis.append("text")
      .attr("class", "legend")
      .text(function(d){return d})
      .style("font-family", "sans-serif")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("transform", function(d, i){return "translate(0, -10)"})
      .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
      .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});


    d.forEach(function(y, x){
      dataValues = [];
      g.selectAll(".nodes")
      .data(y, function(j, i){
        // console.log(j, i);
        var value = (j.value - j.minValue) / (j.maxValue - j.minValue) * 100;
        dataValues.push([
        cfg.w/2*(1-(parseFloat(Math.max(value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
        cfg.h/2*(1-(parseFloat(Math.max(value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
        ]);
      });
      dataValues.push(dataValues[0]);
      g.selectAll(".area")
             .data([dataValues])
             .enter()
             .append("polygon")
             .attr("class", "radar-chart-serie"+series)
             .style("stroke-width", "0.2px")
             .style("stroke", cfg.color(series))
             .style("fill-opacity", "0")
             .attr("points",function(d) {
               var str="";
               for(var pti=0;pti<d.length;pti++){
                 str=str+d[pti][0]+","+d[pti][1]+" ";
               }
               return str;
              })
             .style("fill", function(j, i){return cfg.color(series)})
             .style("fill-opacity", cfg.opacityArea)
             .on('mouseover', function (d){
                      z = "polygon."+d3.select(this).attr("class");
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", 0.1);
                      g.selectAll(z)
                       .transition(200)
                       .style("fill-opacity", 1);
                      })
             .on('mouseon', function (d){
                      z = "polygon."+d3.select(this).attr("class");
                      g.selectAll("polygon")
                       .style("fill-opacity", 0.1);
                      g.selectAll(z)
                       .style("fill-opacity", 1);
                      })
             .on('mouseout', function(){
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", cfg.opacityArea);
             });
      series++;
    });
    series=0;

//………………………………………………………………………………………………………………………………………………点击跳跃

d3.select("#data2007")
            .on("click", function(d,i) {
                console.log(this)
                d3.select(this).classed("selected", true);
                d3.select("#data2009").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "1");

            });
// $("#data2007").click(function(){
//   $(".radar-chart-serie1").css("opacity", "1");
// })
        d3.select("#data2")
            .on("click", function(d,i) {
                d3.select(this).classed("selected", true);
                d3.select("#data1").classed("selected", false);
                redraw(data2);
            });

//………………………………………………………………………………………………………………………………………………点击跳跃

    var axis2 = g.selectAll(".axis2")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis2");

var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    axis2.append("line")
      .attr("x1", cfg.w/2)
      .attr("y1", cfg.h/2)
      .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
      .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
      .attr("class", "line")
      .style("stroke", "transparent")
      .style("stroke-width", "10px")
    .on('mouseover', function (d){
      var html = '<div>';
      	for(var i = 0; i<initialData.length; i++){
          var propertyData = initialData[i];
          for(var j = 0; j<propertyData.length; j++){
            var grade = propertyData[j];
            if (grade.area == d){
              // console.log(grade);
              html += '<div>' + grade.name + grade.area + '的无害化卫生厕所普及率为: ' + grade.value + '%</div>';//tootip文字
            }
          }
        }
      	html += '</div>';
            tooltip
              .style("left", d3.event.pageX - 170 + "px")
              .style("top", d3.event.pageY - 150 + "px")
              .style("display", "inline-block")
              .html(html);
            })
        .on('mouseon', function (d){
      var html = '<div>';
        for(var i = 0; i<initialData.length; i++){
          var propertyData = initialData[i];
          for(var j = 0; j<propertyData.length; j++){
            var grade = propertyData[j];
            if (grade.area == d){
              console.log(grade);
              html += '<div>' + grade.name + grade.area + '的无害化卫生厕所普及率为: ' + grade.value + '%</div>';//tootip文字
            }
          }
        }
        html += '</div>';
            tooltip
              .style("left", d3.event.pageX - 40 + "px")
              .style("top", d3.event.pageY - 80 + "px")
              .style("display", "inline-block")
              .html(html);
            })
        .on("mouseout", function(d){ tooltip.style("display", "none");});

    }
};

var width = 600,
    height = 600;

// Config for the Radar chart
var config = {
    w: width,
    h: height,
    maxValue: 100,
    levels: 5,
    ExtraWidthX: 100
}

//Call function to draw the Radar chart
d3.json("data.json", function(error, data) {
    if (error) throw error;
    RadarChart.draw("#chart", data, config);
});

var svg = d3.select('body')
	.selectAll('svg')
	.append('svg')
	.attr("width", width)
	.attr("height", height);
