<!-- 更改密码 -->
<template>
    <div class='changePassword modal'>
        <el-row class="dialogBox">
            <el-row class="head">
            </el-row>
            <el-row>
                <el-col :span="12" :offset="6" class="tac p20">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="passFrom" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="原密码" prop="oldPass">
                            <el-input type="password" v-model="ruleForm.oldPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-row class="mt20">
                        <el-col :span="10">
                            <el-button type="primary" round @click="submitForm('passFrom')">确认</el-button>
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
	name: 'changePassword',
	data() {
		var validateOldPass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.passFrom.validateField('checkPass');
				}
				callback();
			}
		};

		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else if (value === this.ruleForm.oldPass) {
				callback(new Error('不能与原密码一样'));
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.passFrom.validateField('checkPass');
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				oldPass: '',
				pass: '',
				checkPass: '',
			},
			rules: {
				oldPass: [{ validator: validateOldPass, trigger: 'blur' }],
				pass: [{ validator: validatePass, trigger: 'blur' }],
				checkPass: [{ validator: validatePass2, trigger: 'blur' }],
			},
		};
	},

	components: {},

	computed: {},

	methods: {
		cancel() {
			this.newCenterName = '';
			this.$message({
				message: '已取消',
			});
			this.$emit('show', false);
			console.log('取消');
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					// this.$message({
					// 	message: '更改密码成功',
					// 	type: 'success',
					// });
					// this.$emit('show', false);
					this.changePass();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		changePass(){
			this.$axios.post('/auth/password?token='+this.GLOBAL.token,{
			old:this.ruleForm.oldPass,
			new:this.ruleForm.pass
			})
			.then(res=>{
				const o = res.data;
				console.log(o.data);
if (o.code==2000) {
	this.$message({
						message: '更改密码成功',
						type: 'success',
					});
					this.$emit('show', false);
}else if(o.code==2001){
	this.$message({
						message: '原密码错误',
						type: 'warning',
					});
}
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
	},
};
</script>
<style lang='less' scoped>
.changePassword {
	.dialogBox {
		width: 580px;
		height: 440px;
		background: #fff;
		margin: 100px auto 0;

		.head {
			height: 150px;
			background: url(./img/password.png) no-repeat 100%;
		}
	}
}
</style>