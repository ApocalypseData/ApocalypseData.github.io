var RadarChart = {
  draw: function(id, d, options){
    var initialData = d;
    var cfg = {
     radius: 0,
     w: 500,
     h: 500,
     factor: 1,
     factorLegend: .9,
     levels: 3,
     maxValue: 0,
     radians: 2 * Math.PI,
     opacityArea: 0.3,
     ToRight: 5,
     TranslateX: 200,
     TranslateY: 50,
     ExtraWidthX: 100,
     ExtraWidthY: 100,
     color: d3.scaleOrdinal().range(["#D15C33","#D15C33","#D15C33","#D15C33","#D15C33","#D15C33"])//更改颜色
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
      .style("font-size", "14px")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("transform", function(d, i){return "translate(0, -10)"})
      .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
      .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});


    d.forEach(function(y, x){
      dataValues = [];
      g.selectAll(".nodes")
      .data(y, function(j, i){

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
             .style("stroke-width", "0.5px")
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
                       .style("fill-opacity", 0.7);
                      })
             .on('mouseon', function (d){
                      z = "polygon."+d3.select(this).attr("class");
                      g.selectAll("polygon")
                       .style("fill-opacity", 0.1);
                      g.selectAll(z)
                       .style("fill-opacity", 0.7);
                      })
             .on('mouseout', function(){
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", cfg.opacityArea);
             });
      series++;
    });
    series=0;


//………………………………………………………………………………………………………………………………………………scroll

$(function() {
  $(".radar-chart-serie5").hide();
  $(".radar-chart-serie4").hide();
  $(".radar-chart-serie3").hide();
  $(".radar-chart-serie2").hide();
  $(".radar-chart-serie1").hide();
  $(".radar-chart-serie0").hide();
  $("#data2007").hide();
  $("#data2009").hide();
  $("#data2011").hide();
  $("#data2013").hide();
  $("#data2015").hide();
  $("#data2017").hide();

  var controller = new ScrollMagic.Controller();
  //这是必要的controller控制器

  var blockTween = new TweenMax.to('#chart', 1.5, {

  });
  //TweenMax.to是指将要成为什么效果，1.5指变化过程所需时间



  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#chart',

    })

  .on("enter",function(){
      $("#data2007").fadeIn(1000);
      $(".radar-chart-serie5").fadeIn(1000);
      // $("#data2007").delay(3000).removeClass("selected");

      $("#data2009").delay(1000).fadeIn(1000);
      $(".radar-chart-serie4").delay(1000).fadeIn(1000);

      $("#data2011").delay(2000).fadeIn(1000);
      $(".radar-chart-serie3").delay(2000).fadeIn(1000);

      $("#data2013").delay(3000).fadeIn(1000);
      $(".radar-chart-serie2").delay(3000).fadeIn(1000);

      $("#data2015").delay(4000).fadeIn(1000);
      $(".radar-chart-serie1").delay(4000).fadeIn(1000);

      $("#data2017").delay(5000).fadeIn(1000);
      $(".radar-chart-serie0").delay(5000).fadeIn(1000);


  })
  //触发器为#container的位置
    .setTween(blockTween)
  //连接上将要成为的效果

    .addTo(controller);
});
  //连接上控制器


//………………………………………………………………………………………………………………………………………………点击跳跃

d3.select("#data2007")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2009").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.6");
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.2");
            });
// $("#data2007").click(function(){
//   $(".radar-chart-serie1").css("opacity", "1");
// })
d3.select("#data2009")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2007").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.6");
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.2");
            });
d3.select("#data2011")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2007").classed("selected", false);
                d3.select("#data2009").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.7");
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.2");
            });

d3.select("#data2013")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2007").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2009").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.7");
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.2");
            });

d3.select("#data2015")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2007").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2009").classed("selected", false);
                d3.select("#data2017").classed("selected", false);
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.7");
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.2");
            });

d3.select("#data2017")
            .on("click", function(d,i) {

                d3.select(this).classed("selected", true);
                d3.select("#data2007").classed("selected", false);
                d3.select("#data2011").classed("selected", false);
                d3.select("#data2013").classed("selected", false);
                d3.select("#data2015").classed("selected", false);
                d3.select("#data2009").classed("selected", false);
                d3.select(".radar-chart-serie0").transition(200).style("fill-opacity", "0.7");
                d3.select(".radar-chart-serie5").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie3").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie2").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie1").transition(200).style("fill-opacity", "0.2");
                d3.select(".radar-chart-serie4").transition(200).style("fill-opacity", "0.2");
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
      .style("fill","white")
      .style("stroke", "transparent")
      .style("stroke-width", "15px")

    .on('mouseover', function (d){
      var html = '<div>';
      	for(var i = 0; i<initialData.length; i++){
          var propertyData = initialData[i];
          for(var j = 0; j<propertyData.length; j++){
            var grade = propertyData[j];
            if (grade.area == d){

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

        .on("mouseout", function(d){ tooltip.style("display", "none");});

    }
};
