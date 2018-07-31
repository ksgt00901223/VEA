<!-- 文件列表 -->
<template>
	<div class='fileList '>
		<el-row class="selectPart center">
			<el-col :span="16">
				<span class="title" v-if='courseType<20'>
					<!-- 体验课程-{{defaultCourse}}-{{title}} -->
					体验课程--{{title}}
				</span>
				<span class="title" v-if='courseType>20&&courseType<30'>
					<!-- 基础课程-{{defaultCourse}}-{{title}} -->
					基础课程--{{title}}
				</span>
			</el-col>
			<el-col :span='8' class="select">
				<span>选择课程</span>
				<el-select v-model="defaultCourse" placeholder="请选择" @change="timetable">
					<el-option v-for="item in courseList" :key="item.id" :label="item.name" :value="item.cid">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row class="list">
			<el-row class="listHead">
								<el-col :span="13" >文件名称</el-col>
				<el-col :span="3">文件大小</el-col>
				<el-col :span="4">创建时间</el-col>
				<el-col :span="4">操作</el-col>
			</el-row>
			<el-row class="listBody">
				<el-row v-for="(item, index) in list" :key="index" class="lineRow">
					<el-col :span="1"><i class="el-icon-document"></i></el-col>
					<el-col :span="12"> {{item.title}}</el-col>
					<el-col :span="3">{{item.size}}</el-col>
					<el-col :span="4">{{item.time}}</el-col>
					<el-col :span="4" class="operation fz18">
						<el-button type="text" class="fz18">下载</el-button>
						<el-button type="text" class="fz18">预览</el-button>
						
					</el-col>
				</el-row>

			</el-row>
		</el-row>

	</div>
</template>

<script>
export default {
	name: 'fileList',
	props: {
		list: Array, //文件列表
		courseVal: String, //课程默认值
		selectCourse: Array, //课程选择列表
		title: String, //标题
		courseType: [String, Number], //课程类型，AB，A：1 体验课程 ：2 基础课程，B ：1 教师 ：2 学生
	},
	data() {
		return {
			defaultCourse: '',
			textList:[],
			courseList:[]
		};
	},
	created() {
		this.defaultCourse = this.selectCourse[0].label;
		this.$axios.get('/course/mine',{
		params : {
			token:this.GLOBAL.token,
			// cid:0,
			// type:0
		}
			
		})
		.then(res=>{
			console.log('ok');
			const o = res.data;
			this.courseList=o.data;
			console.log(o.data);
			
		})
		.catch(err=>{
			console.log(err);
		});
	},
	

	methods: {
		timetable() {
			console.log(this.defaultCourse);
		},
	},
};
</script>


<style lang='less' scoped>
.list {
	// padding: 0 30px;
}
.selectPart {
	.title {
		font-size: 22px;
		border-left: 2px solid #5499fe;
		padding-left: 10px;
	}
	.select {
		padding: 20px 0;
	}
	border-bottom: 2px solid #e8e8e8;
}
.listHead {
	border-bottom: 2px solid #e8e8e8;
	padding: 15px 0;
	& > * {
		padding-left: 10px;
		font-size: 20px;
		border-left: 2px solid #5499fe;
	}
}
.listBody {
	.lineRow {
		padding: 10px 0;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	.operation {
		display: flex;
		justify-content: space-between;
	}
}
</style>