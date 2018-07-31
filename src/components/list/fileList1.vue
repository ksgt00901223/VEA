<!-- 文件列表 -->
<template>
	<div class='fileList viewsBox'>
		<el-row class="selectPart center">
			<el-col :span="16">
				<span class="title" v-if='courseType<200'>
					体验课程-{{courseTit}}-{{title}}
				</span>
				<span class="title" v-if='courseType>200&&courseType<300'>
					基础课程-{{courseTit}}-{{title}}
				</span>
			</el-col>
			<el-col :span='8' class="select">
				<span>选择课程</span>
				<el-select v-model="defaultCourse" placeholder="请选择" @change="timetable()">
					<el-option v-for="item in courseList" :key="item.id" :label="item.name" :value="item.cid">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row class="list">
			<el-row class="listHead tac">
				<el-col :span="13">文件名称</el-col>
				<el-col :span="3">文件大小</el-col>
				<el-col :span="4">创建时间</el-col>
				<el-col :span="4">操作</el-col>
			</el-row>
			<el-row class="listBody" v-if='list'>
				<el-row v-for="(item, index) in list" :key="index" class="lineRow">
					<el-col :span="1">
						<i :class="item.type|fileType" class="fz36"></i>
					</el-col>
					<el-col :span="12"> {{item.name}}</el-col>
					<el-col :span="3" class="fz14 tac">{{item.size}}</el-col>
					<el-col :span="4" class="fz14 tac">{{item.created_at}}</el-col>
					<el-col :span="4" class="operation fz18">
						<el-button type="text" class="fz18">下载</el-button>
						<el-button type="text" class="fz18">
							<a :href="item.url" target="_blank" style="color:#409EFF">
								预览
							</a>
						</el-button>
					</el-col>
				</el-row>
				<div class="poa tac" style="bottom:25px;width:100%">
					<el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :total="fileTotal">
				</el-pagination>
				</div>
				
			</el-row>
			<el-row v-else class="tac">
				暂无数据
			</el-row>
		</el-row>

	</div>
</template>

<script>
export default {
	name: 'fileList',
	// props: {
	// 	// // list: Array, //文件列表
	// 	// courseVal: String, //课程默认值
	// 	// selectCourse: Array, //课程选择列表
	// 	// title: String, //标题
	// 	// courseType: [String, Number], //课程类型，AB，A：1 体验课程 ：2 基础课程，B ：1 教师 ：2 学生
	// },
	data() {
		return {
			defaultCourse: '', //下拉课程默认值
			// textList: [],
			courseList: [], //课程列表
			courseType: 0, //课程类型，三位数，
			courseTit: '', //被选中的课程的标题
			list: [],
			fileTotal: 1,
		};
	},
	watch: {
		$route: function(to, from) {
			console.log('change' + sessionStorage.courseType);
			this.courseType = sessionStorage.courseType;
			this.title = sessionStorage.courseTitle;
		},
	},
	created() {
		// this.defaultCourse = this.selectCourse[0].label;
		// console.log(this.$route.params);
		this.courseType = sessionStorage.courseType;
		this.title = sessionStorage.courseTitle;

		console.log(sessionStorage.courseType);

		//下拉课程
		this.$axios
			.get('/course/mine', {
				params: {
					token: this.GLOBAL.token,
					// cid:0,
					// type:0
				},
			})
			.then(res => {
				console.log('这是下拉ok');
				const o = res.data;
				this.courseList = o.data;
				this.defaultCourse = o.data[0].id;
				this.courseTit = o.data[0].name;
				this.getFileList();
				console.log(o.data);
			})
			.catch(err => {
				console.log(err);
			});
		
	},

	methods: {
		timetable() {
			console.log(this.defaultCourse);
			this.courseList.forEach(v => {
				if (v.id == this.defaultCourse) {
					this.courseTit = v.name;
					console.log(this.courseTit);
				}
			});
			this.getFileList();
		},
		getFileList() {
			//文件列表
			this.$axios
				.get('/course/detail', {
					params: {
						token: this.GLOBAL.token,
						// type: this.courseType,
						// cid: this.defaultCourse,
						type: '111',
						cid: '1',
					},
				})
				.then(res => {
					console.log('ok');
					const o = res.data;
					this.list = o.data.data;
					this.fileTotal = o.data.total;
					console.log(this.list);
				})
				.catch(err => {
					console.log(err);
				});
		},
		page(current) {
			console.log('这是分页，但是没写');

			// this.$axios.get('/',{
			// params : {
			// 	page:current
			// }

			// })
			// .then(res=>{
			// 	const o = res.data;
			// 	console.log(o.data);
			// })
			// .catch(err=>{
			// 	console.log(err);
			// });
		},
		handleCurrentChange(val) {
			console.log(val);
		},
	},
	filters:{
		fileType(type){
			switch (type) {
				case 1:
					return 'icon-word';
					break;
				case 2:
					return 'icon-PPT';
					break;
				case 3:
					return 'icon-img1';
					break;
				case 4:
					return 'icon-video_file';
					break;
				case 5:
					return 'icon-File-Music';
					break;
			
				default:
				return 'icon-file';
					break;
			}
		}
	}
};
</script>


<style lang='less' scoped>
.list {
	// padding: 0 30px;
}
.fileList {
	padding: 0 20px;
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
	min-height: 300px;
	.lineRow {
		padding: 10px 0;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	.operation {
		display: flex;
		padding: 0 10px;
		justify-content: space-between;
	}
}
</style>