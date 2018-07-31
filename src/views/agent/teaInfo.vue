<!-- 教师详情 -->
<template>
    <div class='teaInfo viewsBox'>
        <el-row class="headPart">
            <list-head title="教师管理-教师详情"></list-head>
        </el-row>
        <el-row class="bodyPart">
            <el-row class="avatar">
                <div class="mcenter avatarShadow"></div>
            </el-row>
            <el-row class="info">
                <el-form :label-position="labelPosition" label-width="150px" class="mcenter" style="width:350px;">
                    <el-form-item label="教师姓名：">
                        <p>{{personalInfo.name}}</p>
                    </el-form-item>
                    <el-form-item label="教师手机号：">
                        <p>{{personalInfo.tel}}</p>
                    </el-form-item>
                    <el-form-item label="账号初始密码：">
                        <p class="password">{{personalInfo.password}}</p>
                    </el-form-item>
                    <el-form-item label="所选课程：">
                        <p class="c999" v-for="(item, index) in personalInfo.course" :key='index'>{{item.title}}</p>
                    </el-form-item>
                    <el-form-item label="教师所属中心：">
                        <p>{{personalInfo.center}}</p>
                    </el-form-item>
                    <el-form-item label="教师等级：">
                        <p>{{personalInfo.level}}</p>
                    </el-form-item>
                    <el-form-item label="账号状态：">
                        <p>{{personalInfo.state}}</p>
                    </el-form-item>
                </el-form>
                <el-row class="tac p25">
                      <el-button type="primary" round>确认</el-button>
                </el-row>
            </el-row>
        </el-row>
    </div>
</template>

<script>
import listHead from '@/components/list/listHead';

export default {
	name: 'teaInfo',
	data() {
		return {
            labelPosition: 'right',
            teacherId:0,
			personalInfo: {
				name: '张铁林',
				tel: '13582514910',
				password: '8888888',
				course: [{title:'k1-k2'}, {title:'k1-k2'},{title:'k1-k2'},],
				center: '天津市西青区天津工业中心',
				level: '初级',
				state: '正常',
			},
		};
	},

	components: {
		listHead,
	},
created () {
    this.teacherId=this.$route.query.teacherId;  
},
	computed: {},

	methods: {},
};
</script>
<style lang="less">
.teaInfo{
    label{
        font-size: 16px;
    }
    .el-form-item{
        margin-bottom: 10px;
    }
}
</style>

<style lang='less' scoped>
.teaInfo {
	padding: 0 30px;
}
.bodyPart {
	padding: 30px;
	.avatar {
		div {
			height: 80px;
			width: 80px;
		}
    }
    .password{
        color: #5499FE;
    }
    .info{
        padding: 20px 0;
        p{
            font-size: 16px;
        }
    }
}
</style>