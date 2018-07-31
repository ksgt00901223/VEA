<!-- 展示卡 -->
<template>
	<div class='displayCard item teaitem'>
		<div class="content">
			<el-row class="top">
				<el-col :span="8" class="avatar avatarShadow">
					<img :src="item.avatar" :alt="item.name">
				</el-col>
				<el-col :span="16" class="user por">
					<p>姓名：{{item.name}}</p>
					<p>手机号：{{item.tel}}</p>

					<div v-if='type==1'>
						<div class="level poa" v-if='item.level==1'>
							<div class="sign level-high"></div>
							<p class="fz12 tac">高级教师</p>
						</div>
						<div class="level poa" v-if='item.level==2'>
							<div class="sign level-middle"></div>
							<p class="fz12 tac">中级教师</p>
						</div>
						<div class="level poa" v-if='item.level==3'>
							<div class="sign level-low"></div>
							<p class="fz12 tac">初级教师</p>
						</div>
					</div>
					<div v-if='type==2'>
						<div class="poa necktie " :class="item.distribution?'ok':'no'"></div>
					</div>
				</el-col>
			</el-row>
			<el-row class="edit r20 bgfff">
				<el-col :span="6" class="label"> <span class="c set"> <i class="fz14 iconfont icon-set"></i></span>  操作</el-col>
				<el-col :span="6" class="btn hover">修改</el-col>
				<el-col :span="6" class="btn hover">删除</el-col>
				<el-col :span="6" class="btn hover">
					<router-link :to="{path:'/agent/teaInfo',query:{teacherId:item.id}}">查看</router-link>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'displayCard',
	props: {
		item: Object,
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
.teaitem {
	margin: 20px 0;
	.content {
		height: 130px;
		width: 360px;
		border-radius: 10px;
		background: #eee;
		padding: 25px 31px 36px;
		  box-shadow: 5px 5px 5px #aaa;

		.top {
			& > * {
				height: 90px;
			}
			.avatar {
				width: 90px;
				img{
					height: 100%;
					width: 100%;
				}
			}
			.user {
				padding: 10px 20px;
				p {
					font-size: 16px;
					line-height: 31px;
					color: #000;
				}
			}
			.level {
				top: -10px;
				right: -10px;
				height: 60px;
				width: 60px;
				.sign {
					height: 50px;
					width: 60px;
					background-size: contain;
				}
			}
			.necktie {
				top: -36px;
				right: -73px;
				height: 116px;
				width: 116px;
				background-size: contain;
			}
		}
		.edit {
			text-align: center;
			padding: 15px 0;
			margin: 15px 0;
			.label {
				border-right: 2px solid #e8e8e8;
			}
			.set{
				background: rgb(246, 187, 3);
				display: inline-block;
				height: 20px;
				line-height: 20px;
				width: 20px;
				text-align: center;
				color: #fff;
			}
		}
	}
}
.bg-grey {
	background: #eee;
}
.level-high {
	background: url(../../assets/img/high.png) no-repeat;
}
.level-middle {
	background: url(../../assets/img/middle.png) no-repeat;
}
.level-low {
	background: url(../../assets/img/low.png) no-repeat;
}
.ok {
	background: url(./img/ok.png);
}
.no {
	background: url(./img/no.png);
}
</style>