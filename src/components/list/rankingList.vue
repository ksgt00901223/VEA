<!-- 分享排名全 -->
<template>
	<div class='ranking viewsBox'>
		<el-row class="headPart bg-line-blue">
			<el-col :span="24" class="title">
				<span class="iconfont icon-trophy fz36 fl" v-if="rankingType==1"></span>
				<span class="iconfont icon-wallet fz36 fl" v-if="rankingType==2"></span>
				<span class="iconfont icon-video-copy fz36 fl" v-if="rankingType==3"></span>
				{{title}}
			</el-col>
		</el-row>
		<el-row class="listPart">
			<div class="listHead c999">

				<el-col :span="8" :offset="5">课件名称</el-col>
				<el-col :span="4">老师名字</el-col>
				<el-col :span="3">点赞总数</el-col>
				<el-col :span="2">点赞</el-col>
				<el-col :span="2">踩</el-col>
			</div>
			<div class="listBody">
				<el-row class="w100 col" v-for="(item, index) in list" :key="index">
					<el-col :span="2" class="numPart">
						<span class="num c tac">{{index+1}}</span>
					</el-col>
					<el-col :span="3">
						<div class="avatar avatarShadow">
							<img :src="item.avatar" :alt="item.name">
						</div>
					</el-col>
					<el-col :span="8" class="Courseware">
						<p class="CoursewareTit fz16 " style="padding:10px 0">{{item.name}}</p>
						<p class="CoursewareName fz12">{{item.name}}</p>
					</el-col>
					<el-col :span="4">
						<span>{{item.tea_name}}</span>老师
					</el-col>
					<el-col :span="3">{{item.up}}</el-col>
					<el-col :span="2">
						<span class="good good1"></span>
					</el-col>
					<el-col :span="2">
						<span class="bad bad1"></span>
					</el-col>
				</el-row>

			</div>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'ranking',
	props: {
		title: String,
		list: Array,
	},
	data() {
		return {
			rankingType: 0,
		};
	},
	created() {
		this.rankingType = this.$route.query.rankingType;
		console.log(this.title, this.rankingType);
	},
	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.headPart {
	padding: 35px 50px;
	.title {
		text-align: center;
		font-size: 24px;
		color: #fff;
	}
}
.listPart {
	padding: 40px;
	.listHead {
		padding: 30px 0;
	}
	.listBody {
		.col {
			margin: 20px 0;
			display: flex;
			align-items: center;
			&:first-child {
				.num {
					background: #ffd249;
				}
			}
			&:nth-child(2) {
				.num {
					background: #c4c4c4;
				}
			}
			&:nth-child(3) {
				.num {
					background: #e1a570;
				}
			}
		}

		.num {
			display: inline-block;
			width: 22px;
			height: 22px;
			line-height: 22px;
		}
		.avatar {
			height: 60px;
			width: 60px;
		}
	}
	.good,
	.bad {
		width: 22px;
		height: 22px;
		display: inline-block;
		cursor: pointer;
	}
	.good1 {
		background: url(./img/good1.png) no-repeat;
	}
	.good2 {
		background: url(./img/good2.png) no-repeat;
	}
	.bad1 {
		background: url(./img/bad1.png) no-repeat;
	}
	.bad2 {
		background: url(./img/bad2.png) no-repeat;
	}
}
</style>