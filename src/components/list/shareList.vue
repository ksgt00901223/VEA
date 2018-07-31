<!-- 分享排名 -->
<template>
	<div class='shareList r10'>
		<div class="shareListHead bg-line-blue">
			<el-row style="padding-left:30px">
				<el-col :span='2'>
					<i class="iconfont icon-trophy fz30" v-if="type==1"></i>
					<i class="iconfont icon-wallet fz30" v-if="type==2"></i>
					<i class="iconfont icon-video-copy fz30" v-if="type==3"></i>
				</el-col>
				<el-col :span='10' :offset='8' class="headTit"> {{title}} </el-col>
				<el-col :span='3'>
					<router-link :to="{path:'teacher/ranking',query:{rankingType:type,rankingTitle:title}}" class="cfff">
						更多
						<i class="iconfont icon-more"></i>
					</router-link>
				</el-col>
			</el-row>

		</div>
		<div class="shareListCon">
			<el-row class="listCol" v-for="(item, index) of list" :key='index'>
				<el-col :span='3' class="avatar c">
					<img :src="item.avatar" :alt="item.name">
				</el-col>
				<el-col :span='8' class="title">
					<p class="tit">{{item.name}} </p>
					<p class="classType">{{item.classType}} </p>
				</el-col>
				<el-col :span='8' class="name">
					{{item.tea_name}}老师
				</el-col>
				<el-col :span='4' class="ranking ">
					<span class="good"></span>
					<span>{{item.up}}</span>
					<!-- <span class="num c">{{index+1}}</span> -->
				</el-col>
			</el-row>

		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'shareList',
	props: {
		list: Array,
		title: String,
		type: Number,
	},
	data() {
		return {
			tit: '深夜雪景课件',
			classType: 'K1-K2课件',
			teaName: '何漂亮',
		};
	},
	created() {},
	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.shareList {
	background: #fff;
	overflow: hidden;
	.shareListHead {
		height: 95px;
		line-height: 95px;

		color: #fff;
		.headTit {
			font-size: 20px;
		}
	}
	.shareListCon {
		padding: 30px 0;
		.listCol {
			height: 70px;
			line-height: 70px;
			padding: 5px;
			text-align: center;
			margin: 5px 0;
			color: #666;
			&:first-child {
				.avatar {
					box-shadow: 0px 0px 13px #ffd249;
				}
				.num,
				.avatar {
					background: #ffd249;
				}
			}
			&:nth-child(2) {
				.avatar {
					box-shadow: 0px 0px 13px #c4c4c4;
				}
				.num,
				.avatar {
					background: #c4c4c4;
				}
			}
			&:nth-child(3) {
				.avatar {
					box-shadow: 0px 0px 13px #e1a570;
				}
				.num,
				.avatar {
					background: #e1a570;
				}
			}
			&:nth-child(4) {
				.avatar {
					box-shadow: 0px 0px 13px #5499fe;
				}
				.num,
				.avatar {
					background: #5499fe;
				}
			}
		}
		.avatar {
			width: 60px;
			height: 60px;
			margin-left: 10px;
			background: rgba(37, 105, 240, 0.2);
			// opacity: 0.2;
			overflow: hidden;
		}
		.title {
			text-align: left;
			padding-left: 35px;
			margin-top: 7px;

			.tit {
				line-height: 30px;
				font-size: 16px;
			}
			.classType {
				line-height: 24px;
				font-size: 12px;
			}
		}
		.name {
			font-size: 14px;
		}
		.ranking {
			text-align: left;
			span {
				height: 22px;
				line-height: 22px;
				display: inline-block;
			}
			.good {
				width: 22px;
				background: url(./img/zan.png) no-repeat;
			}
		}
	}
}
</style>