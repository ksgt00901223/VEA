<!-- 教学简案 -->
<template>
	<div class='teachingCase viewsBox'>
		<!-- <el-row class="headPart">
			<list-head title="我的课件-教学简案"></list-head>
		</el-row> -->
		<el-row class="bodyPart">
			<file-list :list='teachingCaseList'  :selectCourse='selectCourse' title="教学简案" :courseType='courseType'></file-list>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
import fileList from '@/components/list/fileList.vue';

export default {
	name: 'teachingCase',
	data() {
		return {
			teachingCaseList: [
				{
					id: 1,
					title: '演课视频第3讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '演课视频第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
			],
			selectCourse: [
				{
					value: '选项1',
					label: '黄金糕',
				},
				{
					value: '选项2',
					label: '双皮奶',
				},
				{
					value: '选项3',
					label: '蚵仔煎',
				},
				{
					value: '选项4',
					label: '龙须面',
				},
				{
					value: '选项5',
					label: '北京烤鸭',
				},
			],
			courseType:0
		};
	},

	components: {
		fileList,
	},
created () {
this.courseType=this.$route.query.course;	
console.log(this.$route.query.course);

},
	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.teachingCase {
	padding: 0 20px;
}
</style>