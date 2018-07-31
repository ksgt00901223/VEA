<!-- 教师的侧边导航 -->
<template>
	<div class='teaAsideNav'>
		<div class="classify">
			<div class="classifyName fz16">
				体验课程产品
			</div>

			<el-collapse>
				<el-collapse-item>
					<template slot="title">
						<i class="header-icon iconfont icon-book1"></i>教
					</template>
					<div v-for='(item,index) of teaCourseExp' :key='index' @click="courseType(item)">
						<router-link :to='{path:item.path}'>
							{{item.title}}
						</router-link>
					</div>
				</el-collapse-item>
				<el-collapse-item>
					<template slot="title">

						<i class="header-icon iconfont icon-hat"></i>学
					</template>
					<div v-for='(item,index) of stuCourseExp' :key='index' @click="courseType(item)">
						<router-link :to='{path:item.path}'>
							{{item.title}}
						</router-link>
					</div>
				</el-collapse-item>
				<el-collapse-item>
					<template slot="title">

						<i class="header-icon iconfont icon-ruler"></i>教学辅助
					</template>
					<div v-for='(item,index) of teachingAid' :key='index' @click="courseType(item)">
						<router-link :to='{path:item.path}'>
							{{item.title}}
						</router-link>
					</div>
				</el-collapse-item>

			</el-collapse>
		</div>
		<div class="classify">
			<div class="classifyName fz16">
				基础课程产品
			</div>
			<el-collapse>
				<el-collapse-item>
					<template slot="title">
						<i class="header-icon iconfont icon-book1"></i>教
					</template>
					<div v-for='(item,index) of teaCourseBasic' :key='index' @click="courseType(item)">
						<router-link :to='{path:item.path}'>
							{{item.title}}
						</router-link>
					</div>
				</el-collapse-item>
				<el-collapse-item>
					<template slot="title">
						<i class="header-icon iconfont icon-download"></i>教师学习工具
					</template>
					<div>
						<p>
							<a href="#">下载安卓端APP</a>
						</p>
						<p>
							<a href="#">下载苹果端APP</a>
						</p>
					</div>
				</el-collapse-item>

			</el-collapse>
		</div>

		<div class="classify">
			<div class="classifyName fz16">
				我的教学课件
			</div>
			<div style="padding:20px 0">
				<div v-for='(item,index) of myCase' :key='index' class="my" @click="myCaseItem(item)">
				<router-link :to='{path:item.path,query:{course:item.courseType}}'>
					{{item.title}}
				</router-link>
			</div>
			</div>
			
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'teacherNav',
	data() {
		return {
			activeNames: ['1'],
			teaCourseExp: [
				{
					path: '/teacher/teachingCase',
					name:'teachingCase',
					title: '教学简案',
					courseType: 111,
				},
				{
					path: '/teacher/myppt',
					title: '教学PPT',
					courseType: 112,
				},
				{
					path: '/teacher/handCard1',
					name:'handCard1',
					title: '讲课手卡',
					courseType: 113,
				},
				{
					path: '/teacher/performVideo',
					title: '演课视频',
					courseType: 114,
				},
				{
					path: '/teacher/lectureVideo',
					title: '说课视频',
					courseType: 115,
				},
			],
			stuCourseExp: [
				{
					path: '/teacher/studyCase',
					title: '学生学案',
					courseType: 121,
				},
				{
					path: '/teacher/studyBrocade',
					title: '学习锦囊',
					courseType: 122,
				},
				{
					path: '/teacher/classBefore',
					title: '课前预习',
					courseType: 123,
				},
				{
					path: '/teacher/classAfter',
					title: '课后复习',
					courseType: 124,
				},
			],
			teachingAid: [
				{
					path: '/teacher/teachingEvaluation',
					title: '作业评估表',
					courseType: 131,
				},
				{
					path: '/teacher/studentWork',
					title: '学生任务册',
					courseType: 132,
				},
				{
					path: '/teacher/classWork',
					title: '班级任务册',
					courseType: 133,
				},
			],
			teaCourseBasic: [
				{
					path: '/teacher/teachingCase',
					title: '教学简案',
					courseType: 211,
				},
				{
					path: '/teacher/myppt',
					title: '教学PPT',
					courseType: 212,
				},
				{
					path: '/teacher/handCard',
					title: '讲课手卡',
					courseType: 213,
				},
				{
					path: '/teacher/performVideo',
					title: '演课视频',
					courseType: 214,
				},
				{
					path: '/teacher/lectureVideo',
					title: '说课视频',
					courseType: 215,
				},
			],
			myCase: [
				{
					path: '/teacher/myTeachingCase',
					title: '教学简案',
					type: 1,
				},
				{
					path: '/teacher/myTeachingPPT',
					title: '教学PPT',
					type: 2,
				},
				{
					path: '/teacher/myTeachingBrocade',
					title: '教学锦囊',
					type: 3,
				},
				{
					path: '/teacher/myTeachingVideo',
					title: '教学视频',
					type: 4,
				},
			],
		};
	},

	components: {},

	computed: {},

	methods: {
		// handleChange(val) {
		// 	console.log(val);
		// },
		courseType(item){
			// console.log(i);
			sessionStorage.courseType=item.courseType;
			sessionStorage.courseTitle=item.title;
									// this.$router.push({ path: path });

		},
		myCaseItem(item){
			sessionStorage.myCaseType=item.type;
			sessionStorage.myCaseTitle=item.title;
			console.log(item.type,item.title);
			
		}
	},
};
</script>
<style>
.teaAsideNav .el-collapse-item__header {
	font-size: 16px;
}
.teaAsideNav .el-collapse-item__content{
	padding-top: 10px;
}
</style>

<style lang='less' scoped>
.teaAsideNav {
	background: #fff;
	.classifyName {
		height: 50px;
		color: #fff;
		line-height: 50px;
		background: #5499fe;
	}
	a{
		padding: 5px;
		border-radius: 5px;
	}
	a:hover {
		background: #5499fe;
		color: #fff;
	}
}
.el-collapse-item__content > div {
	a {
		font-size: 16px;
		color: #666;
		cursor: pointer;
	}
}
.my {
	padding: 5px 0;
	font-size: 16px;
}
</style>