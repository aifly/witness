<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" >
			<div  class='lt-full' :style="{background:'url('+imgs.loadingBg+') no-repeat center center',backgroundSize:'cover'}"></div>
			<!-- <div class='zmiti-book1' :class="{'active':true}" >
				<img :src="imgs.book1" alt="">
			</div>
			<div class='zmiti-book2' :class="{'active':true}">
				<img :src="imgs.book2" alt="">
			</div> -->
			<div class='zmiti-main-C' :class='{"show":show}'>
				<div class=''>
					<img :src="imgs.choose" alt="">
				</div>
				<div class="zmiti-model-list"  id="zmiti-model-list">
					<ul v-swipeleft='swipeLeft' v-swiperight='swipeRight'  >
						<li  :class="model.className" 
						class="lt-full" v-for='(model,index) in modelList' :key="index" >
							<div class="zmiti-model-title">
								<img v-if='model.url' :src="model.url">
								<span hidden="">{{index+1}}</span>
							</div>
						</li>
					</ul>
					<div class="zmiti-ar" @touchend='initRight'>
						<div>
							<img :src="imgs.ar" alt="">
						</div>
					</div>

					<div class="zmiti-ar zmiti-ar1" @touchend='initLeft'>
						<div>
							<img :src="imgs.ar" alt="">
						</div>
					</div>
				</div>
				<div @click='sure'>
					<img :src="imgs.sure" alt="">
				</div>
			</div>
			<!--
				<div class='zmiti-model-list' ref='modellist' :style="{height:viewH*.83+'px'}">
					<ul v-show='index<=-1'>
						<li>
							<div   v-if='i%2===0' v-for='(model,i) in modelList' :key="i">
								<img v-tap='[getDetail,i]' @touchstart='imgStart' :src="model.url" alt="">
								<img @touchstart='imgStart' v-tap='[toggleModel,i]'  :src='imgs.imgBar' class='zmiti-checked'/>
								<img @touchstart='imgStart'  v-tap='[toggleModel,i]' v-if='current === i' :src="imgs.checked" alt="" class='zmiti-active'>
							</div>
						</li>
						<li>
							<div  v-if='i%2===1' v-for='(model,i) in modelList' :key="i">
								<img v-tap='[getDetail,i]' @touchstart='imgStart' :src="model.url" alt="">
								<img @touchstart='imgStart' v-tap='[toggleModel,i]'   :src='imgs.imgBar' class='zmiti-checked'/>
								<img  @touchstart='imgStart' v-tap='[toggleModel,i]'  v-if='current === i' :src="imgs.checked" alt="" class='zmiti-active'>
							</div>
						</li>
					</ul>
				</div>

				<div class='zmiti-done' v-show='index<=-1'>
					<img @touchstart='imgStart' :src="imgs.sure" alt="" v-tap='[chooseModel]'>
					<img :src="imgs.info" alt="" class='zmiti-info'>
				</div>

				<div class='zmiti-model-list-mask lt-full' v-if='index>-1' v-swipeleft='swipeleft' v-swiperight='swiperight'>
					<ul  :style="{width:viewW*modelList.length+'px',WebkitTransform:'translate3d(-'+(index*viewW)+'px,0,0)'}">
						<li v-for="(model,i) in modelList" :key='i'>
							<div>
								<div class='zmiti-model-detail-img'>
									<img @touchstart='imgStart' :src="model.url" alt="">
								</div>
							</div>
						</li>
					</ul>
					<div class='zmiti-photo-C'>
						<div class='zmiti-goto-photo' v-tap='[chooseModel]'>
							<img @touchstart='imgStart' :src="imgs.sure" alt="">
						</div>
						<div class='zmiti-model-close' v-tap='[closeModel]'></div>
					</div>
					<div class='zmiti-progress'>
						<span :style="{WebkitTransform:'scale('+(index/(modelList.length-1))+',1)'}"></span>
					</div>
				</div> `
			-->
			<Toast :errorMsg='errMsg'></Toast>
		</div>

	</transition>
</template>

<script>
	import './index.css';
	
	import {
	
		imgs,
	
		mainImgList
	
	} from '../lib/assets.js';
	
	import zmitiUtil from '../lib/util';
	import Toast from '../toast/toast.vue'
	
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				errMsg:'',
				imgs,
				showTeam: false,
				showQrcode: false,
				show: false,
				modelList,
				current:-1,
				currentIndex:-1,
				iNow:0,
				index:0,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				showMasks: false,
			}
		},
	
		components: {Toast},
		methods: {
			swipeLeft(){
				var s = this;
				this.isLeftFirst = true;
				this.iNow = (s.currentIndex + 1) % s.modelList.length;
				this.initLeft();
			},
			swipeRight(){
				var s = this;
				this.iNow = s.currentIndex-1;
				if(this.iNow<0){
					this.iNow = this.modelList.length - 1;
				}
				this.isRightFirst=  true;
				this.initRight();
			},
			initLeft: function() {
				var s = this;
				
				s.currentIndex = (s.currentIndex + 1) % s.modelList.length;
				
				//s.loadMusic(s.modelList[s.currentIndex].audio);
				//this.iNow = s.currentIndex;
				var classList = [
					'left1 transition',
					'left transition',
					'active transition',
					'right ',
					'right1 '
				]
				var modelList = s.modelList,
					currentIndex = s.currentIndex;


				modelList.forEach(function(list, i) {

					if (currentIndex > i) {
						modelList[i].className = classList[0]
					} else if (currentIndex < i) {
						modelList[i].className = classList[4]
					}
					(modelList[currentIndex + 1] || modelList[0])['className'] = classList[3];
					(modelList[currentIndex + 2] || modelList[1])['className'] = classList[4];
					(modelList[currentIndex - 1] || modelList[modelList.length - 1])['className'] = classList[1];
					//(modelList[currentIndex - 2] || modelList[modelList.length - 2])['className'] = classList[0];
				});

				modelList[currentIndex].className = classList[2];
				s.modelList = modelList.concat([]);
			},
			initRight: function() {

				var s = this;
				s.currentIndex = s.currentIndex - 1;

				if (s.currentIndex < 0) {
					s.currentIndex = s.modelList.length - 1;
				}
				//this.iNow = s.currentIndex;
				
				var modelList = s.modelList,
					currentIndex = s.currentIndex;


				//console.log(s.currentIndex)

				s.currentIndex = s.currentIndex % modelList.length;

				var classList = [
					'left1 ',
					'left ',
					'active transition',
					'right transition',
					'right1 transition'
				]

				modelList.forEach(function(list, i) {

					if (currentIndex > i) {
						modelList[i].className = classList[0]
					} else if (currentIndex < i) {
						modelList[i].className = classList[4]
					}

					(modelList[currentIndex + 1] || modelList[0])['className'] = classList[3];
					(modelList[currentIndex + 2] || modelList[1])['className'] = classList[4];
					(modelList[currentIndex - 1] || modelList[modelList.length - 1])['className'] = classList[1];
					//(modelList[currentIndex - 2] || modelList[modelList.length - 2])['className'] = classList[0];
				})



				modelList[currentIndex].className = classList[2];
				s.modelList = modelList.concat([]);
			},
			sure(){
				var s = this;
				this.obserable.trigger({
					type:'toggleUpload',
					data:{
						modelIndex:s.currentIndex,
						show:true
					}
				});
				this.show = false;
			},
			restart() {
				window.location.href = window.location.href.split('?')[0];
			},
			imgStart(e){
				e.preventDefault();
			},
			
		},
	
		mounted() {
			window.ss = this;

			
			this.initLeft();

			var {obserable } = this;
			obserable.on('toggleMain',(data)=>{
				this.show = data.show;
				
			})
		}
	
	}
</script>
