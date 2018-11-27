var imgs = {
	logo: './assets/images/logo.png',
	arrow: './assets/images/arrow.png',
	play: './assets/images/play.png',
	model1:'./assets/images/1-3.jpg',
	model2:'./assets/images/2-3.jpg',
	model3:'./assets/images/3-3.jpg',
	model4:'./assets/images/4-3.jpg',
	model5:'./assets/images/5-3.jpg',
	model6:'./assets/images/6-3.jpg',
	model7:'./assets/images/7-3.jpg',
	model8:'./assets/images/8-3.jpg',
	model9:'./assets/images/9-3.jpg',
	model10:'./assets/images/10-3.jpg',
	model11:'./assets/images/11-3.jpg',
	model12:'./assets/images/12-3.jpg',
	loadingBg: './assets/images/loading-bg1.jpg',
	shareBg: './assets/images/share-bg.jpg',
	loadingBg1: './assets/images/loading-bg1.jpg',
	btnBg: './assets/images/btn-bg.png',
	book1:'./assets/images/book1.png',
	ar:'./assets/images/ar.png',
	book2:'./assets/images/book2.png',
	choose:'./assets/images/choose1.png',
	1978:'./assets/images/1978-1.png',

	entry:'./assets/images/entry.png',
	nongchao:'./assets/images/nongchao.png',
	nongchaoer:'./assets/images/nongchaoer.png',
	dingzhi:'./assets/images/dingzhi.png',
	we:'./assets/images/we.png',
	pitu:'./assets/images/pitu.png',
	checked:'./assets/images/checked.png',
	boy:'./assets/images/boy.png',
	girl:'./assets/images/girl.png',
	subtitle:'./assets/images/subtitle1.png',
	upload:'./assets/images/upload.png',
	rephoto:'./assets/images/rephoto1.png',
	share:'./assets/images/share1.png',
	title:'./assets/images/title2.png',
	sure:'./assets/images/sure.png',
	sex:'./assets/images/sex.png',
	uploadText: './assets/images/upload-text1.png'




	
}
 

var modelArr = [
	
	[
		'pitu_open_1000117_20181011171935_245',
		'pitu_open_1000117_20181011171953_246'
	],
	[
		'pitu_open_1000117_20181011172001_247',
		'pitu_open_1000117_20181011172008_248'
	],
	[
		'pitu_open_1000117_20181011172145_251',
		'pitu_open_1000117_20181011172155_252'
	],
	[
		'pitu_open_1000117_20181026145035_274',
		'pitu_open_1000117_20181026145046_275'
	],
	[
		'pitu_open_1000117_20181011172334_255',
		'pitu_open_1000117_20181011172423_256'
	],
	[
		'pitu_open_1000117_20181026145058_276',
		'pitu_open_1000117_20181026145106_277'
	],
	[
		'pitu_open_1000117_20181011172517_259',
		'pitu_open_1000117_20181011172523_260'
	],
	
	[
		'pitu_open_1000117_20181011172529_261',
		'pitu_open_1000117_20181011172609_262'
	],
	[
		'pitu_open_1000117_20181026145116_278',
		'pitu_open_1000117_20181026145123_279'
	],
	[
		'pitu_open_1000117_20181011172702_265',
		'pitu_open_1000117_20181011172749_266'
	],

	[
		'pitu_open_1000117_20181026145132_280',
		'pitu_open_1000117_20181026145139_281'
	],
	[
		'pitu_open_1000117_20181011172815_269',
		'pitu_open_1000117_20181011172852_270'
	]
]

var arr = [];
window.modelList = [

];
this.viewW = window.innerWidth;
this.viewH = window.innerHeight;
for(var i = 1 ;i<=12;i++){
	var x = (this.viewW * Math.random()) + (Math.random() > .5 ? this.viewW * 2 : -1 * this.viewW * 2),
		y = (this.viewH * Math.random()) + (Math.random() > .5 ? this.viewH * 2 : -1 * this.viewH * 2);
	window.modelList.push({
		url:imgs['model'+i],
		transX: this.viewW/2 - 130,
		transY: 150,
		defaultX:0,
		defaultY:0
	})
}

for (var attr in imgs) {
	arr.push(imgs[attr]);
}

window.config = {
	baseUrl: 'https://xlive.xinhuaapp.com',
	secretKey: "e9469538b0623783f38c585821459454"
}
 
var musics = {
	music: {
		src: './assets/music/bg4.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
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