<!-- 新闻 -->
<template>
	<div class='newsDetail viewsBox'>
		<el-row class="headPart">
			<list-head title="新闻内容"></list-head>
		</el-row>
		<el-row class="bodyPart">
			<el-row class="top">
				<h3 class="title">{{title}}</h3>
				<p class="tar">
					<span>{{time}}</span>
				</p>
			</el-row>
			<el-row class="content" v-html="content">
				
			</el-row>

		</el-row>
	</div>
</template>

<script>
import listHead from '@/components/list/listHead';
export default {
	name: 'newsDetail',
	data() {
		return {
			title: '投资新经济是否值得？富途新经济指数成为评估风向标',
			time: '2018-06-13 09:29:31',
			content:`    据俄罗斯卫星网6月12日报道，欧盟外交与安全政策高级代表莫盖里尼12日在欧洲议会的听证会上表示，不能低估伊核协议破裂的风险。
      报道称，莫盖里尼在斯特拉斯堡说，“我认为，我们有与欧盟成员国和其他外国伙伴一起不让这份协议完全破裂的机会，但这项工作也有不能成功的风险。”她强调，不能低估这种风险。
      美国总统特朗普5月8日宣布美国退出国际调停六方(俄罗斯、美国、英国、中国、法国、德国)2015年与伊朗达成的伊核协议。特朗普还表示要恢复所有此前在该协议框架内暂停的对伊制裁。
      国际调停六方的其他五国反对美国此举，欧洲盟国表示，他们将继续遵守伊核协议条款。
据俄罗斯卫星网6月12日报道，欧盟外交与安全政策高级代表莫盖里尼12日在欧洲议会的听证会上表示，不能低估伊核协议破裂的风险。
      报道称，莫盖里尼在斯特拉斯堡说，“我认为，我们有与欧盟成员国和其他外国伙伴一起不让这份协议完全破裂的机会，但这项工作也有不能成功的风险。”她强调，不能低估这种风险。
      美国总统特朗普5月8日宣布美国退出国际调停六方(俄罗斯、美国、英国、中国、法国、德国)2015年与伊朗达成的伊核协议。特朗普还表示要恢复所有此前在该协议框架内暂停的对伊制裁。
      国际调停六方的其他五国反对美国此举，欧洲盟国表示，他们将继续遵守伊核协议条款。
据俄罗斯卫星网6月12日报道，欧盟外交与安全政策高级代表莫盖里尼12日在欧洲议会的听证会上表示，不能低估伊核协议破裂的风险。
      报道称，莫盖里尼在斯特拉斯堡说，“我认为，我们有与欧盟成员国和其他外国伙伴一起不让这份协议完全破裂的机会，但这项工作也有不能成功的风险。”她强调，不能低估这种风险。
      美国总统特朗普5月8日宣布美国退出国际调停六方(俄罗斯、美国、英国、中国、法国、德国)2015年与伊朗达成的伊核协议。特朗普还表示要恢复所有此前在该协议框架内暂停的对伊制裁。
      国际调停六方的其他五国反对美国此举，欧洲盟国表示，他们将继续遵守伊核协议条款。`
		};
	},

	components: {
		listHead,
	},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.newsDetail {
	padding: 0 20px;
	.top {
		padding: 0 20px;
		.title {
			font-size: 22px;
			padding: 20px 0;
			text-align: center;
		}
		p {
			span {
				font-size: 12px;
				padding: 0 20px;
			}
		}
	}
	.content{
		min-height: 400px;
		padding: 20px;
	}
}
</style>