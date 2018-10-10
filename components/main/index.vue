<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" :style="{background:'url('+imgs.modelBg+') no-repeat center center',backgroundSize:'cover'}">
			
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
				<img @touchstart='imgStart' :src="imgs.sure" alt="">
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
					<div class='zmiti-goto-photo'>
						<img @touchstart='imgStart' :src="imgs.sure" alt="">
					</div>
					<div class='zmiti-model-close' v-tap='[closeModel]'></div>
				</div>
				<div class='zmiti-progress'>
					<span :style="{WebkitTransform:'scale('+(index/(modelList.length-1))+',1)'}"></span>
				</div>
			</div>
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
	import IScroll from 'iscroll';
	
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				imgs,
				showTeam: false,
				showQrcode: false,
				show: false,
				modelList,
				current:-1,
				index:-1,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				showMasks: false,
			}
		},
	
		components: {},
		methods: {
			swiperight(){
				this.index--;
				this.index = Math.max(this.index,0)
			},
			swipeleft(){
				this.index++;
				this.index = Math.min(this.index,this.modelList.length-1)
			},

			closeModel(){
				this.index =  -1;
			},
			toggleModel(index,e){
				this.current =this.current === index?  -1: index;
				
			},
			restart() {
				window.location.href = window.location.href.split('?')[0];
			},
			imgStart(e){
				e.preventDefault();
			},
			share() {
				this.showMasks = true;
			},
			getDetail(index){
				this.index = index;
			}
		},
	
		mounted() {
			window.s = this;

			this.scroll = new IScroll (this.$refs['modellist'],{

			});

			setTimeout(() => {
				this.scroll.refresh();
			},1000);
		}
	
	}
</script>