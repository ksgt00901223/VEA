<!-- 机构登录 -->
<template>
	<div class='agent'>
		<el-container style="background:#e8e8e8;">
			<el-header height='80px' style="padding:0" class="border-bottom-grey">
				<top-nav></top-nav>
			</el-header>
			<el-container class="w of"  style="background:#fff">
				<el-aside width="18%" class="tac">
					<aside-nav></aside-nav>
				</el-aside>
				<el-main>
					<div class="teaMain">
						<el-row class="row ">
							<el-col :span="24" class="levelPart ">
								<span class="label">代理商名称：</span>
								<span class="level  fz14">{{name}}</span>
							</el-col>
						</el-row>
						<router-view></router-view>
						
						
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
// import asideNav from '@/components/nav/teaAsideNav.vue';
import asideNav from '@/components/nav/agentAsideNav.vue';
import topNav from '@/components/nav/teaTopNav.vue';

export default {
	name: 'agent',
	data() {
		return {
			name: '华北代理商',
			
		};
	},

	components: {
		asideNav,
		topNav,
	},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.el-header {
	line-height: 80px;
}
.el-aside {
	overflow: hidden;
}
.el-main {
	background: #e8e8e8;
	padding: 20px 30px;
}
.teaMain {
	margin: 0 auto;
	padding: 10px;
	.row {
		margin: 0 0 20px;
		// margin-bottom: 20px;
		padding: 25px 0;
		background: #fff;
		border-radius: 10px;
	}
	.levelPart {
		padding: 0 20px;
		.label {
			font-size: 16px;
			font-family: MicrosoftYaHei;
			color: rgba(102, 102, 102, 1);
		}
		.level {
			font-size: 18px;

			font-family: MicrosoftYaHei-Bold;
			color: rgba(84, 153, 254, 1);
		}
	}
	
}
</style>