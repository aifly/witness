<template>
	<transition name='upload'>
		<div class="lt-full zmiti-upload-main-ui "  v-show='show' ref='page' :style="{background:'url('+imgs.modelBg+') no-repeat center center',backgroundSize:'cover'}">
			<div class='zmiti-upload-C ' v-if='!mergeImg'>
				<div>
					<h2>
						<img :src="imgs.uploadText" alt="">
					</h2>
					<div class='zmiti-upload' :class="{'uploading':uploading}">
						<img v-tap='[uploadErr]' :src="imgs.upload" alt="" @touchstart='imgStart'>
						<div>上传中...</div>
						<input v-if='sex>-1' @change='upload'  accept="image/*" type="file" class='zmiti-file' ref='file'>
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
					<div class='zmiti-nickname'>
						{{nickname||'fly'}}
					</div>
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
					<div v-tap='[rephoto]'><img :src="imgs.rephoto" alt=""></div>
					<div v-tap='[showShareMask]'><img :src="imgs.share" alt=""></div>
				</div>
			</div>
			<div class='zmiti-share-mask lt-full' v-if='showMask' @touchend='showMask = false'>
				<img :src="imgs.arrow" alt="">
			</div>
			<Toast :errorMsg='errMsg'></Toast>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs,mainImgList} from '../lib/assets.js';
	import Toast from '../toast/toast.vue'
	export default {
		props:['obserable','pv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:false,
				errMsg:'',
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				sex:-1,
				modelArr,
				mergeImg:'',
				showMask:false,
				uploading:false
				
			}
		},
		components:{
			Toast
		},
		
		methods:{

			imgStart(e){
				e.preventDefault();
			},

			chooseSex(sex){
				this.sex = sex;
			},

			showShareMask(){
				this.showMask = true;
			},
			rephoto(){
				this.show = false;
				this.mergeImg = false;
				var {obserable} = this;
				obserable.trigger({
					type:'toggleMain',
					data:{
						show:true
					}
				})
			},
			uploadErr(){
				this.errMsg = '请先选择性别';
				setTimeout(() => {
					this.errMsg = '';
				}, 2000);
			},

			upload(){
				var s = this;
				var file = this.$refs['file'].files[0];
				if(file.name.split('.')[1] === 'jpg'||file.name.split('.')[1] === 'jpeg'){

					var reader = new FileReader();
					reader.onload = function(){
						//console.log(this.result);
						var self = this;
						s.uploading = true;
						$.ajax({
							type:'post',
							url:window.config.baseUrl+'/xhs-security-activity/postcard/uploadImage',
							dataType: 'JSON',
							charset:"utf-8",
							contentType:"application/json",
							data:JSON.stringify({
								secretKey:window.config.secretKey,
								modelId:s.modelArr[s.sex],
								imgData:self.result.replace('data:image/jpeg;base64,','')
							}),
							success(data){
								s.uploading = false;
								if(typeof data === 'string'){
									var data = JSON.parse(data);
								}
								if(data.rc===0){
									s.mergeImg = data.data.imgUrl;
								}
								else{
									s.errMsg = data.msg;
									setTimeout(() => {
										s.errMsg = '';
									}, 2000);
								}



							}
		
						})
					}
					reader.readAsDataURL(file);
					return;
					
				}else{
					this.errMsg = '只允许上传jpg的图片';
					setTimeout(() => {
						this.errMsg = '';
					}, 2000);
				}
				
			},

			
		},
		mounted(){

			window.s = this;
			var {obserable} = this;

		 

			obserable.on('toggleUpload',(data)=>{
				this.show = data.show;
				this.modelIndex = data.modelIndex;
				console.log(this.modelIndex)
			})
		}
	}
</script>