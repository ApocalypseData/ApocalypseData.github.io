$( function() {
   $( "#slider" ).slider({
     // orientation: "vertical",
     range: "min",
     min: 2007,
     max: 2017,
     value: 2007,
     step:2,
     change:filter,
     slide: function( event, ui ) {
       $( "#amount" ).val( ui.value );
     }
   });
   $( "#amount" ).val( $( "#slider" ).slider( "value" ) );



 } );

 // if (slider == 2007 ){$("#map2017").css("display","none");}
    $(".imgmapchart").css("opacity",0);
    $("#mapBase").css("opacity",1);
    $("#map2007").css("opacity",1);


    $("#bar2007").css("opacity",1);

 function filter(){
   var slidervalue = $( "#slider" ).slider( "value" );
   console.log(slidervalue);



    var mapNo = "#map"+slidervalue;
    if(slidervalue == 2007){
      $("#map2007").fadeTo(500,1);
      $("#map2009").fadeTo(500,0);
      $("#map2011").fadeTo(500,0);
      $("#map2013").fadeTo(500,0);
      $("#map2015").fadeTo(500,0);
      $("#map2017").fadeTo(500,0);
    }

    if(slidervalue == 2009){
      $("#map2009").fadeTo(500,1);
      $("#map2007").fadeTo(500,0);
      $("#map2011").fadeTo(500,0);
      $("#map2013").fadeTo(500,0);
      $("#map2015").fadeTo(500,0);
      $("#map2017").fadeTo(500,0);
    }

    if(slidervalue == 2011){
      $("#map2011").fadeTo(500,1);
      $("#map2007").fadeTo(500,0);
      $("#map2009").fadeTo(500,0);
      $("#map2013").fadeTo(500,0);
      $("#map2015").fadeTo(500,0);
      $("#map2017").fadeTo(500,0);
    }

    if(slidervalue == 2013){
      $("#map2013").fadeTo(500,1);
      $("#map2007").fadeTo(500,0);
      $("#map2009").fadeTo(500,0);
      $("#map2011").fadeTo(500,0);
      $("#map2015").fadeTo(500,0);
      $("#map2017").fadeTo(500,0);
    }

    if(slidervalue == 2015){
      $("#map2015").fadeTo(500,1);
      $("#map2007").fadeTo(500,0);
      $("#map2009").fadeTo(500,0);
      $("#map2011").fadeTo(500,0);
      $("#map2013").fadeTo(500,0);
      $("#map2017").fadeTo(500,0);
    }

    if(slidervalue == 2017){
      $("#map2017").fadeTo(500,1);
      $("#map2007").fadeTo(500,0);
      $("#map2009").fadeTo(500,0);
      $("#map2011").fadeTo(500,0);
      $("#map2013").fadeTo(500,0);
      $("#map2015").fadeTo(500,0);
    };

    // $(barNo).fadeTo(500,1);
    // $(".imgbarchart").fadeTo(500,0);

    // bar制图…………………………………………………………………………………………………………………………………………


    // $("#barBase").css("opacity",1);
    // $("#bar2007").css("opacity",1);

 // function filter(){
 //   var slidervalue = $( "#slider" ).slider( "value" );




    var barNo = "#bar"+slidervalue;

    console.log(barNo);

    if(slidervalue == 2007){
      $("#bar2007").fadeTo(500,1);
      $("#bar2009").fadeTo(500,0);
      $("#bar2011").fadeTo(500,0);
      $("#bar2013").fadeTo(500,0);
      $("#bar2015").fadeTo(500,0);
      $("#bar2017").fadeTo(500,0);
    }

    if(slidervalue == 2009){
      $("#bar2009").fadeTo(500,1);
      $("#bar2007").fadeTo(500,0);
      $("#bar2011").fadeTo(500,0);
      $("#bar2013").fadeTo(500,0);
      $("#bar2015").fadeTo(500,0);
      $("#bar2017").fadeTo(500,0);
    }

    if(slidervalue == 2011){
      $("#bar2011").fadeTo(500,1);
      $("#bar2007").fadeTo(500,0);
      $("#bar2009").fadeTo(500,0);
      $("#bar2013").fadeTo(500,0);
      $("#bar2015").fadeTo(500,0);
      $("#bar2017").fadeTo(500,0);
    }

    if(slidervalue == 2013){
      $("#bar2013").fadeTo(500,1);
      $("#bar2007").fadeTo(500,0);
      $("#bar2009").fadeTo(500,0);
      $("#bar2011").fadeTo(500,0);
      $("#bar2015").fadeTo(500,0);
      $("#bar2017").fadeTo(500,0);
    }

    if(slidervalue == 2015){
      $("#bar2015").fadeTo(500,1);
      $("#bar2007").fadeTo(500,0);
      $("#bar2009").fadeTo(500,0);
      $("#bar2011").fadeTo(500,0);
      $("#bar2013").fadeTo(500,0);
      $("#bar2017").fadeTo(500,0);
    }

    if(slidervalue == 2017){
      $("#bar2017").fadeTo(500,1);
      $("#bar2007").fadeTo(500,0);
      $("#bar2009").fadeTo(500,0);
      $("#bar2011").fadeTo(500,0);
      $("#bar2013").fadeTo(500,0);
      $("#bar2015").fadeTo(500,0);
    }
 }
