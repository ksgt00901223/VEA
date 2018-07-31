<!-- 机构-转分配 -->
<template>
	<div class='transAllot modal'>
		<el-row class="dialogBox" v-show="dialog">
			<el-row class="head">
			</el-row>
			<el-row>
				<el-col :span="10" :offset="7" class="tac">
					<el-row class="p20 mt30">
						<el-input v-model="teaInfo" placeholder="请输入教师姓名或手机号"></el-input>
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
	name: 'transAllot',
	data() {
		return {
			teaInfo: '',
			dialog: true,
		};
	},

	components: {},

	computed: {},

	methods: {
		send() {
			console.log('发送');
			this.dialog = false;
			this.$confirm('确认将xx的xxx课程分配到xxx名下吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
				center: true,
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '转分配成功!',
					});
					this.teaInfo = '';
					this.dialog = true;
					this.$emit('show', false);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消转分配',
					});
					this.teaInfo = '';
					this.dialog = true;
					this.$emit('show', false);
				});
			this.$emit('show', false);
		},
		cancel() {
			this.teaInfo = '';
			this.$emit('show', false);
			console.log('取消');
		},
	},
};
</script>
<style lang='less' scoped>
.transAllot {
	.dialogBox {
		width: 580px;
		height: 440px;
		background: #fff;
		margin: 100px auto 0;
		.head {
			height: 150px;
			background: url(./img/allot.png) no-repeat 100%;
		}
	}
}
</style>