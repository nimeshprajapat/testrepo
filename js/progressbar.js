var ratingCircle1 = $('.ratingCircle1').length;
var ratingCircle2 = $('.ratingCircle2').length;
var ratingCircle3 = $('.ratingCircle3').length;
var ratingCircle4 = $('.ratingCircle4').length;

var csPercentage1 = 90;
var csPercentage2 = 80;
var csPercentage3 = 60;
var csPercentage4 = 50;

var	flg_loaded1 = 0;
var	flg_loaded2 = 0;
var	flg_loaded3 = 0;
var	flg_loaded4 = 0;

if(ratingCircle1 > 0){
	$('.ratingCircle1').each(function(){
		var circleObj = $(this);
		var circleID = $(this).attr('id');
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			feefoOffset = circleObj.offset().top - 700;
			if(scroll >= feefoOffset){
				var check_html1 = $('.ratingCircle1').html();
				if(check_html1 == '' && flg_loaded1 == 0){	
					var ctx1 =  document.getElementById(circleID).getContext('2d');
					var al = 0;
					var start = 4.72;
					var cw = 200;
					var ch = 200;
					var diff;
					function progressSim1(){
						diff = ((al / 100) * Math.PI*2*10).toFixed(3);
						ctx1.clearRect(0, 0, cw, ch);
						ctx1.lineWidth = 8;
						ctx1.fillStyle = '#ffffff';
						ctx1.strokeStyle = "#ef4423";
						ctx1.textAlign = "center";
						ctx1.font="47px Roboto";
						ctx1.fillText(al+'%', 100,117);
						ctx1.beginPath();
						ctx1.arc(100, 100, 75, start, diff/10+start, false);
						ctx1.stroke();
						if(al >= csPercentage1){
							clearTimeout(sim1);
							flg_loaded1 = 1;
						}
						al++;
					}
					var sim1 = setInterval(progressSim1, 35);
					flg_loaded1 = 1;
				}
			}
		});
	})
}

if(ratingCircle2 > 0){
	$('.ratingCircle2').each(function(){
		var circleObj = $(this);
		var circleID = $(this).attr('id');
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			feefoOffset = circleObj.offset().top - 700;
			if(scroll >= feefoOffset){
				var check_html2 = $('.ratingCircle2').html();
				if(check_html2 == '' && flg_loaded2 == 0){	
					var ctx2 =  document.getElementById(circleID).getContext('2d');
					var al = 0;
					var start = 4.72;
					var cw = 200;
					var ch = 200;
					var diff;
					function progressSim2(){
						diff = ((al / 100) * Math.PI*2*10).toFixed(3);
						ctx2.clearRect(0, 0, cw, ch);
						ctx2.lineWidth = 8;
						ctx2.fillStyle = '#ffffff';
						ctx2.strokeStyle = "#ef4423";
						ctx2.textAlign = "center";
						ctx2.font="47px Roboto";
						ctx2.fillText(al+'%', 100,117);
						ctx2.beginPath();
						ctx2.arc(100, 100, 75, start, diff/10+start, false);
						ctx2.stroke();
						if(al >= csPercentage2){
							clearTimeout(sim2);
							flg_loaded2 = 1;
						}
						al++;
					}
					var sim2 = setInterval(progressSim2, 35);
					flg_loaded2 = 1;
				}
			}
		});
	})
}

if(ratingCircle3 > 0){
	$('.ratingCircle3').each(function(){
		var circleObj = $(this);
		var circleID = $(this).attr('id');
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			feefoOffset = circleObj.offset().top - 700;
			if(scroll >= feefoOffset){
				var check_html3 = $('.ratingCircle3').html();
				if(check_html3 == '' && flg_loaded3 == 0){	
					var ctx3 =  document.getElementById(circleID).getContext('2d');
					var al = 0;
					var start = 4.72;
					var cw = 200;
					var ch = 200;
					var diff;
					function progressSim3(){
						diff = ((al / 100) * Math.PI*2*10).toFixed(3);
						ctx3.clearRect(0, 0, cw, ch);
						ctx3.lineWidth = 8;
						ctx3.fillStyle = '#ffffff';
						ctx3.strokeStyle = "#ef4423";
						ctx3.textAlign = "center";
						ctx3.font="47px Roboto";
						ctx3.fillText(al+'%', 100,117);
						ctx3.beginPath();
						ctx3.arc(100, 100, 75, start, diff/10+start, false);
						ctx3.stroke();
						if(al >= csPercentage3){
							clearTimeout(sim3);
							flg_loaded3 = 1;
						}
						al++;
					}
					var sim3 = setInterval(progressSim3, 35);
					flg_loaded3 = 1;
				}
			}
		});
	})
}

if(ratingCircle4 > 0){
	$('.ratingCircle4').each(function(){
		var circleObj = $(this);
		var circleID = $(this).attr('id');
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			feefoOffset = circleObj.offset().top - 700;
			if(scroll >= feefoOffset){
				var check_html4 = $('.ratingCircle4').html();
				if(check_html4 == '' && flg_loaded4 == 0){	
					var ctx4 =  document.getElementById(circleID).getContext('2d');
					var al = 0;
					var start = 4.72;
					var cw = 200;
					var ch = 200;
					var diff;
					function progressSim4(){
						diff = ((al / 100) * Math.PI*2*10).toFixed(3);
						ctx4.clearRect(0, 0, cw, ch);
						ctx4.lineWidth = 8;
						ctx4.fillStyle = '#ffffff';
						ctx4.strokeStyle = "#ef4423";
						ctx4.textAlign = "center";
						ctx4.font="47px Roboto";
						ctx4.fillText(al+'%', 100,117);
						ctx4.beginPath();
						ctx4.arc(100, 100, 75, start, diff/10+start, false);
						ctx4.stroke();
						if(al >= csPercentage4){
							clearTimeout(sim4);
							flg_loaded4 = 1;
						}
						al++;
					}
					var sim4 = setInterval(progressSim4, 35);
					flg_loaded4 = 1;
				}
			}
		});
	})
}