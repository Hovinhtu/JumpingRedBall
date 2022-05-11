$(function() {

		var score = 0;
		var $boxX = $('.box').offset().left;
		var $boxX1 = $('.box1').offset().left;
		var $boxX2 = $('.box2').offset().left;
		var $gr1 = $('.g1').offset().left;
		var $gr2 = $('.g2').offset().left;
		var $gr3 = $('.g3').offset().left;
		var $gr4 = $('.g4').offset().left;
		var $gr5 = $('.g5').offset().left;
		var $cloud = $('.cloud').offset().left;

setInterval(makeBoxMoving,8);
function makeBoxMoving(){
         	$boxX = $boxX - 1;
				$('.box').offset({left:$boxX});
				if($boxX < 130)$boxX = 550;
	// box 2
	      	$boxX1 = $boxX1 - 1;
				$('.box1').offset({left:$boxX1});
				if($boxX1 < 130)$boxX1 = 550;
	// box 3
	      	$boxX2 = $boxX2 - 1;
				$('.box2').offset({left:$boxX2});
				if($boxX2 < 130)$boxX2 = 550;	// ground
				$gr1 = $gr1 -1;
				$('.g1').offset({left:$gr1});
				if($gr1 < 30)$gr1 = 530;
	// ground
				$gr2 = $gr2 -1;
				$('.g2').offset({left:$gr2});
				if($gr2 < 30)$gr2 = 530;
	// ground
				$gr3 = $gr3 -1;
				$('.g3').offset({left:$gr3});
				if($gr3 < 30)$gr3 = 530;
	// ground
				$gr4 = $gr4 -1;
				$('.g4').offset({left:$gr4});
				if($gr4 < 30)$gr4 = 530;
	// ground
				$gr5 = $gr5 -1;
				$('.g5').offset({left:$gr5});
				if($gr5 < 30)$gr5 = 530;
	
	// score
				score++;
				$('.score').text(score);
	// cloud
				$cloud = $cloud - 1;
				$('.cloud').offset({left:$cloud});
            
				if($cloud < -30)$cloud = 730;
	//get x,y
				var x = $('.box').offset().left;
				var y = $('.box').offset().top;
				var x1 = $('.box1').offset().left;
				var y1 = $('.box1').offset().top;
				var x2 = $('.box2').offset().left;
				var y2 = $('.box2').offset().top + 10;
				checkValue(x,y);
				checkValue(x1,y1);
				checkValue(x2,y2);
	function checkValue(valX,valY){
				var value = Math.pow(valX - 175,2) + Math.pow(valY - 4 - $('.client').offset().top,2) - Math.pow(5,2);
           var value1 = Math.pow(valX + 5 - 175,2) + Math.pow(valY - 5 - $('.client').offset().top,2) - Math.pow(5,2);
				var value2 = Math.pow(valX + 5 - 175,2) + Math.pow(valY - 15 - $('.client').offset().top,2) - Math.pow(5,2);
				var value3 = Math.pow(valX - 175,2) + Math.pow(valY - 10 - $('.client').offset().top,2) - Math.pow(5,2);
				if(value == 0 || value1 == 0 || value2 == 0 || value3 == 0 ){
			//alert('you lose');
			score = 0;
		};
				
}
}

// Yeah!! that is my button	
		$('.btn1').on('click',function(){
			var $clientT = 150;
			var $index = 1;
			var id = setInterval(makeClientMovingUpAndDown,1,90);
			function makeClientMovingUpAndDown(coor) {
						$clientT = $clientT - $index;
						if($clientT == coor)$index = -1;						
						if($clientT > 149)clearInterval(id);
						$('.client').offset({top:$clientT}); 
								}
			
			});
		

});// that is end of ready function	
	
