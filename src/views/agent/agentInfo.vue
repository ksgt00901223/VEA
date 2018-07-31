<!-- 代理商个人中心 -->
<template>
    <div class='agentInfo viewsBox por'>
        <el-row class="headPart">
            <list-head title='个人中心'></list-head>
        </el-row>
        <el-row class="bodyPart">
            <el-row class="avatar">
                <div class="mcenter  por hover">
                    <i class="fz30 poa iconfont icon-camera camera"></i>
                    <div class="avatarShadow">
                        <img src="" alt="">

                    </div>
                </div>
                <p>华北代理商</p>
            </el-row>
            <el-row class="agent">
                <table width='100%' cellspacing=0>
                    <thead>
                        <tr>
                            <th colspan="3">代理商信息</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>账号</td>
                            <td>名称</td>
                            <td>密码</td>
                        </tr>
                        <tr class="con">
                            <td>15266639785</td>
                            <td>华北代理商</td>
                            <td>
                                <el-button type="text" @click="changePass">更改密码</el-button>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-row>
            <el-row class="personal">
                <table width='100%' cellspacing=0>
                    <thead>
                        <tr>
                            <th colspan="2">中心信息</th>
                            <th class="fz14">
                                <span @click="dialogShow" class='hover'>
                                    <el-button class="addBtn" type="primary" icon="el-icon-plus" round></el-button>
                                    新增中心
                                </span>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fz14 ">中心名称</td>
                            <td colspan="2" class="fz14 ">操作</td>
                        </tr>
                        <tr class="con" v-for="(item, index) in personalTable" :key='index'>
                            <td>{{item.title}}</td>
                            <td>
                                <el-button type="text">删除</el-button>
                            </td>
                            <td>
                                <el-button type="text">重命名</el-button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </el-row>
        </el-row>
        <add-center v-show="addCenterShow" @show='isShowAdd'></add-center>
		<change-password v-show="changePassShow" @show='isShowPass'></change-password>
    </div>
</template>

<script>
import listHead from '@/components/list/listHead';
import addCenter from '@/components/dialog/addCenter';
import changePassword from '@/components/dialog/changePassword';

export default {
	name: 'agentInfo',
	data() {
		return {
			personalTable: [
				{
					title: '天津市西青区工业大学中心',
				},
				{
					title: '天津市西青区工业大学中心',
				},
				{
					title: '天津市西青区工业大学中心',
				},
			],
			addCenterShow: false,
			changePassShow:false
		};
	},

	components: {
		listHead,
		addCenter,
		changePassword,
	},

	computed: {},

	methods: {
		dialogShow() {
			this.addCenterShow = true;
		},
		changePass(){
this.changePassShow =true;
		},
		isShowAdd(i) {
			this.addCenterShow = i;
			console.log(i);
		},
		isShowPass(i){
			this.changePassShow=i;
		}
	},
};
</script>
<style lang='less' scoped>
.agentInfo {
	padding: 0 30px;
}
.bodyPart {
	padding: 20px 100px;
	.avatar {
		div {
			height: 80px;
			width: 80px;
		}
		p {
			text-align: center;
			padding: 20px 0;
			font-size: 17px;
		}
		.camera {
			right: -25px;
			top: -5px;
		}
	}
	.addBtn {
		width: 20px;
		height: 20px;
		padding: 0;
	}
	table {
		border: 1px solid #e8e8e8;
		margin-bottom: 50px;
		th,
		td {
			border: 1px solid #e8e8e8;
			padding: 10px 20px;
			text-align: center;
		}
		th {
			// text-align: left;
			font-size: 20px;
		}
		td {
			text-align: center;

			font-size: 16px;
		}
		.con {
			td {
				padding: 0 10px;
			}
		}
	}
}
</style>