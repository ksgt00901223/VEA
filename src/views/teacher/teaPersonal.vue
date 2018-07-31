<!-- 教师个人页面 -->
<template>
	<div class='teaPersonal viewsBox '>
		<div class="headPart">
			<list-head title="个人信息" :headType=0></list-head>
		</div>
		<div class="pelPart">
			<el-row class="avatarPart">
				<el-col :span='4' :offset="10" class="tac">
					<el-upload class="avatar-uploader" :action="url" 
					:show-file-list="false" :on-success="handleAvatarSuccess" 
					:before-upload="beforeAvatarUpload">
						<img v-if="info.avatar" :src="info.avatar" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<p class="name">{{info.name}}</p>
				</el-col>
			</el-row>
			<el-row class="info">
				<el-col :span='6' :offset="9" style="padding:0 10px">
					<p class="agent">所属代理商：
						<span>{{info.agent}}</span>
					</p>
					<p class="number">教师账号：
						<span>{{info.mobile}}</span>
					</p>
					<p class="password">账号密码：
						<el-button type="text" @click="changePass">更换密码</el-button>
					</p>
					<p class="course">已购课程：
						<span v-for='(item,index) in info.courses' :key='index'>
							{{item}}
						</span>
					</p>
				</el-col>
			</el-row>
			<el-row class="sub tac">
				<el-button type="primary" round>退出</el-button>
			</el-row>
		</div>
		<change-password v-show="changePassShow" @show='isShowPass'></change-password>
	</div>
</template>

<script>
import listHead from '@/components/list/listHead.vue';
import changePassword from '@/components/dialog/changePassword';

export default {
	name: 'teaPersonal',
	data() {
		return {
			changePassShow: false,
			info: {},
			url: '22',
			qiniuToken: '',
		};
	},

	components: {
		listHead,
		changePassword,
	},

	created() {
		this.info = this.GLOBAL.USERINFO;
		this.$axios
			.get('/qiniu/uploadToken', {})
			.then(res => {
				const o = res.data;
				this.qiniuToken = o.data;
				this.url = 'https://upload-z0.qiniup.com?token=' + this.qiniuToken;
				
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		isShowPass(i) {
			this.changePassShow = i;
		},
		changePass() {
			this.changePassShow = true;
		},
		//头像
		handleAvatarSuccess(res, file) {
			console.log(res.key);
			let imgKey = res.key;
			this.info.avatar = URL.createObjectURL(file.raw);
			this.$axios
				.post('/user/avatar?token=' + this.GLOBAL.token, {
					url: res.key,
				})
				.then(res => {
					console.log('ok');
					const o = res.data;
					console.log(imgKey);
					this.GLOBAL.USERINFO.avatar = 'http://hdimage.edu-smart.cc/' + imgKey;
					let change = JSON.stringify(this.GLOBAL.USERINFO);
					sessionStorage.userInfo = change;
				})
				.catch(err => {
					console.log(err);
				});
		},
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg' || 'image/png';
			const isLt2M = file.size / 1024 / 1024 < 2;

			if (!isJPG) {
				this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
			}
			if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!');
			}
			return isJPG && isLt2M;
		},
	},
};
</script>
<style lang='less' scoped>
.pelPart {
	padding: 25px 0;
	.avatar {
		.avatarImg {
			width: 120px;
			height: 120px;
			overflow: hidden;
			margin: 0 auto;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.name {
		font-size: 17px;
		text-align: center;
		padding: 10px 0;
	}
	.info {
		padding: 15px 0;
		p {
			font-size: 16px;
			padding: 5px 0;
		}
		.agent {
			span {
				color: #333;
			}
		}
		.password {
			span {
				cursor: pointer;
				color: #5499fe;
			}
		}
		.course {
			span {
				color: #999;
			}
		}
	}
	.avatarPart {
		.avatar-uploader {
			background: #eee;
			height: 120px;
			width: 120px;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0px 0px 13px rgba(0, 87, 255, 0.91);
			margin: 0 auto;
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 120px;
			height: 120px;
			line-height: 120px;
			text-align: center;
		}
		.avatar {
			width: 120px;
			height: 120px;
			display: block;
		}
	}
}
</style>