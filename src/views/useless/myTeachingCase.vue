<!-- 我的教学简案 -->
<template>
	<div class='myTeachingCase viewsBox'>
		<folder-list :list='list' title="教学简案"></folder-list>
	</div>
</template>

<script>
//import aa from 'aa';
import folderList from '@/components/list/folderList.vue';

export default {
	name: 'myTeachingCase',
	data() {
		return {
			list: [
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
		};
	},

	components: {
		folderList,
	},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.myTeachingCase {
	padding: 0 20px 35px;
}
</style>