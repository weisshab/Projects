window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", backaudio);



$(document).ready(function(){
	$(window).on('load', function () {
		 $("#loading").delay(1000).fadeOut(2000);
		 $("body").delay(3000).css({'overflow':'visible'}); 
	});
	});

	var pos = 8;
	 var h = window.innerHeight;
	 
	 function backaudio(){
		let x = document.getElementById("wellen"); 
	 	x.play();  
	 }
	 
	 function heartBeat(){
			let x = document.getElementById("heart"); 
		 	x.play();  
		 }
	 
	 function theChange() {
		    let x = document.getElementById("myRange").value;
		    
		    if(x == 1){
		    	document.getElementById("mountain").src="img/uxWelt1.png";
		    }
		    else if(x == 2){
		    	document.getElementById("mountain").src="img/uxWelt2.png";
		    }
		    else if(x == 3){
		    	document.getElementById("mountain").src="img/uxWelt3.png";
		    }
		    else{
		    	document.getElementById("mountain").src="img/uxWelt4.png";
		    }
		    console.log(x);
		}
	 
	 $(document).ready(function(){
		 let x = document.getElementById("heart");
		 $(".kreis").hover(function(){
			  
			 x.play();
			    }, function(){
			    	x.pause();
			        x.currentTime = 0
			});
			});
function doSeite(){
	 switch (pos) {
     case 0:
    	 $(document).ready(function(){

			 $("#wolke").animate({width:"30%",left:"30%",top:"10em"},1200);
			 	});
    	 console.log("0");
    	 $(document).ready(function(){

			 $("#logo").css({position:"fixed"}).animate({width:"7%",left:"90%",top:"1em",opacity:"1"},1200);			
				
						
				});
    	 console.log("1");
         break;

     case 2:
    	 $(document).ready(function(){

			 $("#info1").fadeIn(1200);
						
				});
    	 console.log("2");
         break;
     case 3:
    	 $(document).ready(function(){

			 $("#mountain").fadeIn(1200);
			 $(".slider").fadeIn(1200);	
			 $("#text2").fadeIn(1200);	
				});
    	 console.log("3");
         break;
     case 4:
    	 $(document).ready(function(){

			 $("#info2").fadeIn(1200);

				});
    	 console.log("4");
         break;
     case 5:
    	 $(document).ready(function(){
		 $("#logo").clearQueue().css({position:"absolute"}).css({width:"20%",left:"40%",top:"200em",opacity:"1"},100);			
			
					
			});
    	 console.log("5");
		
		
         break;
   

 }
}
	 function scrollFunction(){
		console.log(pos)

		 
		 if (document.body.scrollTop < h/3 && pos>0 || document.documentElement.scrollTop < h/3 && pos>0) {
			
			 pos=0;
			 
			
	
			}
		 
	
		 if (document.body.scrollTop > h/3 || document.documentElement.scrollTop > h/3  &&pos!=2) {
			
			 pos=2;
			 
			
	
			}

		 if (document.body.scrollTop > h*1.5 || document.documentElement.scrollTop > h*1.5  &&pos!=3) {
			
			pos=3;

			
	
			}
		 if (document.body.scrollTop > h*2.8|| document.documentElement.scrollTop > h*2.8  &&pos!=4) {
			
			 pos=4;
			 
			}
		 if ((document.body.scrollTop > h*3.5 || document.documentElement.scrollTop > h*3.5 )&&pos!=5) {
			pos=5;
			

			}
		
		 doSeite();
		 
	 }

		$(document).ready(function(){
					
				$( "#info1" ).click(function() {
					$("#info1").delay(800).animate({left:'20%'});
					 $("#text1").fadeIn(1000).animate({left:'50%'});
						 $("#bar1").css({'width':'10%'}).fadeIn(1000).animate({left:'50%'}).animate({width:'20%'},800); 
						 $("#bar2").css({'width':'10%'}).fadeIn(1000).animate({left:'50%'}).animate({width:'30%'},1200);
						 $("#bar3").css({'width':'10%'}).fadeIn(1000).animate({left:'50%'}).animate({width:'40%'},1600);

			});
				$( "#info2" ).click(function() {
					$("#info2").delay(800).animate({left:'20%'});
					 $("#text3").fadeIn(1000).animate({left:'50%'});				 
			});
			});
		
			

		
		
		