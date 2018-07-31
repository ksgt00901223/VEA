<!-- 教师登录 -->
<template>
    <div class='teacher'>
        <el-container class="overhide">
            <el-header height='80px' style="padding:0">
                <top-nav></top-nav>
            </el-header>
            <el-container class="w ">
                <el-aside width="18%" class="tac">
                    <aside-nav></aside-nav>
                </el-aside>
                <el-main>
                    <div class="teaMain">
                        <el-row class="row">
                            <el-col :span="24" class="levelPart ">
                                <span class="label"> <i class="iconfont icon-jewelry"></i> 教师级别</span>
                                <span class="level i">{{level}}</span>
                            </el-col>
                        </el-row>
                        <el-row class="row ">
                            <el-col :span="24" class="tips fz16 r10"> <i class="iconfont icon-tip"></i> 系统提醒: </el-col>
                            <el-col :span="8" class="tipsItem">您已开通（{{tips.course}}）门相关课程</el-col>
                            <el-col :span="8" class="tipsItem">您已上传（{{tips.silk_upload}}）个教学锦囊</el-col>
                            <el-col :span="8" class="tipsItem">您已分享（{{tips.silk_share}}）个教学锦囊</el-col>
                            <el-col :span="8" class="tipsItem">您已上传（{{tips.course_upload}}）个教学课件</el-col>
                            <el-col :span="8" class="tipsItem">您已分享（{{tips.course_share}}）个教学课件</el-col>
                        </el-row>
                        <router-view style="min-height:600px" ></router-view>
                       
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import asideNav from '@/components/nav/teaAsideNav.vue';
import topNav from '@/components/nav/teaTopNav.vue';

export default {
	name: 'teacher',
	data() {
		return {
			level: '初级教师',
			tips:{}
		};
	},

	components: {
		asideNav,
		topNav,
	},

	created () {
	this.$axios.get('/user/system',{
	params : {
		token:this.GLOBAL.token
	}
		
	})
	.then(res=>{
		console.log('ok');
		const o = res.data;
		this.tips=o.data;
		// console.log(o.data);
		
	})
	.catch(err=>{
		console.log(err);
	});	
	},

	methods: {},
};
</script>
<style lang='less' scoped>
// .body{
// 	min-width: 1200px;
// 	max-width: 1366px;
// 	margin: 0 auto;
// }
.teacher{
	background: #e8e8e8;
}
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
		margin-bottom: 20px;
		padding: 25px;
		background: #fff;
		border-radius: 10px;
	}
	.levelPart {
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
	
	.tipsItem {
		font-size: 14px;
		color: #333;
		padding: 10px 0;
		text-align: center;
	}
}
</style>