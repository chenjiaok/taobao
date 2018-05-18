
var j,k;
window.onload = function(){
	hover();
	centerClick();

	var $topleftsign		= $('.topBanner .topsign1 ul li');		//小圆点符号
	var $topleftsignleft	= $('.topBanner .topsign2 ul .left');	//向左符号
	var $topleftsignright	= $('.topBanner .topsign2 ul .right');	//向右符号
	var topleft 			= $('.topBanner .topleft ul li');		//区域图片
	var tLength 			= topleft.length;

	var $bottomleftsign 	= $('.bottomBanner .bottomsign1 ul li');		//小圆点符号
	var $bottomleftsignleft	= $('.bottomBanner .bottomsign2 ul .left');		//向左符号
	var $bottomleftsignright= $('.bottomBanner .bottomsign2 ul .right');	//向右符号
	var bottomleft 			= $('.bottomBanner .bottomB div');				//区域图片
	var bLength 			= bottomleft.length;


	//网页初始轮播位置
	j = topleft.index(this.find('.signchecked'));
	k = bottomleft.index(this.find('.signchecked'));


	//点击效果选中某一图片效果
	$topleftsignleft.click(function(){
		currentSign();
		j =( (j + tLength) - 1 ) % tLength;
		j --;
		topBannerAnimate();
	});

	$topleftsignright.click(function(){
		currentSign();
		j =( (j + tLength) - 1) % tLength;
		j ++;
		topBannerAnimater();
	});

	$bottomleftsignleft.click(function(){
		currentSign();
		k = ( (k + bLength) - 1 ) % bLength;
		k --; 
		bottomBannerAnimate();
	});

	$bottomleftsignright.click(function(){
		currentSign();
		k = ( (k + bLength) -1 ) % bLength;
		k ++; 
		bottomBannerAnimater();
	});

	//定时更新banner
	var imgbannerT = setInterval(function (){
		currentSign();
		topBannerAnimate();
	},3000); 
	var imgbannerB = setInterval(function (){
		currentSign();
		bottomBannerAnimate();
	},3000);

 
	//点击效果选中某一图片效果
	$topleftsign.click(function(){
		imgbannerT = window.clearInterval(imgbannerT);
		j = $topleftsign.index(this);
		console.log(j);
		j --; 
		topBannerAnimate();
	});

	$bottomleftsign.click(function(){
		imgbannerB = window.clearInterval(imgbannerB);
		k = $bottomleftsign.index(this);
		k --;
		bottomBannerAnimate();
	});




	//中间banner hover特效
	var $topBanner = $('.topBanner');
	$topBanner.hover(function(){
	imgbannerT = window.clearInterval(imgbannerT);
	$(this).find('.topsign2 ul li').css({
		'visibility':'visible',
			'z-index':'9'
	});
	},function(){
	$(this).find('.topsign2 ul li').css({
		'visibility':'hidden',
			'z-index':'-1'
	}); 	
	imgbannerT = setInterval(function (){
			currentSign();
			topBannerAnimate();
		},3000); 
	});

	var $bottomBanner = $('.bottomBanner');
	$bottomBanner.hover(function(){
	imgbannerB = window.clearInterval(imgbannerB);
	$(this).find('.bottomsign2 ul li').css({
			'visibility':'visible',
			'z-index':'9'
	});
	},function(){
	$(this).find('.bottomsign2 ul li').css({
		'visibility':'hidden',
		'z-index':'-1'
		});
		imgbannerB = setInterval(function (){
			currentSign();
			bottomBannerAnimate();
		},3000);
	});
	 
	//中上banner默认轮播效果
function topBannerAnimate(){
	j = j > tLength-1 ? 0 : j;
	var j1 = (j+1) % tLength;
	topleft.stop().animate({
	width:'0',
	'z-index':'-2',
	'visibility':'hidden',
	},800);

	topleft.eq(j1).css({
	left:'32em',
	'z-index':'0',
	width:'0',

	}).stop().animate({
	left:'0',
	'z-index':j + 1,
	width:'32em',
	},200);
	$topleftsign.removeClass('signchecked').eq(j1).addClass('signchecked');
	j ++;
}
function topBannerAnimater(){
	j = j> tLength-1 ? 0 : j;
	var j1 = (j+1) % tLength;
	topleft.stop().animate({
	left:'32em',
	width:'0',
	'z-index':'-2',
	'visibility':'hidden',
	},800);

	topleft.eq(j1).css({
	left:'32em',
	'z-index':'0',
	width:'0',

	}).stop().animate({
	left:'0',
	'z-index':j+1,
	width:'32em',
	},200);
	$topleftsign.removeClass('signchecked').eq(j1).addClass('signchecked');
	j ++;
}

	//中下banner默认轮播效果
function bottomBannerAnimate(){
	k = k>bLength-1 ? 0 : k;
	var k1 = (k+1) % bLength;
	bottomleft.stop().animate({
	width:'0',
	'z-index':'-2',
	'visibility':'hidden',
	},800);

	bottomleft.eq(k1).css({
	left:'32em',
	'z-index':'0',
	width:'0', 
	}).stop().animate({
	left:'0',
	'z-index':k+1,
	width:'32em',
	},200);
	$bottomleftsign.removeClass('signchecked').eq(k1).addClass('signchecked');
	k ++;
}
function bottomBannerAnimater(){
	k = k>bLength-1 ? 0 : k;
	var k1 = (k+1) % bLength;
	bottomleft.stop().animate({
		left:'32em',
		width:'0',
		'z-index':'-2',
		'visibility':'hidden',
	},800);

	bottomleft.eq(k1).css({
		left:'32em',
		'z-index':'0',
		width:'0',
	}).stop().animate({
		left:'0',
		'z-index':k+1,
		width:'32em',
	},200);
	$bottomleftsign.removeClass('signchecked').eq(k1).addClass('signchecked');
	k ++;
}

	//程序中断后获取轮播位置
function currentSign(){
	for(var i = 0; i < tLength; i ++){
		if(($topleftsign.eq(i)).hasClass('signchecked')){j=i;}
	}
	for(var i = 0; i < bLength; i ++){
		if(($bottomleftsign.eq(i)).hasClass('signchecked')){k=i;}
	}
}

}

function hover(){
	//页眉hover特效
	var $right = $('#header .headerright');
	$right.hover(function(){//移入事件
		$(this).children('ul').css({
			'visibility':'visible',
			'color':'#000',
			'z-index':'10'
		});
	},function(){//移出事件
	$(this).children('ul').css({
		'visibility':'hidden',
		'z-index':'-1'
	});
	});

	//左侧导航特效
	var $leftItem = $('.contentleftitem');
	$leftItem.hover(function(){//移入事件 
		$(this).find('.contentleftitemdetail').css({
			'visibility':'visible',
			'z-index':'10'
		});
	},function(){//移出事件
		$(this).find('.contentleftitemdetail').css({
			'visibility':'hidden',
			'z-index':'-1'
		});
	});

	//公告区域特效
	var $righttop = $('.righttop3 span');
	$righttop.hover(function(){//移入事件 
		$(this).find('ul').css({
			'z-index':'2'
		});
	},function(){//移出事件
		$(this).find('ul').css({
			'z-index':'0'
		});
	});

	//话费以及游戏区域弹出特效
	var $billSpan = $('.rightbottom div'); //1.弹出充话费框
	$billSpan.hover(function(){//移入事件
		$(this).find('ul').css({
		 'visibility':'visible',
			'z-index':'2'
		});
	},function(){//移出事件
		$(this).find('ul').css({
			'visibility':'hidden',
			'z-index':'-1'
		});
	});
	

	var $billulli = $('.rightbottom div ul li');//2.弹出具体充值项目
	$billulli.hover(function(){//移入事件
		$(this).find('div').css({
			'visibility':'visible',
			'z-index':'2'
		});
	},function(){//移出事件
		$(this).find('div').css({
			'visibility':'hidden',
			'z-index':'-1'
		});
	});
}

function centerClick(){
	//搜索框选择宝贝/天猫/店铺
	var $searchheader = $('.searchheader ul li');
	$searchheader.click(function(){
		$searchheader.removeClass('checked');
		$(this).addClass('checked');
	});
}	


/*//调整页眉部分外边距情况
function resizeHeaderElemnt(){
	var width = document.body.clientWidth;
	if(width>1197){
		$('#header').css({
			width:'93em',
			'margin':'0 auto'});

	}
	else if(width<1196){
		$('#header').css({
			width:'100%',
			'margin':'0'});

	}

}*/
