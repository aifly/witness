<template>
	<div ref='page'  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.loadingBg1+') no-repeat center center',backgroundSize:'cover'}"   :class="{'show':show}" >

		<div class='zmiti-book1' style='opacity:0' :class="{'active':showBook}" >
			<img :src="imgs.book1" alt="">
		</div>
		<div class='zmiti-nongchao'>
			<img :src='imgs.nongchao'/>
		</div>
		

		<transition name='model'>
			<div v-if='showModelList && false' class='zmiti-model-list'>
				<div :class='{"active":reverse}' @transitionend='end' v-for='(model,i) in modelList' :key="i" :style="{WebkitTransform:'translate3d('+( model.transX || 0 )+'px,'+ ( model.transY || 0 ) +'px,0) scale('+(model.scale===undefined?1:model.scale)+') rotate('+( model.rotate||0 ) + 'deg) '}">
					<img :src="model.url" alt="">
				</div>
			</div>	
		</transition>
		
			<div class='zmiti-index-main' >
				<transition name='model'>
					<div class='zmiti-index-title'  v-if='!showModelList'>
						<div>
							<img @touchstart='imgStart' :src="imgs.we" alt="">
						</div>
						<div :class='{"active":showTitle}'>
							<img :src='imgs.nongchaoer' alt="">
						</div>
						<div :class='{"active":showTitle}'>
							<img :src='imgs.dingzhi' alt="">
						</div>

					</div>
				</transition>
				<transition name='model'>
					<div class='zmiti-index-entry' v-tap='[entry]'  v-if='!showModelList'>
						<img @touchstart='imgStart' :src="imgs.entry" alt="">
					</div>
				</transition>
				<transition name='model'  >
					<div class='zmiti-index-logo' v-if='!showModelList'>
						<div>
							<img :src="imgs.logo" alt="">
							<span>新华社客户端</span>
						</div>
						<div>
							<img :src="imgs.pitu" alt="">
							<span>天天P图</span>
						</div>
					</div>
				</transition>
			</div>
		
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import {zmitiUtil} from '../lib/util';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				pointW:0,
				showBook:false,
				modelList,
				showTitle:false,
				showSubmit:true,
				transY:0,
				pointH:0,
				points:[],
				showStartBtn:false,
				showModelList:true,
				index:-1,
				showOthers:true,
				showRemark:false,
				organizationArr:window.organizationArr,
				showLight:false,
				starting:false,
				planeClass:'',
				show:true,
				maxHeight:80,
				showjiasu:false,
				showIndexMask:false,
				viewW:Math.min(window.innerWidth,750),
				viewH:window.innerHeight,
				count:0,
				reverse:false,
			}
		},
		components:{
		},
		
		methods:{
			endBook(){
				this.modelList.forEach((model,i)=>{

					model.rotate = Math.random()*60*(Math.random()>.5?-1:1);
					model.transX = (this.viewW - 260) * Math.random();
					model.transY = (this.viewH/2 ) * Math.random();

				});
				this.reverse = true;
				this.showModelList = false;
				setTimeout(() => {
					this.showTitle = true;
					
				}, 1200);
			},
			end(e){
				this.count++;
				if(this.count>=this.modelList.length){
					setTimeout(() => {
						this.reverse = true;
						//this.showModelList = false;
						this.modelList.forEach((model,i)=>{
							model.scale = 0;
						});
					}, 500);
				}
				if(this.count>=this.modelList.length*2-1){
					this.reverse = true;
					this.showModelList = false;
					setTimeout(() => {
						
					}, 1200);
				}
			},

			imgStart(e){
				e.preventDefault(); 
			},
			entry(){
				this.show =false;
				var {obserable} = this;
				this.show = false;
				obserable.trigger({
					type:'toggleMain',
					data:{
						show:true
					}
				})
			}
		},
		mounted(){

			var {obserable} = this;

			setTimeout(() => {
				this.showBook = true;
				this.endBook();
			}, 100);

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
				this.showBook =!data.show;
				
			});

			

			obserable.on('hideIndexSubmitBg',data=>{
				this.showSubmit = data;
				this.starting = !data;
			})

			var self = this;

			

		


			



		}
	}
</script>