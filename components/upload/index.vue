<template>
	<transition name='upload'>
		<div class="lt-full zmiti-upload-main-ui "  v-show='show' ref='page' :style="{background:'url('+imgs.modelBg+') no-repeat center center',backgroundSize:'cover'}">
			<div class='zmiti-upload-C ' v-if='!mergeImg'>
				<div>
					<h2>
						<img :src="imgs.uploadText" alt="">
					</h2>
					<div class='zmiti-upload'>
						<img :src="imgs.upload" alt="" @touchstart='imgStart'>
						<input  accept="image/*" type="file" class='zmiti-file' ref='file'>
					</div>
					<div class='zmiti-rechoose'>不喜欢这张?重新选择~</div>
				</div>
				<div>
					<h3>
						<img :src="imgs.sex" alt="">
					</h3>
					<div class='zmiti-upload-sex'>
						<div v-tap='[chooseSex,0]'>
							<img :src="imgs.boy" alt="" @touchstart='imgStart' >
							<div class='zmiti-sex-checked' v-if='sex === 0'>
								<img  :src="imgs.checked" alt="">
							</div>
						</div>
						<div v-tap='[chooseSex,1]'>
							<img :src="imgs.girl" alt=""  @touchstart='imgStart' >
							<div class='zmiti-sex-checked'  >
								<img  :src="imgs.checked" alt="" v-if='sex === 1'>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div v-else class='zmiti-share-ui lt-full'>
				<div><img :src="imgs.subtitle" alt=""></div>
				<div class='zmiti-merge-img'>
					<img :src="mergeImg" alt="">
					<div class='zmiti-card-info'>
						<div>新华社弄潮系列珍藏明信片</div>
						<div>
							<div>限量编号：</div>
							<div>
								<span>{{pv}}</span>/4000
							</div>
						</div>
					</div>
				</div>
				<div class='zmiti-img-tip'>长按图片保存</div>
				<div class='zmiti-share-btns'>
					<div><img :src="imgs.rephoto" alt=""></div>
					<div><img :src="imgs.share" alt=""></div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs,mainImgList} from '../lib/assets.js';
	export default {
		props:['obserable','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				pv:123,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				sex:0,
				mergeImg:imgs.model1,
				
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault();
				
			},

			chooseSex(sex){
				this.sex = sex;
			},
			

			upload(){


				var {obserable} = this;
				this.detectionError = '正在上传，请稍后';

				this.showSmileText = false;
				this.showClipPage = true;
				obserable.trigger({
               		type:'setPlay',
               		data:{
               			display:'none'
               		}
                })

				var formData = new FormData();
	  		    var s = this;


	  					
			      formData.append('setupfile', this.$refs['file'].files[0]);
			      formData.append('uploadtype', 0);
			     
			      $.ajax({
			        type: "POST",
			        contentType: false,
			        processData: false,
			        url: window.protocol+'//api.zmiti.com/v2/share/upload_file/',
			        data: formData,
			        error(e){
			        	
			        	s.detectionError = '服务器错误';
			          	setTimeout(()=>{
			          		s.detectionError = '';
			          	},2000)
			          	
			        },
			        success(data){
			        	 
				        //console.log(data);
				        //alert('服务器返回正确');
				        if (data.getret === 0) {
				        	obserable.trigger({type:'toggleMusic'});
				          var url = data.getfileurl[0].datainfourl;
				          //alert('上传成功')
				          var img = new Image();
				        	img.onload = function(){
				        		setTimeout(()=>{
				          		s.headimg = url;
				          		if(this.width>this.height){
				          			s.K = 20
				          		}
				          		//s.$emit('play-show',false);//隐藏音乐播放按钮
					          	setTimeout(()=>{
					          		s.initCanvas();
					          	},100)
					          	


					          	s.deleteImg(url);
					          	
					          },100)
				        	}
				          img.src = url
				        }else{
				        	
				        	setTimeout(()=>{
				        		s.detectionError = '';
				        	},2000)
				        }
			        }
			      });
			},

			
		},
		mounted(){

			window.s = this;
			var {obserable} = this;

		 

			obserable.on('toggleUpload',(data)=>{
				this.show = data.show;
			})
		}
	}
</script>