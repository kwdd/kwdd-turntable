$(function () {
	    var nums = new Array();          //存取每个li的旋转角度
	    var num = 0;                     //旋转角度
	    var r=0;
		var g=0;
		var b=0;
	    $('ul li').each(function (i,ele) {
	        nums.push(num);
	        num+=10;                                     //设置每个li旋转角度
	        r = Math.floor(Math.random()*19*10+60);      //生成随机颜色
	        g = Math.floor(Math.random()*19*10+60);
	        b = Math.floor(Math.random()*18*10+70);
			
	        $(ele).css({transform: 'rotate('+num+'deg)'});    
	        $(ele).css({borderLeft: '340px solid rgba('+r+', '+g+', '+b+', 1)' });
	    })
	
	
	    //点击部分
	    var overlotto;
		var overTime;
	    $('.img').click(function () {
			$(this). css({ pointerEvents: 'none'})        //关闭按钮
			var rTime = Math.random()*6+8;  //随机生成转动时间
			var p = 10;   //设置转动速度
			var num = 0;  //记录当前调用次数1秒每次
			overTime = setInterval(function(){
				num++;
				if(rTime-num <= 8){  //时间剩余8秒开始减速
					p+=3;
				}
				clearInterval(overlotto);         //关闭上一次的转动，防止出现多个调用
				overlotto = setInterval(lottorRotate,p);	
			},1000)
			
				
			console.log(rTime);
			setTimeout(function(){          //结束关闭所有时间函数
				clearInterval(overTime);   
				clearInterval(overlotto);	 
				$('.img'). css({ pointerEvents: 'auto'})   //开启按钮
			},rTime*1000)
			
	    })
		
		
	    //旋转部分
	    function lottorRotate() {
	        $('ul li').each(function (i,ele) {
	            nums[i]+=5;
	            if (nums[i] >= 360){
	                nums[i] = 0;
	            }
	            var num = $(ele).css({transform: 'rotate('+nums[i]+'deg)'});
	            if (nums[i] >= 79 && nums[i] <= 101){
	                $('.tt').html("获得奖励："+$('ul li:eq('+i+')').text()+"!")
	            }
	            
	        })
	    }
	})