			$(document).ready(function() {
			  $('.flexslider').flexslider({
				animation: "slide",
				 start: function(slider){
						$('.flexslider').resize();
				}
			  });
			
			  $('.flexslider3').flexslider({
				animation: "slide",
				 start: function(slider){
						$('.flexslider').resize();
				}
			  });
			   
				 $("a[rel^='prettyPhoto']").prettyPhoto();

				$('.animate').scrolla({
					mobile: false,
					once: true
				});

				var pd1 = ["pd_pi1.png", "RMFu-300S", "220V, 60Hz", "500", "55", "Living space: 40, non-residential space: 50", "Hepa filter, Nonwoven filter, Load filter", "5", "254 x 254 x 235 (mm)" , "ø100" ];
				var pd2 = ["pd_pi2.png", "RMFu-350S", "220V, 60Hz", "600", "65", "Living space: 40, non-residential space: 45", "Free / Medium Filter (Light Scattering Integration)", "10", "374 x 397 x 153 (mm)" , "ø125" ];
				var pd3 = ["pd_pi3.png", "RMF-200", "220V, 60Hz", "200", "87", "Living space: 40, non-residential space: 50", "Hepa filter, Free filter, Medium filter","Heating : 75, Cooling : 58", "20", "520 x 620 x 240 (mm)" , "ø125" ];
				var pd7 = ["pd_pi7.png", "RMF-550TS", "220V, 60Hz", "150", "150", "40 or less", "Hepa filter, Nonwoven filter, Load filter","Heating : 32, Cooling : 41", "40", "900 x 750 x 280 (mm)" , "ø150" ];

				$("#product .pd_box1 a.btn_more").click(function(event){
					event.preventDefault();
					$(".pop_bg").addClass("on");
					var pd_config = $(this).data("pd");
					$(".pop_con1").removeClass("off");
					$(".pop_con2").removeClass("on");
					$(".pop_con1 .pop_t1").removeClass("off");
					$(".pop_con1 .pop_t2, .pop_con1 .pop_t3").removeClass("on");
					
					if(pd_config == "pd1"){
						$(".pop1_i").attr("src", "assets/images/"+pd1[0]);
						$(".pop_con1 .pop_t1 .name").text(pd1[1]);
						$(".power").text(pd1[2]);
						$(".volume").text(pd1[3]);
						$(".watt").text(pd1[4]);
						$(".db").text(pd1[5]);
						$(".eff").text(pd1[6]);
						$(".kg").text(pd1[7]);
						$(".size").text(pd1[8]);
						$(".duct").text(pd1[9]);
						$(".filter_tr").css("display","none");
					}else if(pd_config == "pd2"){
						$(".pop1_i").attr("src", "assets/images/"+pd2[0]);
						$(".pop_con1 .pop_t1 .name").text(pd2[1]);
						$(".power").text(pd2[2]);
						$(".volume").text(pd2[3]);
						$(".watt").text(pd2[4]);
						$(".db").text(pd2[5]);
						$(".eff").text(pd2[6]);
						$(".kg").text(pd2[7]);
						$(".size").text(pd2[8]);
						$(".duct").text(pd2[9]);
						$(".filter_tr").css("display","none");
					}else if(pd_config == "pd3"){
						$(".pop1_i").attr("src", "assets/images/pd_pi3.png");
						$(".pop_con1 .pop_t1").addClass("off");
						$(".pop_con1 .pop_t3").addClass("on");
						$(".pop_t3 .pop1_i").attr("src", "assets/images/"+pd3[0]);
						$(".pop_con1 .pop_t3 .name").text(pd3[1]);
						$(".pop_t3 .power").text(pd3[2]);
						$(".pop_t3 .volume").text(pd3[3]);
						$(".pop_t3 .watt").text(pd3[4]);
						$(".pop_t3 .db").text(pd3[5]);
						$(".pop_t3 .filter").text(pd3[6]);
						$(".pop_t3 .eff").text(pd3[7]);
						$(".pop_t3 .kg").text(pd3[8]);
						$(".pop_t3 .size").text(pd3[9]);
						$(".pop_t3 .duct").text(pd3[10]);
					}else if(pd_config == "pd4"){
						$(".pop1_i").attr("src", "assets/images/pd_pi4.png");
						$(".pop_con1 .pop_t1").addClass("off");
						$(".pop_con1 .pop_t2").addClass("on");
						$(".pop_bg .wrap").css("height","635px").css("margin-top","-317.5px;");
					}else if(pd_config == "pd5"){
						$(".pop_bg .wrap").addClass("wrap2");
						$(".pop_con1").addClass("off");
						$(".pop_con2").addClass("on");
					}else if(pd_config == "pd7"){
						$(".pop_con1 .pop_t1").addClass("off");
						$(".pop_con1 .pop_t3").addClass("on");
						$(".pop1_i").attr("src", "assets/images/"+pd7[0]);
						$(".pop_con1 .pop_t3 .name").text(pd7[1]);
						$(".pop_t3 .power").text(pd7[2]);
						$(".pop_t3 .volume").text(pd7[3]);
						$(".pop_t3 .watt").text(pd7[4]);
						$(".pop_t3 .db").text(pd7[5]);
						$(".pop_t3 .filter").text(pd7[6]);
						$(".pop_t3 .eff").text(pd7[7]);
						$(".pop_t3 .kg").text(pd7[8]);
						$(".pop_t3 .size").text(pd7[9]);
						$(".pop_t3 .duct").text(pd7[10]);
					}else{}
				});
				$(".pop_bg").click(function(){
					$(this).removeClass("on");
				});
				$("nav a").click(function(event){
					event.preventDefault();
					var nav_part = $($(this).attr("href")).offset().top;
					if($(this).attr("href") == "#pd1" || $(this).attr("href") == "#pd2" ){
						$("body,html").animate({scrollTop : nav_part - 200}, 700, 'linear');
					}else{
						$("body,html").animate({scrollTop : nav_part - 100}, 700, 'linear');
					}
				});
				$(".btn_top").click(function(event){
					event.preventDefault();
					$("body,html").animate({scrollTop : 0}, 700, 'linear');
				});
				$(".pt4 .video_thumb a").click(function(){
					event.preventDefault();
					$(".video_con").attr("src", $(this).data("src"));
					$(".video_link").attr("href", $(this).data("id"));
				});
				$(".pt4 a.video_link").click(function(event){	
					event.preventDefault();
					$(".pop_bg2").addClass("on");
					if($(this).attr("href") == "#video1"){
						$(".pop_video").html('<video src="assets/images/video1.mp4" width="800px" height="480px" controls></video>');
					}else if($(this).attr("href") == "#video2"){
						$(".pop_video").html('<video src="assets/images/video2.mp4" width="800px" height="480px" controls></video>');
					}
				});
				$(".pop_bg2").click(function(){
					$(".pop_video").html("");
					$(this).removeClass("on");
				});
				$(".case_list a, .case_pop a").click(function(e){
					e.preventDefault();
				});
				$(".case_pop a").click(function(){
					$(".case_pop").fadeOut();
				});
			});
