<!-- 添加教师 -->
<template>
	<div class='addTeacher viewsBox'>
		<el-row class="headPart fz20 border-bottom-grey">
			<span class="c333">教师管理 - </span>
			<span style="color:#454545">添加教师</span>
		</el-row>
		<el-row class="bodyPart">
			<el-form :label-position="labelPosition" ref="ruleForm" :rules="rules" label-width="80px" :model="formLabelAlign">
				<el-form-item label="教师名称：" prop="name">
					<el-input v-model="formLabelAlign.name" placeholder="输入新的教师名称"></el-input>
				</el-form-item>
				<el-form-item label="教师手机号：" prop="tel">
					<el-input type="tel" v-model.number="formLabelAlign.tel" placeholder="输入教师的手机号码"></el-input>
				</el-form-item>
				<el-form-item label="账号初始密码：">
					<el-input v-model="formLabelAlign.password" placeholder="设置您的账号密码"></el-input>
				</el-form-item>
				<el-form-item label="教师所在中心：">
					<el-input v-model="formLabelAlign.center" placeholder="教师所在的中心名称"></el-input>
				</el-form-item>
				<el-form-item label="教师所选课程：">
					<el-input v-model="formLabelAlign.course" placeholder="输入教师所选课程"></el-input>
				</el-form-item>
				<el-form-item label="教师等级：">
					<el-select v-model="formLabelAlign.level" placeholder="请选择">
						<el-option v-for="item in formLabelAlign.options" :key="item.id" :label="item.label" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="tac">
					<el-button type="primary" @click="submitForm('ruleForm')" round>提交</el-button>
				</el-form-item>
			</el-form>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'addTeacher',
	data() {
		return {
			labelPosition: 'top',
			formLabelAlign: {
				name: '',
				tel: '',
				password:'',
				course:'',
				center:'',
				options: [
					{
						id: 1,
						label: '初级教师',
					},
					{
						id:2,
						label: '中级教师',
					},
					{
						id: 3,
						label: '高级教师',
					},
					
				],
				level: '',
			},
			rules: {
				name: [
					{ required: true, message: '请输入教师名称', trigger: 'blur' },
					{ min: 2, max: 5, message: '长度在 2 到 5 个汉字', trigger: 'blur' },
				],
				tel: [
					{ required: true, message: '请输入教师手机号', trigger: 'blur' },
					{ min: 11, max: 11, type: 'number', message: '请输入手机号', trigger: 'blur' },
				],
				
			},
		};
	},

	components: {},

	computed: {},

	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		sub(){
			this.$axios.post('/user/tea/add?token='+this.GLOBAL.token,{
			name:this.formLabelAlign.name,
			mobile:this.formLabelAlign.tel,
			password:'',
			level:this.formLabelAlign.level,
			center:'',
			course:''
			})
			.then(res=>{
					const o = res.data;
					console.log(o.data);
			})
			.catch(err=>{
					console.log(err);
			});
		}
	},
};
</script>
<style lang='less' scoped>
.addTeacher {
	padding: 0 20px;
}
.headPart {
	padding: 20px 0;
}
.bodyPart {
	width: 400px;
	margin: 0 auto;
	padding: 20px 0 35px;
}
</style>