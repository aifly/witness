<template>
	<transition name='main'>
	
		<div class="lt-full zmiti-talk-main-ui " :class="{'show':show}" >
			
			<section class=""  :style="{height:viewH-100+'px',position:'relative'}">
				<div  ref='page1' >
					<div class="zmiti-talk-title">
						<img :src="imgs.talkTitle" alt="">
						<div class="zmiti-barrage" v-for='(barrage,i) in barrageList' :key='i'>
							<span>{{barrage.name}} : </span>
							<span>{{barrage.content}}</span>
						</div>

						<section class="zmiti-talk-pk-C">
							<div class="zmiti-pk" >
								<div>
									<img :src="imgs.team4" alt="">
									<span>{{team1.teamname}}</span>
								</div>
								<div>
									<img :src="imgs.logo1" alt="">
								</div>
								<div>
									<img :src="imgs.team3" alt="">
									<span>{{team2.teamname}}</span>
								</div>
							</div>
							<div class="zmiti-pk" v-show='false'>
								<div>
									<img :src="imgs.team1Ico" alt="">
									<span></span>
								</div>
								<div>
									<img :src="imgs.pk" alt="">
								</div>
								<div>
									<img :src="imgs.team2Ico" alt="">
									<span></span>
								</div>
							</div>
							<div class="zmiti-talk-score">
								<span>{{team1.score + " ：" + team2.score}}</span>
								
							</div>

							<div class="zmiti-countdown">
								<img :src="imgs.countdownBg" alt="">
								<span>0{{(countdown/60|0)}} : {{countdown%60<10?'0'+countdown%60:countdown%60}}</span>
							</div>
						</section>
					</div>
					<div class="zmiti-talk-content" :style="{background:'url('+imgs.talkBg+') repeat-y',height:viewH-100-350+'px'}" ref='page'>
						<ul ref='ul'>
							<li style="height:100px;"></li>
							<li style="text-align:center;
							display:block">
								<img :src="imgs.logo3" alt="" style="margin:0 auto;">
							</li>
							<li v-if='i<=index' v-for='(talk,i) in talkList' :key="i" :class="{'right':talk.className}">
								<div>
									<img class="zmiti-headimg" :src="talk.headimgurl" alt="">
									<span>{{talk.nickname}}</span>
								</div>
								<div>
									<div v-if='talk.text'>{{talk.text}}</div>
									<div v-if='talk.text && false' style="opacity:0;padding:0;">{{talk.text}}</div>
									<div v-if='talk.image' class="zmiti-talk-img">
										<img  :src="talk.image" alt="">
									</div>
									<div v-if='talk.videoposter' class="zmiti-talk-img">
										<img  :src="talk.videoposter" alt="">
									</div>
								</div>
							</li>
							<li style="height:100px;"></li>
						</ul>
					</div>
				</div>
			</section>
			<div class="zmiti-talk-form">
				<div>
					<input type="text" v-model="text" @focus='focus' ref='text'  @blur='blur'>
					<span :class="{'active':text.length>0}" v-tap='[send]'>发送</span>
				</div>
			</div>
			<div class="zmiti-result lt-full" ref='page2' v-if='result'>
				<img :src="result" alt="" @touchstart='imgStart' v-tap='[closeResult]'>
			</div>
			<div class="zmiti-tel lt-full" v-if='showTel'>
				<div>
					<img @touchstart='imgStart' :src="imgs.telBg" alt=""  >
					<input  type="number" placeholder="请输入手机号码" v-model="tel">
					<span v-tap='[closeTel]'></span>
					<div v-tap='[submit]'>确认</div>
				</div>
			</div>

			<div v-show='showResult' ref='page-result' class="zmiti-result-page lt-full" :style="{background:'url('+imgs.resultBg+') no-repeat center top',backgroundSize:'cover'}">
				<transition 
					name='zmiti-scale'
					@after-enter='afterEnter'
				>
					<div ref='createimgs' class="zmiti-createimg"  v-if='createImg'>
						<img :src="createImg" alt="">
						<div v-show='showShareBtn' class="zmiti-share-btn" v-tap='[showMask]'>分享</div>
					</div>
				</transition>
				<section v-if='!createImg'>
					<h1 style="height:100px;">
						<img :src="imgs.logo" alt="">
						新华社新媒体中心
					</h1>
					<div class="zmiti-pk" >
						<div>
							<img :src="imgs.team4" alt="">
							<span>{{team1.teamname}}</span>
						</div>
						<div>
							<img :src="imgs.logo1" alt="">
						</div>
						<div>
							<img :src="imgs.team3" alt="">
							<span>{{team2.teamname}}</span>
						</div>
					</div>
					<div class="zmiti-result-content">
						<img :src="imgs.logo3" alt="">
						<div class="zmiti-result-user">
							<div>
								<img :src="headimgurl" alt="">
								<span>{{nickname}}</span>
							</div>
							<div>
								<div>本人预测</div>
								<div>{{text1}}</div>
							</div>
						</div>
					</div>
					<div class="zmiti-zheng">
						<img :src="imgs.zheng" alt="">
					</div>
					<div class="zmiti-qrcode">
						<img :src="imgs.qrcode" alt="">
					</div>
				</section>
				<div class="zmiti-mask lt-full" v-if='showMasks' @touchstart='hideMask'>
					<img :src="imgs.arrow">
				</div>
			</div>
			
			<Toast :msg='errorMsg'></Toast>
		</div>
	
	</transition>
</template>

<script>
	import './index.css';
	
	import {
	
		imgs
	
	} from '../lib/assets.js';
	import Toast from '../toast/toast'

	import IScroll from 'iscroll';
	
	import $ from 'jquery';
	
	import zmitiUtil from '../lib/util';

	import Team from '../team/index';
	export default {
	
		props: ['obserable', 'pv', 'randomPv'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				imgs,
				text:'',
				text1:'',
				showTeam: false,
				showQrcode: false,
				show: false,
				team1:{},
				points:"",
				team2:{},
				nickname:'',
				headimgurl:'',
				createImg:"",
				showShareBtn:false,
				viewW: window.innerWidth,
				viewH: window.innerHeight,
				showMasks: false,
				barrageList:[],
				result:'',
				index:-1,
				errorMsg:"",
				showTel:false,
				tel:NaN,
				talkList:[],
				countdown:120,
				stop:false,
				showResult:false
			}
		},
	
		components: {
			Team,
			Toast
		},
		methods: {

			hideMask(){
				this.showMasks = false;
			},
			imgStart(e){
				e.preventDefault(); 
			},
			showMask(){
				this.showMasks = true;
			},
			focus(){
				//this.stop = true;
			},
			blur(){
				//this.stop = false;
			},
			afterEnter(){
				this.showShareBtn = true;
			},
			send(){
				if(!this.text){
					return;
				}
				var s = this;

				this.$refs['text'].blur();
				this.text1 = this.text;

				this.headimgurl = window.headimgurl || imgs.logo;
				this.nickname = window.nickname||'新华社网友'; 
			
				s.talkList.splice(s.index+1,0,{
					"headimgurl":window.headimgurl || imgs.logo,
					"nickname":window.nickname||'新华社网友',
					"text": s.text,
					"image": '',
					"className":"right",
					"video":'',
					"isreverse":true,
					"videoposter":''
				});

				setTimeout(() => {
					s.text = '';
					
					s.index++;
					s.stop = true;
					clearInterval(this.timer)	
					setTimeout(() => {
						if(this.viewH-100-350 - this.$refs['ul'].offsetHeight<=0){
							this.scroll.scrollTo(0,this.viewH-100-350 - this.$refs['ul'].offsetHeight,100);
						}
						this.scroll.refresh();
						this.showTel = true;
					}, 500);
				}, 400);

				return;
				/* $.ajax({
					type:'post',
					url:'http://119.84.122.135:27701/reply/1',
					data:'{"msg": "'+s.unicode(s.text)+'"}',
					success(data){
						s.text = '';
						data = JSON.parse(data);
						if(data.code === 0){
							data.list.forEach(list=>{
								s.talkList.splice(s.index+2,0,{
									"headimgurl":list.headimgurl,
									"nickname":list.nickname,
									"text": list.text,
									"image": list.image,
									"className":"",
									"video":list.video,
									"isreverse":list.isreverse,
									"videoposter":list.videoposter
								});
								
							});
							
							setTimeout(() => {
								s.scroll.refresh();
							}, 500);
						}
						
					}
				}) */
			},
			restart() {
				window.location.href = window.location.href.split('?')[0];
			},
			getBarrage(){//获取弹幕
				var s = this;
				$.ajax({
					url:"http://115.231.251.252:26020/web/search/common/weiboCluster/select?word=俄罗斯+沙特+(开幕|换帅|((球员|队员)+受伤)|(主帅+解约)|黄牌|分档|东道主|决赛|预选赛|进球|失球|胜球|犯规|淘汰赛|裁判|教练|禁赛|死球|罚球|点球|任意球|角球|界外球|警告|球门球|违规|判罚|守门员|获胜|冠军|亚军|季军|夺冠|主帅|新帅|停赛|小组赛|输球|突围|世界杯)&starttime=20180614&endtime=20180614&token=f43e78cc-9c39-4583-b7bf-ef3d2fcaa311",
					data:{},
					success(data){
						console.log(data);
						if(typeof data === 'string'){
							try {
								data = JSON.parse(data);
								data.results.map((re)=>{
									if(re.Content.length<=15){
										s.barrageList.push({
											"name":re.Author,
											"content":re.Content
										})
									}
								})
							} catch (error) {
								
							}
						}
					}
				})

				return;
				$.getJSON("./assets/data/barrage.json",(data)=>{
					if(data.code === 0){
						s.barrageList = data.list;
					}
				});
			},
			unicode(str){ 
				return str.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"\\u$2")}); 
			},
			closeResult(){
				this.result = '';
				this.showTel = true;
			},
			closeTel(){
				this.showTel = false;
			},
			submit(){
				var s = this;
				if(!s.tel || !/^[1][3,4,5,7,8][0-9]{9}$/.test(s.tel)){
					s.errorMsg = '请填写正确的手机号码';
					setTimeout(() => {
						s.errorMsg = '';
					}, 1000);
					return;
				}
				$.ajax({
					url:"http://h5.zhongguowangshi.com/interface/public/index.php?s=v2/user/saveh5userinfo",
					type:'post',
					data:{
						h5name:window.h5name,
						mobile:s.tel
					},
					success(data){
						if(data.getret === 0){
							s.errorMsg = '提交成功';
							setTimeout(() => {
								s.errorMsg = '';
								s.showTel = false;
								s.showResult = true;
								setTimeout(() => {
									s.html2img('page-result');	
								}, 600);
							}, 1000);
						}else{
							s.errorMsg = '提交失败';
							setTimeout(() => {
								s.errorMsg = '';
								s.showTel = false;
							}, 1000);
						}
						
					}
				})
			},
			html2img(ref='page1'){
				var s = this;
				this.showBtns = false;

				//zmitiUtil.wxConfig('我是第'+(s.pv)+'位种树者',window.desc)
				var {obserable} = this;
				setTimeout(()=>{
					var dom = this.$refs[ref];
					html2canvas(dom,{
						useCORS: true,
						onrendered: function(canvas) {
					        var url =  canvas.toDataURL('image/jpg');

							 s.createImg = url;
					      },
					      width: dom.clientWidth,
					      height:dom.clientHeight
					})
				},1000)
			},
			getTalk(){
				var s = this;
				/* $.getJSON("./assets/data/talk.json",(data)=>{
					if(data.code === 0){
						s.talkList = data.list;

						setTimeout(() => {
							s.scroll.refresh()
						}, 100);
					}
				}); */
				$.ajax({
					type:'get',
					url:'http://119.84.122.135:27701/reply/1',
					data:{
						
					},
					success(data){
						try {
							data = JSON.parse(data);
							console.log(data)
							if(data.code === 0){
								s.talkList = data.list;
								var arr = [];
								s.talkList.map((item)=>{
									if(item.image){
										arr.push(item.image)
									}
									if(item.headimgurl){
										arr.push(item.headimgurl);
									}
								})
								s.loading(arr,(e)=>{
									//console.log(e)
								});
								s.talkList.push({
									"headimgurl":imgs.cow,
									"nickname":'小牛',
									"text": '我同意小新的观点',
									"image": '',
									"className":"",
									"video":'',
									"isreverse":false,
									"videoposter":''
								});

								setTimeout(() => {
									s.scroll.refresh()
								}, 100);
							}
						} catch (error) {
							
						}
						

						
					}
				})

				
				
			},
			loading: function(arr, fn, fnEnd) {
				var len = arr.length;
				var count = 0;
				var i = 0;

				function loadimg() {
					if (i === len) {
						return;
					}
					var img = new Image();
					img.onload = img.onerror = function() {
						count++;
						if (i < len - 1) {
							i++;
							loadimg();
							fn && fn(i / (len - 1), img.src);
						} else {
							fnEnd && fnEnd(img.src);
						}
					};
					img.src = arr[i];
				}
				loadimg();
			},
			imgStart(e){
				e.preventDefault(); 
			},
			
		},
	
		mounted() {
			window.s = this;

			this.scroll = new IScroll(this.$refs['page'],{
				scrollbars:true,
				///bounce:false
			});

			this.getBarrage();
			this.getTalk();
			var {obserable} = this;
			obserable.on('entryTalk',(data)=>{

				this.show = true;
				this.team1 = data.team1;
				this.team2 = data.team2;
				this.points = data.points;
				var iNow = 0;

				
				this.timer = setInterval(()=>{
					if(this.stop){
						return;
					}
					this.countdown--;
					if(this.countdown<=0){
						var result1 = 0,result2 = 0;
						this.talkList.forEach((item,i)=>{
							if(item.isreverse){
								result1++;
							}else{
								result2++;
							}
						});
						
						if(result1>result2){
							this.result = imgs.result1
						}else{
							this.result = imgs.result2;
						}
						///this.html2img('page2');
						setTimeout(() => {
							this.closeResult();
						}, 2000);
						clearInterval(this.timer);
					}
					iNow++;
					if(iNow%2===0){
						this.index++;
						if(this.index <= this.talkList.length -1){
							setTimeout(() => {
								if(this.viewH-100-350 - this.$refs['ul'].offsetHeight<=0){
									this.scroll.scrollTo(0,this.viewH-100-350 - this.$refs['ul'].offsetHeight,100);
								}
								this.scroll.refresh();
							}, 100);
						}
						if(this.index>=this.talkList.length-1){
							this.index  = this.talkList.length -1;
						}

						
						
					}
				},1000);

				 


			});
		}
	
	}
</script>