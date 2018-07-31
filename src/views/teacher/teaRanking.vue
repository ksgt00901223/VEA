<!-- 教师分享排名 -->
<template>
	<div class='teashareRanking'>
		<ranking-list :list='coursewareList.data' :title="rankingTitle "></ranking-list>
	</div>
</template>

<script>
import rankingList from '@/components/list/rankingList.vue';
export default {
	name: 'teashareRanking',
	data() {
		return {
			rankingType: 0,
			rankingTitle: '',
			courseware: [
				{
					id: 1,
					img: '',
					title: '22',
					name: '5555',
					teaname: 'sssssss',
					num: '2222',
					good: '',
					bad: '',
				},
				{
					id: 11,
					img: '',
					title: '22',
					name: '5555',
					teaname: 'sssssss',
					num: '222',
					good: '',
					bad: '',
				},
				{
					id: 13,
					img: '',
					title: '22',
					name: '5555',
					teaname: 'sssssss',
					num: '0',
					good: '',
					bad: '',
				},
				{
					id: 13,
					img: '',
					title: '22',
					name: '5555',
					teaname: 'sssssss',
					num: '0',
					good: '',
					bad: '',
				},
			],
			coursewareList:[]
		};
	},

	components: {
		rankingList,
	},
	created() {
		this.rankingType = this.$route.query.rankingType;
		this.rankingTitle = this.$route.query.rankingTitle;
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

		
	},
	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
</style>