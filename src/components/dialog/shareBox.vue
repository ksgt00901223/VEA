<!-- 分享 -->
<template>
    <div class='shareBox modal'>
        <el-row class="dialogBox por">
            <p style="margin-top:220px" class="cfff fz16">
                您的{{fileInfo.title}}>{{fileInfo.folderName}}> 《{{fileInfo.fileName}}》将进行分享，请确认是否分享!
            </p>
            <el-row class="poa btn ">
                <div>
                    <div class="ok" round @click="send()"></div>
                </div>
                <div class="tac">
                    <el-button type="text" @click="cancel" class="cfff fz16">取消</el-button>
                </div>
            </el-row>
        </el-row>
    </div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'shareBox',
	props: {
		fileInfo: Object,
	},
	data() {
		return {
			newCenterName: '',
		};
	},

	components: {},

	computed: {},

	methods: {
		send() {
			// console.log('发送');
			// this.$message({
			// 	message: '分享成功',
			// 	type: 'success',
			// });
			this.$emit('show', 1);
		},
		cancel() {
			this.newCenterName = '';
			// this.$message({
			// 	message: '分享已取消',
			// });
			this.$emit('show', 0);
			// console.log('取消');
		},
	},
};
</script>
<style lang='less' scoped>
.shareBox {
	.dialogBox {
		width: 405px;
		height: 530px;
		padding: 0 40px 30px;
		background: url(./img/share.png) no-repeat;
		background-size: 100%;
		margin: 80px auto 0;
		p {
			// min-height:
		}
		.btn {
			left: 50%;
			margin-left: -100px;
			bottom: 75px;
			.ok {
				width: 200px;
				height: 70px;
				background: url(./img/sharebtn.png) no-repeat;
				background-size: contain;
				cursor: pointer;
			}
		}
	}
}
</style>