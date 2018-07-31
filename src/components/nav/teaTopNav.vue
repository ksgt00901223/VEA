<!-- 教师顶部 -->
<template>
	<div class='teaTopNav tac '>
		<el-row  >
			<el-col :span="2" :offset="16" class="bell">
				<div class="iconfont icon-bell bellCon"></div>
			</el-col>
			<el-col :span="6" class="users" style="padding-left:30px">
				<div class="avatar c">
					<router-link :to="{path:'/teacher/personal'}" v-if="userInfo.type==1">
						<img :src="userInfo.avatar" :alt="userInfo.name">
					</router-link>
					<router-link :to="{path:'/agent/agentInfo'}" v-else>
						<img :src="userInfo.avatar" :alt="userInfo.name">
					</router-link>
				</div>
				<div class="user">
					<span v-if="userInfo.type==1">
						<span>
							<router-link :to="{path:'/teacher/personal'}">{{userInfo.name}}</router-link>
						</span>
						<span>老师</span>
					</span>
					<span v-else>
						<span>
							<router-link :to="{path:'/agent/agentInfo'}">{{userInfo.name}}</router-link>
						</span>
					</span>
					<el-dropdown>
						<span class="el-dropdown-link hover" @click="quit">
							<i class="el-icon-arrow-down el-icon--right"></i>退出 </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>黄金糕</el-dropdown-item>
							<el-dropdown-item>狮子头</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>

				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'teaTopNav',
	data() {
		return {
			userInfo: {},
		};
	},

	components: {},
	created() {
		// console.log('这是created');
		// console.log(JSON.parse(sessionStorage.userInfo));
		this.userInfo = JSON.parse(sessionStorage.userInfo);
	},
	
	computed: {},

	methods: {
		quit() {
			this.$router.push({ path: '/' });
		},
	},
};
</script>
<style lang='less' scoped>
.teaTopNav {
	height: 100%;
	background: #fff;
	.bell {
		height: 100%;
		border-left: 2px solid #e8e8e8;
		border-right: 2px solid #e8e8e8;
		.bellCon {
			font-size: 35px;
			color: #d0d0d0;
		}
	}
	.users {
		.avatar {
			float: left;
			width: 65px;
			height: 65px;
			margin: 7px 0;
			box-shadow: 0px 0px 13px rgba(0, 87, 255, 0.91);
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.user {
			float: left;
			// width: 100px;
			padding: 0 10px;
			margin-left: 30px;
			height: 80px;
			line-height: 80px;
			font-size: 16px;
			font-family: MicrosoftYaHei;
			color: rgba(0, 0, 0, 1);
		}
	}
}
</style>