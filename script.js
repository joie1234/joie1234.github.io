$(document).ready(function(){
       
var isMobile = false; //initiate as false
var timeout
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;

}

if(isMobile){
	$('.cover_wrapper').css({'height':window.innerHeight+'px'})
	$('.content_wrapper').css({'padding-top':window.innerHeight+'px'})
}
	// lottie.loadAnimation({
	//   container: document.getElementById('logo'), // the dom element that will contain the animation
	//   renderer: 'svg',
	//   loop: true,
	//   autoplay: true,
	//   path: 'img/FS_logo_short.json' // the path to the animation json
	// });

if(isMobile){
	$('.button').click(function(){
		$('.button_hover').removeClass('button_hover')
		$(this).addClass('button_hover')
		clearTimeout(timeout)

		timeout = setTimeout(function(){$('.button_hover').removeClass('button_hover')},500)
	})
}else{
	$('.button').hover(function(){
		$(this).addClass('button_hover')
	},function(){
		$(this).removeClass('button_hover')
	})
}
	$('.menubutton.button_1').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight 
		}, 500);
	})
	$('.menubutton.button_2').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight + $('.content_1').outerHeight(true)
		}, 500);
	})
	$('.menubutton.button_3').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight + $('.content_1').outerHeight(true) + $('.content_2').outerHeight(true) 
		}, 500);
	})
	$('.main_button_2').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight + $('.content_1').outerHeight(true) + $('.content_2').outerHeight(true) + $('.content_3').outerHeight(true)
		}, 500);
	})
	$('.menubutton.button_4').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight + $('.content_1').outerHeight(true) + $('.content_2').outerHeight(true) + $('.content_3').outerHeight(true) + $('.content_extra').outerHeight(true) 
		}, 500);
	})
	$('.menubutton.button_5').click(function(){
		$('html, body').animate({ scrollTop: 
			window.innerHeight + $('.content_1').outerHeight(true) + $('.content_2').outerHeight(true) + $('.content_3').outerHeight(true) + $('.content_extra').outerHeight(true) + $('.content_5').outerHeight(true)
		}, 500);
	})
	var h = window.innerHeight
	$(window).scroll(function(){
		if( $(window).scrollTop() > h){
			$('.titlebar_1').addClass('titlebar_bg')
			$('.titlebar_1 .button_7').show()
		}else{
			$('.titlebar_1').removeClass('titlebar_bg')
			$('.titlebar_1 .button_7').hide()
		}
	});
	var cover_counter = 0
	cover_ani()
	function cover_ani(){
			cover_counter++
			if(cover_counter%8 == 0 || cover_counter%8 == 1){
				var freq = 1
			}else{
				var freq = 0
			}
			$('.cover').hide()
			$('.cover_'+(cover_counter%9+1)).show()
		setTimeout(function(){
			cover_ani()
		},100+freq*1500)
	}
	$('.korean_b').click(function(){
		$('body').removeClass().addClass('lang_ko')
	})
	$('.english_b').click(function(){
		$('body').removeClass().addClass('lang_en')
	})
	// $('.content').css({'padding-top':$('.titlebar_1').outerHeight()+'px'})
	$('.content').css({'margin-top':$('.titlebar_1').outerHeight()+'px'})
	// $('.cat').css({'top':-1*$('.titlebar_1').outerHeight()+'px'})


})

