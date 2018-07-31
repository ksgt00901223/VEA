<!-- 教学ppt -详细  -->
<template>
    <div class='teachingPPT viewsBox'>
        <div class="headPart">
            <list-head title="我的课件-教学PPT" :headType=0></list-head>
        </div>

        <file-list :list='pptData'></file-list>
    </div>
</template>

<script>
import listHead from '@/components/list/listHead.vue';
import fileList from '@/components/list/fileList.vue';
export default {
	name: 'teachingPPT',
	data() {
		return {
			keyword: '',
			pptData: [
				{
					time: '2016-05-02',
					size: '王小虎',
					title: '上海市普陀区金沙江路 1518 弄',
				},
				{
					time: '2016-05-04',
					size: '王小虎',
					title: '上海市普陀区金沙江路 1517 弄',
				},
				{
					time: '2016-05-01',
					size: '王小虎',
					title: '上海市普陀区金沙江路 1519 弄',
				},
				{
					time: '2016-05-03',
					size: '王小虎',
					title: '上海市普陀区金沙江路 1516 弄',
				},
			],
		};
	},

	components: {
		listHead,
		fileList,
	},

	computed: {},

	methods: {},
};
</script>
<style>
.teachingPPT .edit input:focus {
	outline: 0 !important;
}
</style>

<style lang='less' scoped>
.teachingPPT {
	padding: 0 20px 35px;
}
// .edit {
// 	padding: 30px 0;
// 	.search {
// 		border: 2px solid #5499fe;
// 		border-radius: 20px;
// 		width: 220px;
// 		padding: 10px;
// 		overflow: hidden;
// 		input {
// 			border: 0;
// 		}
// 		input:focus {
// 			border: 0 !important;
// 			outline: 0 !important;
// 		}
// 	}
// }
// .list {
// 	padding: 0 30px;
// }
// .listHead {
// 	border-bottom: 2px solid #e8e8e8;
// 	padding: 15px 0;
// 	& > * {
// 		padding-left: 10px;
// 		font-size: 20px;
// 		border-left: 2px solid #5499fe;
// 	}
// }
// .listBody {
// 	.lineRow {
// 		padding: 10px 0;
// 		font-size: 18px;
// 		display: flex;
// 		align-items: center;
// 	}
// 	.operation {
// 		display: flex;
// 		justify-content: space-between;
// 	}
// }
</style>