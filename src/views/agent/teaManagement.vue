<!-- 教师管理 -->
<template>
	<div class='teaManagement viewsBox'>
		<el-row class="headPart vcenter border-bottom-grey">
			<el-col :span="8" class="title">教师管理</el-col>
			<el-col :span="6" :offset="10" class="query por">
				<el-input v-model="input" maxlength="11" minlength="11" placeholder="输入教师手机号" class="custom"></el-input>
				<el-button type="primary" round class="poa btn">查询</el-button>
			</el-col>
		</el-row>

		<el-row class="bodyPart " type="flex" justify="space-between" style="flex-flow: row wrap;">
			<el-col :span="12" class="item ">
				<div class="content add">
					<router-link :to="{path:'/agent/addTeacher'}">
						<div class="symbol avatarShadow ">+</div>
						<p>添加一名新的教师</p>
					</router-link>
				</div>
			</el-col>
			<el-col :span="12" v-for="(item, index) in teaList" :key='index' class="teaPart">
				<display-card :item='item' :type=1 ></display-card>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
import displayCard from '@/components/list/displayCard.vue';

export default {
	name: 'teaManagement',
	data() {
		return {
			input: '',
			teaList: [],
		};
	},

	components: {
		displayCard,
	},

	created () {
	this.$axios.get('/user/tea/all?token='+this.GLOBAL.token,{
	
	})
	.then(res=>{
		const o = res.data;
		console.log(o.data);
		if (o.code===2000) {
			this.teaList=o.data;
		}
	})
	.catch(err=>{
		console.log(err);
	});	
	},

	methods: {},
};
</script>
<style lang="less">
.teaManagement{
	.teaPart {
	&:nth-child(even) {
		.content {
			margin-left: 60px;
		}
	}
	
}
} 
</style>

<style lang='less' scoped>
.teaManagement {
	padding: 0 35px;
}
.headPart {
	padding: 15px 0;
	.title {
		font-size: 21px;
		color: #333;
	}
	.query {
		// padding: 0 20px;
		.btn {
			top: 0;
			right: 0;
		}
	}
}
.bodyPart {
	padding: 40px 0;
	.item {
		margin: 20px 0;
		.content {
			height: 130px;
			width: 360px;
			border-radius: 10px;
		}

		.add {
			border: 1px dashed #0a6cca;
			padding: 30px;
			.symbol {
				height: 80px;
				width: 80px;
				line-height: 80px;
				margin: 0 auto;
				font-size: 30px;
				text-align: center;
			}
			p {
				padding: 15px;
				text-align: center;
				font-size: 20px;
				color: #666;
			}
		}
	}
}
</style>