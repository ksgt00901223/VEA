<!-- 教师报告列表 -->
<template>
	<div class='reportList r10'>
		<div class="reportListHead bg-line-blue">
			<el-row style="padding-left:30px">
				<el-col :span='2'>
					<i class="iconfont icon-playback fz30" v-if="type==1"></i>
				</el-col>
				<el-col :span='17' :offset='5' class="headTit"> {{title}} </el-col>
			</el-row>
		</div>
		<div class="reportListCon">
			<el-row class="listCol" v-for="(item, index) in list" :key="index">
				<!-- <el-col :span='3' class="num">5</el-col> -->
				<el-col :span='18' :offset="2" class="title " :class="item.type==1?'type1':'type2'">
					<p class="tit fz16">{{item.title}}</p>
					<p class="time fz14">{{item.play_time}}
						<span class="fz12">{{item.tea_name}}老师</span>
					</p>
				</el-col>
				<el-col :span='4' class="more">查看详情</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'reportList',
	props: {
		list: Array,
		title: String,
		type: Number,
	},
	data() {
		return {};
	},

	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.reportList {
	background: #fff;
	overflow: hidden;
	.reportListHead {
		height: 95px;
		line-height: 95px;

		color: #fff;
		.headTit {
			font-size: 20px;
		}
	}
	.reportListCon {
		padding: 45px 0;
		.listCol {
			height: 55px;
			// padding: 45px 0;
			.title {
				height: 100%;
				border-left: 1px solid #e5e5e5;
				padding: 0 35px;
				position: relative;

				.tit {
					color: #589cfe;
					line-height: 21px;
				}
				.time {
					// color: #666;
					line-height: 30px;
				}
			}
			.type1,.type2 {
				&:before {
					position: absolute;
					height: 14px;
					width: 28px;
					font-size: 12px;
					background: #fff;
					top: 0;
					left: -14px;
				}
			}
			.type1:before{
					content: '预告';
					color: #589CFE;
					border: 1px solid #589cfe;

			}
			.type2:before{
					content: '回看';
					color: #FCAC19;
					border: 1px solid #FCAC19;

			}
			.more {
				padding: 0;
				line-height: 20px;
			}
			&:last-child .title {
				border: 0;
			}
		}
	}
}
</style>