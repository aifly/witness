<template>
	<div  class="lt-full zmiti-share-main-ui " :style="{background:'url('+imgs.modelBg+') no-repeat center top',backgroundSize:'cover'}"   :class="{'show':show}">
		<div class='zmiti-share-subtitle'>
			<img :src="imgs.subtitle" alt="">
		</div>
		<div class='zmiti-share-main'>

		</div>
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import '../lib/html2canvas';
	export default {
		props:['obserable','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				
				viewW:document.documentElement.clientWidth,
				showBtns:false,
				viewH:document.documentElement.clientHeight,

			}
		},
		components:{
		},
		
		methods:{


		
			imgStart(e){
				e.preventDefault();
			},
		

			share(){
				this.showMasks = true
			},

			rechoose(){
				var {obserable} = this;
				obserable.trigger({
					type:'toggleShare',
					data:{
						show:false,
						index:-1,
						headimg:''
					}
				});
				obserable.trigger({
					type:'clearFile'
				});
				this.index = -1;
				this.headimg = '';
				this.createImg = '';
			},

			afterEnter(){
				this.showBtns = true;
			},
			html2img(){
				var s = this;

				var {obserable} = this;



				//document.title = '开始截图....'


				setTimeout(()=>{
					//this.showLoading = true;
					var ref = 'zmiti-cache-page';
					var dom = this.$refs[ref];
					html2canvas(dom,{
						useCORS: true,
						onrendered: function(canvas) {

					        var src = canvas.toDataURL();
					        s.createImg = src;
		             		s.showBtns = true;
		             		s.showLoading = false;

		             		obserable.trigger({
								type:'playVoice',
								data:"photo"
							})

		             		setTimeout(()=>{
		             			//document.title=s.viewH+','+(s.$refs['createimgs'].offsetHeight*1.2)
								s.$refs['createimgs'].style.WebkitTransform = 'scale('+s.viewH/(s.$refs['createimgs'].offsetHeight*1.2)+')'

								///s.deleteImg(s.headimg);

								
							},100);



							$.ajax({
					          url:window.protocol+'//'+window.server+'.zmiti.com/v2/share/base64_image/',
					          type: 'post',
					          data: {
					            setcontents: src,
					            setwidth: dom.clientWidth,
					            setheight:dom.clientHeight
					          },
					          success: function(data) {
					            if (data.getret === 0) {
					            	//s.deleteImg(dt.img);
						            var src = data.getimageurl;
									var url = window.location.href.split('#')[0];
					            	console.log(src);

									url = zmitiUtil.changeURLPar(url,'src',src);
									url = zmitiUtil.changeURLPar(url,'num',s.pv);
									zmitiUtil.wxConfig('我是第'+s.pv+'位为雄安过周岁者',window.desc,url);
									
								       
					            }

					          }
					        })

							/*zmitiUtil.wxConfig(window.zmitiConfig.shareTitle.replace(/{{totalPv}}/ig, s.totalpv),
							window.zmitiConfig.shareDesc.replace(/{{periods}}/ig, s.periodsUpper[window.zmitiConfig.periods - 1]).replace(/{{pv}}/ig, s.randomPv));*/
					      },
					      width: dom.clientWidth,
					      height:dom.clientHeight
					})
				},100)
			},
			deleteImg(url){//删除原图

				setTimeout(()=>{
					$.ajax({
						url: window.protocol+'//api.zmiti.com/v2/share/delete_file/',
						type:'post',
						data:{
							filepath:url
						},
						success(data){
							console.log(data);
						}
					})

				},2000)
			},
			
			
		},
		mounted(){

			var dt = new Date();

			var year = dt.getFullYear();
			var month = dt.getMonth() + 1;
			var date = dt.getDate();

			this.date = year + ' / ' + month + ' / '+ date;
			var {obserable} = this;

			obserable.on('toggleShare',(data)=>{

				this.show = data.show;

			 
			})

		 


		}
	}
</script>