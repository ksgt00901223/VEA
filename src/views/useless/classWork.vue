<!-- 首页-班级作品册 -->
<template>
	<div class='classWork viewsBox'>	
		<el-row class="bodyPart">
			<file-list :list='pptlist' :selectCourse='selectCourse' title="班级作品册" :courseType='courseType'></file-list>
		</el-row>
	</div>
</template>

<script>
import fileList from '@/components/list/fileList.vue';

export default {
	name: 'classWork',
	props: {},
	data() {
		return {
			pptlist: [
				{
					id: 1,
					title: '文学思维上第3讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '文学思维上第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '文学思维上第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '文学思维上第2讲',
					time: '2016-05-02',
					size: '王小虎',
				},
				{
					id: 10,
					title: '文学思维上第2讲',
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
		// listHead,
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
.classWork {
	padding: 0 20px 35px;
}
</style>