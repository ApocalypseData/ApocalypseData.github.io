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
		   $(".jieshiniu").click(function(){
			  $(".jieshi").hide();
		  });
		  $("#game99").hide();
		  $("#city").hide()
		  $("#suburb").hide()
		  $(".pandingbiaoti").hide()
		  $("#cityessay").hide()
		   $("#dragsuburb1-1").hide()
		  $("#dragsuburb2").hide()
		  $("#suburbessay").hide();

		  $("#city99").hide()
		  $("#suburb99").hide()
		  $(".pandingbiaoti").hide()
		  $("#cityessay99").hide()
		  $("#dragsuburb1-199").hide()
		  $("#dragsuburb299").hide()
		  $("#suburbessay99").hide();

		  $("#choosecity").click(function(){
			  $("#choicepage").hide();
			  $("#city").fadeIn("slow");
		  });
		  $("#choosesuburb").click(function(){
			  $("#choicepage").hide();
			  $("#suburb").fadeIn("slow");
			  $("#tuceng-cang").animate({opacity:"1"});
		  });

		  var panding=$("#底图0").attr("src");

	  $("#dragstep2").hide();
	  $("#dragstep2-2").hide();
	  $("#dragstep3").hide();

	    var panding99=$("#底图099").attr("src");

	  $("#dragstep299").hide();
	  $("#dragstep2-299").hide();
	  $("#dragstep399").hide();
	  $(".icons").draggable({ revert: "invalid",
							  cursor: "pointer",
							  scroll:false
							});
      $( ".drop" ).droppable({
          drop: function(event,ui) {
			  var sourceElement = $(ui.helper.context);
			  var icons=sourceElement.attr("id");

			  if (icons==="step1-瓷砖99"){
            $( "#底图099").attr("src","images/占位图2.jpg");
			$("#tishiC99").hide();
			$("#dragstep199").hide();
	        $("#dragstep299").show().animate({opacity:"1",zIndex:"1000"});

			  }
			  else if(icons==="step1-水泥99"){
		    $( "#底图099").attr("src","images/占位图3.jpg");
		    $("#tuceng3-配件99").attr("src","images/图层3-配件2.png")
	        $("#dragstep199").hide();
			$("#tishiC99").hide();
	        $("#dragstep299").show().animate({opacity:"1",zIndex:"1000"});
			$("#step3-母婴台99").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以选择母婴台了哦").css("opacity","0.45");
			$("#step3-一键美化99").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以一键美化了哦").css("opacity","0.45");}

			  else if(icons==="step2-便器99"){
				  $("#tuceng2-便器99").animate({opacity:"1"})
				  $("#kengweijieshi99").show().animate({opacity:"1",zIndex:"1000"})
				  $("#dragstep299").hide();
	              $("#dragstep2-299").show().animate({opacity:"1",zIndex:"1000"});
			  }

			  else if(icons==="step2-水池99"){
				  $("#tuceng2-水池99").animate({opacity:"1"})
				  $("#dragstep2-299").hide();
				  $("#dragstep399").show().animate({opacity:"1",zIndex:"1000"});
			  }
			  else if(icons==="step3-手纸架99"){
				  $("#tuceng3-手纸架99").animate({opacity:"1"})
				  $("#cezhijieshi99").show().animate({opacity:"1",zIndex:"1000"})
				  $("#step3-手纸架99").remove();
			  }
			   else if(icons==="step3-配件99"){
				  $("#tuceng3-配件99").animate({opacity:"1"});
				   $("#step3-配件99").remove();
			  }
			  else if(icons==="step3-空气净化器99"){
				  $("#tuceng3-空气净化器99").animate({opacity:"1"})
				  $("#step3-空气净化器99").remove();
				  $(".jieshi").fadeOut();
			  }
			  else if(icons==="step3-母婴台99"){
				  $("#tuceng3-母婴台99").animate({opacity:"1"}).css("zIndex","0")
				  $("#muyingtaijieshi99").show().animate({opacity:"1",zIndex:"1000"})
				  $("#step3-母婴台99").remove();


			  }
			  else if(icons==="step3-一键美化99"){
				  $("#tuceng3-一键美化99").animate({opacity:"1"}).css("zIndex","-1")
				  $("#tuceng2-水池99").remove();
				  $("#step3-一键美化99").remove();
			  }

			  else if (icons==="step1-瓷砖"){
            $( "#底图0").attr("src","images/占位图2.jpg");
			$("#tishiC").hide();
			$("#dragstep1").hide();
	        $("#dragstep2").show().animate({opacity:"1",zIndex:"1000"});

			  }
			  else if(icons==="step1-水泥"){
		    $( "#底图0").attr("src","images/占位图3.jpg");
			$("#tishiC").hide();
			$("#tuceng3-配件99").attr("src","images/图层3-配件2.png");
	        $("#dragstep1").hide();
	        $("#dragstep2").show().animate({opacity:"1",zIndex:"1000"});
			$("#step3-母婴台").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以选择母婴台了哦").css("opacity","0.45");
			$("#step3-一键美化").draggable({ disabled: true }).attr("title","第一步选择水泥墙面就不可以一键美化了哦").css("opacity","0.45");}

			  else if(icons==="step2-便器"){
				  $("#tuceng2-便器").animate({opacity:"1"})
				  $("#kengweijieshi").show().animate({opacity:"1",zIndex:"1000"})
				  $("#dragstep2").hide();
	              $("#dragstep2-2").show().animate({opacity:"1",zIndex:"1000"});}

			  else if(icons==="step2-水池"){
				  $("#tuceng2-水池").animate({opacity:"1"})
				  $("#dragstep2-2").hide();
				  $("#dragstep3").show().animate({opacity:"1",zIndex:"1000"});
			  }
			  else if(icons==="step3-手纸架"){
				  $("#tuceng3-手纸架").animate({opacity:"1"})
				    $("#cezhijieshi").show().animate({opacity:"1",zIndex:"1000"})
				  $("#step3-手纸架").remove();
			  }
			   else if(icons==="step3-配件"){
				  $("#tuceng3-配件").animate({opacity:"1"});
				   $("#step3-配件").remove();
			  }
			  else if(icons==="step3-空气净化器"){
				  $("#tuceng3-空气净化器").animate({opacity:"1"})
				  $("#step3-空气净化器").remove();
			  }
			  else if(icons==="step3-母婴台"){
				  $("#tuceng3-母婴台").animate({opacity:"1"}).css("zIndex","0")
				  $("#muyingtaijieshi").show().animate({opacity:"1"}).css("zIndex","1000")
				  $("#step3-母婴台").remove();

			  }
			  else if(icons==="step3-一键美化"){
				  $("#tuceng3-一键美化").animate({opacity:"1"}).css("zIndex","-1")
				  $("#tuceng2-水池").remove();
				  $("#step3-一键美化").remove();
			  }
		  }


    });

		 $("#tijiao").click(function(){
			  $("#tianjiabiaoji").hide();
			 var shouzhijia=$("#tuceng3-手纸架").css("opacity");
			 var peijian=$("#tuceng3-配件").css("opacity");
			 var muyingtai=$("#tuceng3-母婴台").css("opacity");
			 var yijianmeihua=$("#tuceng3-一键美化").css("opacity");
			 var sanlei=$("#step3-母婴台").css("opacity");
			 var erlei=shouzhijia+peijian;
			 var yilei=muyingtai+yijianmeihua;
			 var duankou=$(window).width();
			 console.log(duankou)
			 console.log(muyingtai);
			 console.log(yijianmeihua);
			 console.log(erlei);


			 if(sanlei==="0.45"){
				 if(duankou<800){$("#sanleicesuoimg").attr("src","images/三类厕所判定M.jpg")}

				  $("#citymain").remove();
				  $("#sanleicesuo").fadeIn(1000);
				 $("#cityessay").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
				 $("#game99").show();
				 $("#choosesuburb99").click(function(){
			  $("#choicepage99").hide();
			  $("#suburb99").fadeIn("slow");
		  });
			  $("#choosecity99").hide();
				 }
			 else {
				 if(yilei!=="11"&&erlei=="11"){$("#citymain").remove();
					 if(duankou<800){$("#erleicesuoimg").attr("src","images/二类厕所判定M.jpg")}
				  $("#erleicesuo").fadeIn(1000);
				 $("#cityessay").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
				 $("#game99").show();
				 $("#choosesuburb99").click(function(){
			  $("#choicepage99").hide();
			  $("#suburb99").fadeIn("slow");
		  });
			  $("#choosecity99").hide();}
				 else if(yilei=="11"&&erlei=="11"){
				  $("#citymain").remove();
				 if(duankou<800){$("#yileicesuoimg").attr("src","images/一类厕所判定M.jpg")}
				  $("#yileicesuo").fadeIn(1000);
				  $("#cityessay").fadeIn(4000);
				  $("body").css("overflow-y","visible");
				  $("#try").remove();
				  $("#game99").show();
				 $("#choosesuburb99").click(function(){
			  $("#choicepage99").hide();
			  $("#suburb99").fadeIn("slow");
		  });
			  $("#choosecity99").hide();
					 }
				 else{
				 $("#citymain").remove();
				 if(duankou<800){$("#sanleicesuoimg").attr("src","images/三类厕所判定M.jpg")}
				  $("#sanleicesuo").fadeIn(1000);
				 $("#cityessay").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
				 $("#game99").show();
				 $("#choosesuburb99").click(function(){
			  $("#choicepage99").hide();
			  $("#suburb99").fadeIn("slow");
		  });
			  $("#choosecity99").hide();
			 }
			 }

		 });

		  $("#tijiao99").click(function(){
			   $("#tianjiabiaoji99").hide();
			 var shouzhijia99=$("#tuceng3-手纸架99").css("opacity");
			 var peijian99=$("#tuceng3-配件99").css("opacity");
			 var muyingtai99=$("#tuceng3-母婴台99").css("opacity");
			 var yijianmeihua99=$("#tuceng3-一键美化99").css("opacity");
			 var sanlei99=$("#step3-母婴台99").css("opacity");
			 var erlei99=shouzhijia99+peijian99;
			 var yilei99=muyingtai99+yijianmeihua99;
       var duankou=$(window).width();
			 console.log(muyingtai99)
			 console.log(yijianmeihua99)
			 console.log(erlei99)


			 if(sanlei99=="0.45"){
         	 if(duankou<800){$("#sanleicesuoimg99").attr("src","images/三类厕所判定M.jpg")}
				  $("#citymain99").remove();
				  $("#sanleicesuo99").fadeIn(1000);
				 $("#cityessay99").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
			 }
			 else if(sanlei99!==0.45&&yilei99!=="11"&&erlei99=="11"){
         	 if(duankou<800){$("#erleicesuoimg99").attr("src","images/二类厕所判定M.jpg")}
				  $("#citymain99").remove();
				  $("#erleicesuo99").fadeIn(1000);
				 $("#cityessay99").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
					 }
			   else if(yilei99=="11"&&erlei99=="11"){
           if(duankou<800){$("#yileicesuoimg99").attr("src","images/一类厕所判定M.jpg")}
				  $("#citymain99").remove();
				  $("#yileicesuo99").fadeIn(1000);
				  $("#cityessay99").fadeIn(4000);
				  $("body").css("overflow-y","visible");
				  $("#try").remove();
					 }
			  else{
          if(duankou<800){$("#sanleicesuoimg99").attr("src","images/三类厕所判定M.jpg")}
				   $("#citymain99").remove();
				  $("#sanleicesuo99").fadeIn(1000);
				 $("#cityessay99").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				 $("#try").remove();
			  }

		 });

		    $( ".dropsuburb" ).droppable({
            drop: function(event,ui) {
				  var sourceElement = $(ui.helper.context);
			  var icons=sourceElement.attr("id");


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
				$("#dragsuburb1-199").hide();
				$("#dragsuburb299").fadeIn();
			}
			else if(icons==="水泥99"){
				$("#tuceng-shuini99").animate({opacity:"1"}).css("zIndex","1");
				   $("#水泥99").remove();
				$("#dragsuburb1-199").hide();
				$("#dragsuburb299").fadeIn();
			}
			else if(icons==="化粪池99"){
				$("#tuceng-hua99").animate({opacity:"1"}).css("zIndex","-1");
				$("#huafenchijieshi99").show().animate({opacity:"1"}).css("zIndex","1000");
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
				$("#tishiS99").remove();
				$("#tuceng-bai99").animate({opacity:"1"}).css("zIndex","-3");

				$("#dragsuburb199").hide();
				$("#dragsuburb1-199").fadeIn();
			}
				else if(icons==="水池99"){
				$("#tuceng-shui99").animate({opacity:"1"});
				   $("#水池99").remove();
			}
			 else if (icons==="苍蝇拍"){
              $("#tuceng-cang").animate({opacity:"0"});
				   $("#苍蝇拍").remove();
			  }
			else if(icons==="窗户"){
				$("#tuceng-chuang").animate({opacity:"1"}).css("zIndex","2");
				   $("#窗户").remove();
			}
			else if(icons==="瓷砖"){
				$("#tuceng-ci").animate({opacity:"1"}).css("zIndex","1");
				   $("#瓷砖").remove();
				$("#dragsuburb1-1").hide();
				$("#dragsuburb2").fadeIn();
			}
			else if(icons==="水泥"){
				$("#tuceng-shuini").animate({opacity:"1"}).css("zIndex","1");
				   $("#水泥").remove();
				$("#dragsuburb1-1").hide();
				$("#dragsuburb2").fadeIn();
			}
			else if(icons==="化粪池"){
				$("#tuceng-hua").animate({opacity:"1"}).css("zIndex","-1");
				$("#huafenchijieshi").show().animate({opacity:"1"}).css("zIndex","1000");
				   $("#化粪池").remove();
			}
				else if(icons==="坑位"){
				$("#tuceng-keng").animate({opacity:"1"});
				   $("#坑位").remove();
			}
				else if(icons==="垃圾桶"){
				$("#tuceng-la").animate({opacity:"1"}).css("zIndex","1");
				   $("#垃圾桶").remove();
			}
				else if(icons==="墙"){
				$("#suburb底图").remove();
				$("#tishiS").remove();
				$("#tuceng-bai").animate({opacity:"1"}).css("zIndex","-3");
				$("#tuceng-qiang").animate({opacity:"1"});
				$("#dragsuburb1").hide();
				$("#dragsuburb1-1").fadeIn();
			}
				else if(icons==="水池"){
				$("#tuceng-shui").animate({opacity:"1"});
				   $("#水池").remove();
			}
			}
			});

		  $("#tijiao2").click(function(){
			  $("#tianjiabiaoji2").hide();

			 var a=$("#tuceng-cang").css("opacity");
			 var b=$("#tuceng-chuang").css("opacity");
			 var c=$("#tuceng-shui").css("opacity");
			 var d=$("#tuceng-hua").css("opacity");
			 var e=$("#tuceng-keng").css("opacity");
       var duankou2=$(window).width();
			 var g=a+b+c+d+e
			 console.log(g)

			 if(g=="01111"){

				  $("#suburbmain").remove();
				 $("#wuhai").fadeIn(1000);
           if(duankou2<800){$("#wuhaiimg").attr("src","images/农村/成功无害化M.jpg")}
				  $("#suburbessay").fadeIn(4000);
				 $("body").css("overflow-y","visible");
			     $("#try").remove();
				 $("#game99").show();
				 $("#choosecity99").click(function(){
			  $("#choicepage99").hide();
			  $("#city99").fadeIn("slow");
		  });
			  $("#choosesuburb99").hide();
			 }
			 else if(g!=="01111"){

				  $("#suburbmain").remove();
				  $("#youhai").fadeIn(1000);
           if(duankou2<800){$("#youhaiimg").attr("src","images/农村/失败无害化M.jpg")}
				  $("#suburbessay").fadeIn(4000);
				 $("body").css("overflow-y","visible");
				  $("#try").remove();
				 $("#game99").show();
				 $("#choosecity99").click(function(){
			  $("#choicepage99").hide();
			  $("#city99").fadeIn("slow");
		  });
			  $("#choosesuburb99").hide();
					 }

  });
		   $("#tijiao299").click(function(){
			    $("#tianjiabiaoji299").hide();
			 var a99=$("#tuceng-cang99").css("opacity");
			 var b99=$("#tuceng-chuang99").css("opacity");
			 var c99=$("#tuceng-shui99").css("opacity");
			 var d99=$("#tuceng-hua99").css("opacity");
			 var e99=$("#tuceng-keng99").css("opacity");
       var duankou299=$(window).width();
			 var g99=a99+b99+c99+d99+e99
			 console.log(g99)

			 if(g99=="01111"){

				  $("#suburbmain99").remove();
				 $("#wuhai99").fadeIn(1000);
             if(duankou299<800){$("#wuhaiimg99").attr("src","images/农村/成功无害化M.jpg")}
				  $("#suburbessay99").fadeIn(4000);
				 $("body").css("overflow-y","visible");
			     $("#try").remove();
			 }
			 else if(g99!=="01111"){

				  $("#suburbmain99").remove();
				  $("#youhai99").fadeIn(1000);
            if(duankou299<800){$("#youhaiimg99").attr("src","images/农村/失败无害化M.jpg")}
				  $("#suburbessay99").fadeIn(4000);
				 $("body").css("overflow-y","visible");
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
