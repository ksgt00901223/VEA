<!-- 首页登录框 -->
<template>
	<div class="loginBox poa tac">
		<div class="el tryout r10">
			<el-col :span="12" class="try">
				<p @click="changeTages(3)">申请试用</p>
			</el-col>
			<el-col :span="12" class="tel">
				<p>
					<i class="iconfont icon-tel"></i> 客服电话</p>
				<p>400-8820-8820</p>
			</el-col>
		</div>
		<div class='loginBox2 r10'>
			<h3 v-if="active!=3">爱作文教师备课</h3>
			<h3 v-else>试用申请</h3>
			<div class="a12" v-if="active!=3">
				<div class="tags">
					<div class="or">
						<span @click="changeTages(1)" :class="active==1?'border-bottom-active':''"> 登录</span>
					</div>
					<div>
						<span @click="changeTages(2)" :class="active==2?'border-bottom-active':''">APP下载</span>
					</div>

				</div>
				<div class="loginCon tac" v-if="active==1">
					<el-row class="el loginInput">
						<input v-model="tel" placeholder="请输入您的手机号" maxlength="11">

					</el-row>
					<el-row class="el loginInput">

						<input v-model="password" placeholder="请输入密码">
					</el-row>
				</div>
				<div class="appDownload" v-else-if="active==2">
					<el-row class="appCon tac fz12">
						<el-col :span="12" class="appItem appAZ">
							<div>
								<img src="./img/矢量智能对象.png" alt="az">
							</div>
							<div>
								<img src="./img/timg.png" alt="azewm">
							</div>
							<div>
								<p>爱作文安卓版</p>
								<p>APP下载</p>
							</div>
						</el-col>
						<el-col :span="12" class="appItem appIOS">
							<div>
								<img src="./img/矢量智能对象1.png" alt="az">
							</div>
							<div>
								<img src="./img/timg1.png" alt="azewm">
							</div>
							<div>
								<p>爱作文苹果版</p>
								<p>APP下载</p>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>

			<div class="tryCon" v-else>
				<el-row class="el loginInput">
					<input v-model="name" placeholder="请输入您的姓名">
				</el-row>
				<el-row class="el loginInput">
					<input v-model="tel" placeholder="请输入您的联系方式">
				</el-row>
				<el-row class="el loginInput">
					<input v-model="courseId" placeholder="K1-K2体验课程">
				</el-row>
			</div>
			<el-row class=" el loginButton por ">

				<el-button class="loginBtn" type="primary" round v-if='active==3' @click="submitTrail">提交</el-button>
				<el-button class="loginBtn" type="primary" round v-else @click="login">登录</el-button>
				<span class="poa el-icon-back go c"></span>

			</el-row>
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'loginBox',
	data() {
		return {
			title: '爱作文教师备课',
			active: 1,
			name: '',
			tel: '',
			password: '',
			courseId: '',
		};
	},

	components: {},

	computed: {},

	methods: {
		changeTages(tags) {
			console.log(tags);
			if (this.active == 3 && tags == 3) {
				this.active = 1;
			} else {
				this.active = tags;
			}
			// this.$emit('active',this.active)
		},
		//提交试用申请
		submitTrail() {
			this.$axios
				.post('/trail/apply', {
					name: this.name,
					phone: this.tel,
					course_id: this.courseId,
				})
				.then(res => {
					console.log('ok');
					console.log(res.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		//登录
		login() {
			console.log('登录');

			this.$axios
				.post('/auth/login', {
					// account: this.tel,
					// password: this.password,
					account: '13652228124',
					password: '123456',
				})
				.then(res => {
					const o = res.data;
					console.log('ok');
					this.$notify({
						title: '登录成功',
						message: '欢迎回来',
						type: 'success',
					});
					console.log(o.data);
					sessionStorage.userInfo = JSON.stringify(o.data);
					this.GLOBAL.USERINFO=JSON.parse(sessionStorage.getItem("userInfo"));
					this.GLOBAL.token=JSON.parse(sessionStorage.getItem("userInfo")).token;
					if (o.data.type == 1) {
						console.log('teacher');		 
						this.$router.push({ path: 'teacher' });

					}else{
						this.$router.push({ path: 'agent' });

					}
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>
<style lang='less' scoped>
.loginBox {
	right: 20%;
	top: 20%;
	.el {
		width: 230px;
		height: 41px;
		line-height: 41px;
		margin: 10px auto;
	}
	.tryout {
		height: 40px;
		padding: 10px 0;
		width: 300px;
		// line-height: 60px;
		background: #fff;
		box-shadow: 10px 5px 38px rgba(165, 197, 252, 0.3);
		.try {
			p {
				font-size: 22px;
				font-family: MicrosoftYaHei-Bold;
				cursor: pointer;
				color: rgba(10, 15, 33, 1);
			}
			border-right: 1px solid;
		}
		.tel {
			p {
				height: 20px;
				line-height: 20px;
				font-size: 12px;
			}
		}
	}
	.a12,
	.tryCon {
		height: 145px;
	}

	.loginInput {
		border-bottom: 1px solid rgba(153, 153, 153, 1);
		input {
			border: 0;
			height: 40px;
			float: left;
		}
		input:focus {
			border: 0;
			outline: 0;
		}
	}
	.loginBox2 {
		width: 300px;
		height: 320px;
		background: #fff;
		box-shadow: 10px 5px 38px rgba(165, 197, 252, 0.3);

		h3 {
			padding: 20px;
			text-align: center;
			font-size: 24px;
			font-family: MicrosoftYaHei;
			color: rgba(10, 15, 33, 1);
		}
		.tags {
			display: flex;
			height: 30px;
			& > div {
				flex: 1;
				font-size: 16px;
				cursor: pointer;
				text-align: center;
			}
			span {
				padding: 12px;
				color: #282f45;
			}
			.or {
				border-right: 1px solid #999;
				position: relative;
			}
			.or:after {
				content: 'or';
				position: absolute;
				right: -6px;
				top: 6px;
				background: #fff;
				width: 13px;
				height: 17px;
				font-size: 12px;
				font-family: MicrosoftJhengHeiRegular;
				color: rgba(30, 38, 64, 1);
			}
		}

		.loginButton {
			margin-top: 30px;
			.loginBtn {
				width: 100%;
			}
			.go {
				width: 30px;
				height: 30px;
				line-height: 30px;
				color: #fff;
				font-size: 20px;
				background: #2e75f8;
				right: 8px;
				top: 5px;
				transform: rotate(180deg);
			}
		}
		.appCon {
			height: 100px;
			width: 230px;
			margin: 10px auto;
			.appItem {
				height: 100%;
			}
		}
	}
	.loginButton {
		margin-top: 30px;
		.loginBtn {
			width: 100%;
		}
		.go {
			width: 30px;
			height: 30px;
			line-height: 30px;
			color: #fff;
			font-size: 20px;
			background: #2e75f8;
			right: 8px;
			top: 5px;
			transform: rotate(180deg);
		}
	}
}
</style>