<!-- 默认显示 -->
<template>
	<div class='teaDefault'>
		<el-row :gutter="25" class="row ">
			<el-col :span="12" class="listItem ">
				<share-list :list='coursewareList.data' title="教学课件分享排名" :type='1'></share-list>
			</el-col>
			<el-col :span="12">
				<share-list :list='shareList' title="教学锦囊分享排名" :type='2'></share-list>
			</el-col>
		</el-row>
		<el-row :gutter="25" class="row " style="margin-top:20px">
			<el-col :span="12">
				<share-list :list='shareList' title="教学视频分享排名" :type='3'></share-list>
			</el-col>
			<el-col :span="12" class="listItem ">
				<report-list :list='videoList.data' :type=1 title="全国直播教研信息预告与往期回顾"></report-list>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import shareList from '@/components/list/shareList.vue';
import reportList from '@/components/list/reportList.vue';
export default {
	name: 'teaDefault',
	data() {
		return {
			shareList: [
				{
					name: '深夜雪景课件',
					classType: 'K1-K2课件',
					tea_name: '何漂亮',
					up: 55555,
				},
				{
					name: '深夜雪景课件',
					classType: 'K1-K2课件',
					tea_name: '何漂亮',
					up: 55555,
				},
				{
					name: '深夜雪景课件',
					classType: 'K1-K2课件',
					tea_name: '何漂亮',
					up: 55555,
				},
				{
					name: '深夜雪景课件',
					classType: 'K1-K2课件',
					tea_name: '何漂亮',
					up: 55555,
				},
				
			],
			newsReportList: [
				{
					title: '实施有效训练促进学生思维的多向发展',
					time: '2018-10-10',
					name: '张三丰',
					type: 1,
				},
				{
					title: '实施有效训练促进学生思维的多向发展',
					time: '2018-10-10',
					name: '张三丰',
					type: 2,
				},
				{
					title: '实施有效训练促进学生思维的多向发展',
					time: '2018-10-10',
					name: '张三丰',
					type: 1,
				},
				{
					title: '实施有效训练促进学生思维的多向发展',
					time: '2018-10-10',
					name: '张三丰',
					type: 2,
				},
				{
					title: '实施有效训练促进学生思维的多向发展',
					time: '2018-10-10',
					name: '张三丰',
					type: 2,
				},
			],
			coursewareList: [],
			brocadeList: [],
			videoList: [],
		};
	},

	components: {
		shareList,
		reportList,
	},
	created() {
		//分享
		const getShareList = type => {
			this.$axios
				.get('/share', {
					params: {
						token: this.GLOBAL.token,
						type: type,
					},
				})
				.then(res => {
					console.log('ok');
					const o = res.data;
					console.log(o.data);
					
					if (type == 1) {
						this.coursewareList = o.data;
					} else if (type == 2) {
						this.brocadeList = o.data;
					} else {
						this.videoList = o.data;
					}
				})
				.catch(err => {
					console.log(err);
				});
		};
		getShareList(1);
		getShareList(2);
		getShareList(3);
//直播
this.$axios.get('/live/list',{
params : {
	token:this.GLOBAL.token
}
	
})
.then(res=>{
	console.log('ok');
	const o = res.data;
	console.log(o.data);
	this.videoList=o.data;
	
})
.catch(err=>{
	console.log(err);
});
		
	},
	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
</style>