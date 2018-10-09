var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	arrow: './assets/images/arrow.png',
	logo2: './assets/images/logo6.png',
	resultBg: './assets/images/result-bg.jpg',
	indexTitle: './assets/images/index-title.png',
	point:'./assets/images/point.png',
	team1:'./assets/images/team1.png',
	team1Ico:'./assets/images/team-ico1.png',
	team2Ico:'./assets/images/team-ico2.png',
	team2:'./assets/images/team2.png',
	team3:'./assets/images/team3.png',
	team4:'./assets/images/team4.png',
	logo1:'./assets/images/logo1.png',
	logo3:'./assets/images/logo4.png',
	pk:'./assets/images/pk.png',
	zheng:'./assets/images/zheng.png',
	qrcode:'./assets/images/qrcode.png',
	cow:'./assets/images/cow.png',
	talkTitle:'./assets/images/talk-title.jpg',
	talkBg:'./assets/images/talk-bg.jpg',
	vs:'./assets/images/vs.png',
	result1:'./assets/images/result1.png',
	result2:'./assets/images/result2.png',
	telBg:'./assets/images/tel-bg1.png',
	xiaoxin:'./assets/images/xiaoxin.png',
	countdownBg:'./assets/images/countdown-bg.png',
	xiaoxinTextBg:'./assets/images/xiaoxin-text-bg.png',
	
	
	indexBg: './assets/images/index-bg.jpg',
	entry:'./assets/images/entry.png'

	
}
 


var arr = [];


for (var attr in imgs) {
	arr.push(imgs[attr]);
}
 
var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
};

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();