<!-- 立即付款 -->
<template>
    <div class='promptPayment modal'>
        <el-row class="dialogBox">
            <el-row class="head">
                <p class="tac title">确认支付</p>
                <el-row class="pay tac">
                    <el-col :span="6" :offset="3">
                        <div class="logo">
                            <i class="iconfont icon-UnionPay"></i>
                        </div>
                        <div class="method">
                            <el-radio v-model="payMethod" label="1" class="cfff p10">银联</el-radio>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="logo">
                            <i class="iconfont icon-weixin"></i>
                        </div>
                        <div class="method">
                            <el-radio v-model="payMethod" label="2" class="cfff p10">微信</el-radio>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="logo">
                            <i class="iconfont icon-zhifubao"></i>
                        </div>
                        <div class="method">
                            <el-radio v-model="payMethod" label="3" class="cfff p10">支付宝</el-radio>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
            <el-row class="btn">
                <el-col :span="12" :offset="6" class="tac">

                    <el-row style="margin-top:40px">
                        <el-col :span="10">
                            <el-button type="primary" round @click="send()">立即支付</el-button>
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
	name: 'promptPayment',
	data() {
		return {
			payMethod: '1',
		};
	},

	components: {},

	computed: {},

	methods: {
		send() {
			console.log('发送');
			console.log(this.payMethod);
			if (this.payMethod === '') {
				this.$message({
					message: '请选择支付方式',
					type: 'warning',
				});
			} else {
				this.$message({
					message: '支付成功',
					type: 'success',
				});
				this.$emit('show', false);
			}
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
<style lang="less">
.promptPayment {
	.el-radio__input.is-checked + .el-radio__label {
		color: #fff;
	}
}
</style>

<style lang='less' scoped>
.promptPayment {
	.dialogBox {
		width: 580px;
		height: 440px;
		background: #fff;
		margin: 100px auto 0;

		.head {
			height: 260px;
			background: #357ef6;
			color: #fff;
			.title {
				padding: 30px;
				font-size: 30px;
			}
			.method {
				padding: 5px;
				font-size: 16px;
			}
			i {
				font-size: 60px;
			}
		}
		.btn {
			button {
				width: 120px;
			}
		}
	}
}
</style>