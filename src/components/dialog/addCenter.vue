<!-- 机构-新增中心 -->
<template>
	<div class='addCenter modal'>
		<el-row class="dialogBox">
			<el-row class="head">
			</el-row>
			<el-row>
				<el-col :span="10" :offset="7" class="tac">
					<p class="p20 fz16">请输入中心名称</p>
					<el-row class="p20">
						<el-input v-model="newCenterName" placeholder="请输入内容"></el-input>
					</el-row>
					<el-row class="mt20">
						<el-col :span="10">
							<el-button type="primary" round @click="send()">确认</el-button>
						</el-col>
						<el-col :span="10" :offset="4">
							<el-button round @click="cancel">取消</el-button>
						</el-col>
					</el-row>
				</el-col>

			</el-row>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'addCenter',
	data() {
		return {
			newCenterName: '',
		};
	},

	components: {},

	computed: {},

	methods: {
		send() {
			console.log('发送');
			this.$message({
				message: '新增中心成功',
				type: 'success',
			});
			this.$emit('show', false);
		},
		cancel() {
			this.newCenterName = '';
			this.$message({
				message: '已取消',
			});
			this.$emit('show', false);
			console.log('取消');
		},
	},
};
</script>
<style lang='less' scoped>
.addCenter {
	.dialogBox {
		width: 580px;
		height: 440px;
		background: #fff;
		margin: 100px auto 0;

		.head {
			height: 150px;
			background: url(./img/center.png) no-repeat 100%;
		}
	}
}
</style>