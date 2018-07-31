<!--  -->
<template>
	<div class='footerPart'>
		<div class="w footerCon">
			<span >
				<img src="./img/bottom-logo.png" alt="bottomLogo">
			</span>
			<p>联系电话：022-2582485</p>
			<p>地址：中关村南大街阳光培训楼12层</p>
			<p>Copyright @ 2002-2009 DEDECMS. 织梦科技版权所有</p>
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'footerPart',
	data() {
		return {
			// msg: '这是底部',
		};
	},

	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.footerPart {
	padding: 0;
	height: 158px;
	background: #333;
}
.footerCon{
	// height: 100%;
	padding: 30px 0;
	position: relative;
	&>span{
		position: absolute;
		top: 30px;
		left: 185px;
		height: 92px;
		width: 85px;
	}
	&>p{
		color: #fff;
		text-align: center;
		font-size: 16px;
		padding: 6px 0;
	}
}
</style>