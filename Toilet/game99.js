$( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
      $(function() {
		  $("#city99").hide()
		  $("#suburb99").hide()
		  $(".pandingbiaoti").hide()
		  $("#cityessay99").hide()
		  $("#dragsuburb299").hide()
		  $("#suburbessay99").hide();
//          $("#choosecity99").click(function(){
//			  $("#choicepage99").hide();
//			  $("#city99").fadeIn("slow");
//		  });
//		  $("#choosesuburb99").click(function(){
//			  $("#choicepage99").hide();
//			  $("#suburb99").fadeIn("slow");
//			  $("#tuceng-cang99").animate({opacity:"1"});
//		  });
		 
		  var panding99=$("#底图099").attr("src");
		  console.log(panding99);
	  $("#dragstep299").hide();
	  $("#dragstep2-299").hide();
	  $("#dragstep399").hide();
		  
	  $(".icons").draggable({ revert: "invalid",
							  cursor: "pointer"
							});
      $( ".drop99" ).droppable({
          drop: function(event,ui) {
			  var sourceElement99 = $(ui.helper.context);
			  var icons99=sourceElement99.attr("id");
			  
			  
			  if (icons==="step1-瓷砖99"){
            $( "#底图099").attr("src","images/占位图2.jpg");
			$("#dragstep199").hide();
	        $("#dragstep299").show().animate({opacity:"1",zIndex:"1000"});
		   
			  }
			  else if(icons==="step1-水泥99"){
		    $( "#底图099").attr("src","images/占位图3.jpg");
	        $("#dragstep199").hide();
	        $("#dragstep299").show().animate({opacity:"1",zIndex:"1000"});
			$("#step3-母婴台99").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以选择母婴台了哦").css("opacity","0.9");
			$("#step3-一键美化99").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以一键美化了哦");}
			  
			  else if(icons==="step2-便器99"){
				  $("#tuceng2-便器99").animate({opacity:"1"})
				  $("#dragstep299").hide();
	              $("#dragstep2-299").show().animate({opacity:"1",zIndex:"1000"});}
			  
			  else if(icons==="step2-水池99"){
				  $("#tuceng2-水池99").animate({opacity:"1"})
				  $("#dragstep2-299").hide();
				  $("#dragstep399").show().animate({opacity:"1",zIndex:"1000"});
			  }
			  else if(icons==="step3-手纸架99"){
				  $("#tuceng3-手纸架99").animate({opacity:"1"})
				  $("#step3-手纸架99").remove();
			  }
			   else if(icons==="step3-配件99"){
				  $("#tuceng3-配件99").animate({opacity:"1"});
				   $("#step3-配件99").remove();
			  }
			  else if(icons==="step3-空气净化器99"){
				  $("#tuceng3-空气净化器99").animate({opacity:"1"})
				  $("#step3-空气净化器99").remove();
			  }
			  else if(icons==="step3-母婴台99"){
				  $("#tuceng3-母婴台99").animate({opacity:"1"}).css("zIndex","0")
				  $("#step3-母婴台99").remove();
				  
			  }
			  else if(icons==="step3-一键美化99"){
				  $("#tuceng3-一键美化99").animate({opacity:"1"}).css("zIndex","0")
				  $("#tuceng2-水池99").remove();
				  $("#step3-一键美化99").remove();
			  }
		  }
		  
		  
    });
		 $("#tijiao99").click(function(){
			 var muyingtai99=$("#tuceng3-母婴台99").css("opacity");
			 var yijianmeihua99=$("#tuceng3-一键美化99").css("opacity");
			 var sanlei99=$("#step3-母婴台99").css("opacity");
			 var erlei99=muyingtai99+yijianmeihua99;
			 console.log(muyingtai99)
			 console.log(yijianmeihua99)
			 console.log(erlei99)
			 
			 
			 if(sanlei99==0.9){
				  $("#citymain99").remove();
				  $("#sanleicesuo99").show();
				 $("#cityessay99").fadeIn(4000);
				 $("body").css("overflow","scroll");
				 $("#try").remove();
			 }
			 else if(sanlei99!==0.9&&erlei99!=="11"){
				  $("#citymain99").remove();
				  $("#erleicesuo99").show();
				 $("#cityessay99").fadeIn(4000);
				 $("body").css("overflow","scroll");
				 $("#try").remove();
					 }
			  else if(erlei99=="11"){
				  $("#citymain99").remove();
				  $("#yileicesuo99").show();
				  $("#cityessay99").fadeIn(4000);
				  $("body").css("overflow","scroll");
				  $("#try").remove();
					 }

		 });
		  
		    $( ".dropsuburb99" ).droppable({
            drop: function(event,ui) {
				  var sourceElement99 = $(ui.helper.context);
			  var icons99=sourceElement.attr("id");
			  
			  
			  if (icons==="苍蝇拍99"){
              $("#tuceng-cang99").animate({opacity:"0"});
				   $("#苍蝇拍99").remove();
			  }
			else if(icons==="窗户99"){
				$("#tuceng-chuang99").animate({opacity:"1"}).css("zIndex","2");
				   $("#窗户99").remove();
			}
			else if(icons==="瓷砖99"){
				$("#tuceng-ci99").animate({opacity:"1"}).css("zIndex","1");
				   $("#瓷砖99").remove();
				$("#tuceng-shuini99").hide();
			}
			else if(icons==="水泥99"){
				$("#tuceng-shuini99").animate({opacity:"1"}).css("zIndex","1");
				   $("#水泥99").remove();
			}
			else if(icons==="化粪池99"){
				$("#tuceng-hua99").animate({opacity:"1"}).css("zIndex","-1");
				   $("#化粪池99").remove();
			}
				else if(icons==="坑位99"){
				$("#tuceng-keng99").animate({opacity:"1"});
				   $("#坑位99").remove();
			}
				else if(icons==="垃圾桶99"){
				$("#tuceng-la99").animate({opacity:"1"}).css("zIndex","1");
				   $("#垃圾桶99").remove();
			}
				else if(icons==="墙99"){
				$("#suburb底图99").remove();
				$("#tuceng-bai99").animate({opacity:"1"}).css("zIndex","-3");
				$("#tuceng-qiang99").animate({opacity:"1"});
				$("#dragsuburb199").hide();
				$("#dragsuburb299").fadeIn();
			}
				else if(icons==="水池99"){
				$("#tuceng-shui99").animate({opacity:"1"});
				   $("#水池99").remove();
			}
			}
			});
		  
		  $("#tijiao299").click(function(){
			 var a99=$("#tuceng-cang99").css("opacity");
			 var b99=$("#tuceng-chuang99").css("opacity");
			 var c99=$("#tuceng-shui99").css("opacity");
			 var d99=$("#tuceng-hua99").css("opacity");
			 var e99=$("#tuceng-keng99").css("opacity");
			 var f99=$("#tuceng-qiang99").css("opacity");
			 var g99=a99+b99+c99+d99+e99+f99
			 console.log(g99)
			 
			 if(g99=="111111"){
				  $("#suburbmain99").remove();
				 $("#wuhai999").fadeIn();
				  $("#suburbessay99").fadeIn(4000);
				 $("body").css("overflow","scroll");
			     $("#try").remove();
			 }
			 else if(g99!=="111111"){
				  $("#suburbmain99").remove();
				  $("#youhai99").fadeIn();
				  $("#suburbessay99").fadeIn(4000);
				 $("body").css("overflow","scroll");
				  $("#try").remove();
					 }
		  
  });
//		   $(".chongjian").click(function(){
//			   $("#city").load(location.href+" #city").hide();
//		       $("#suburb").hide();
//			   $("#choicepage").fadeIn();
//		  });
		 
		  $(".chongjian").click(function(){
			  window.location.reload();
		  });
		   });
		 
		// JavaScript Document