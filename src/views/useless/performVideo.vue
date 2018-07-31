<!-- 演课视频 -->
<template>
	<div class='performVideo viewsBox'>
		<!-- <el-row class="headPart">
			<list-head title="我的课件-演课视频"></list-head>
		</el-row> -->
		<el-row class="bodyPart">
			<file-list :list='performVideoList'  :selectCourse='selectCourse' title="演课视频" :courseType='courseType'></file-list>
		</el-row>
	</div>
</template>

<script>
//import aa from 'aa';
import fileList from '@/components/list/fileList.vue';
import listHead from '@/components/list/listHead.vue';

export default {
	name: 'performVideo',
	data() {
		return {
			performVideoList: [
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
		listHead,
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
.performVideo {
	padding: 0 20px;
}
</style>