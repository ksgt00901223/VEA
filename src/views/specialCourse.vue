<!-- 特色课程 -->
<template>
	<div class='specialCourse'>
		<div class="topBg por">
			<loginBox></loginBox>
		</div>
		<el-row class="specialInfo">
			<el-row class="head"></el-row>
			<el-row class="info">
				<el-row class="content">
					ssssss
				</el-row>
				<el-row class="back tac">
					<router-link :to="{path:'/'}" class="cfff">
						<el-button type="primary" class="tac" style="width:200px">
							<i class="el-icon-back"></i>
							<span style="padding:5px">返回首页</span>
						</el-button>
					</router-link>
				</el-row>
			</el-row>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
import loginBox from '@/components/box/loginBox.vue';

export default {
	name: 'specialCourse',
	data() {
		return {};
	},

	components: {
		loginBox,
	},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.specialCourse {
	.topBg {
		height: 660px;
		background: url(../assets/img/index/topBg.png) no-repeat center;
		background-size: 100% 100%;
	}
	.specialInfo {
		width: 1200px;
		padding: 20px 0 35px;
		margin: 0 auto;

		.head {
			height: 108px;
			background: url(../assets/img/index/specialHead.png) no-repeat center;
		}
		.info {
			padding: 30px 0;
			box-shadow: 0px 0px 13px #e8e8e8;
			.content {
				min-height: 500px;

				width: 900px;
				margin: 0 auto;
			}
		}
	}
}
</style>