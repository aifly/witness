<template>
	<div ref='page'  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}"   :class="{'show':show}" >

		<div class='zmiti-index-flag'>
			<img @touchstart='imgStart' :src="imgs.flag" alt="">
		</div>

		<div class='zmiti-index-text'>
			<img @touchstart='imgStart' :src="imgs.text" alt="">
		</div>

		<div class='zmiti-index-title'>
			<img @touchstart='imgStart' :src="imgs.title" alt="">
		</div>

		<div class='zmiti-index-entry' v-tap='[entry]'>
			<img @touchstart='imgStart' :src="imgs.entry" alt="">
		</div>

		<div class='zmiti-index-logo'>
			<img :src="imgs.logo" alt="">
			<span>新华社客户端</span>
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
				showSubmit:true,
				transY:0,
				pointH:0,
				points:[],
				showStartBtn:false,
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
				viewH:window.innerHeight
			}
		},
		components:{
		},
		
		methods:{

			

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


			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			})

			obserable.on('hideIndexSubmitBg',data=>{
				this.showSubmit = data;
				this.starting = !data;
			})

			var self = this;

			

		


			



		}
	}
</script>