<!-- 代理商默认 -->
<template>
    <div class='agentDefault'>
        <el-row type="flex" class="row tips" justify="space-between">
            <el-col :span="12" class="tip bgfff r10" style="margin-right:20px">
                <div class="headPart border-bottom-grey">
                    <span class="minus">系统提醒</span>
                </div>
                <div class="conPart">
                    <p>您已创建（）个旗下教师</p>
                    <p>您已购买（）门教学课件</p>
                    <p>您已申请（）个教学课件退款</p>
                </div>
            </el-col>
            <el-col :span="12" class="tip bgfff r10">
                <div class="headPart border-bottom-grey">
                    <span class="minus">新闻</span>
                    <span class="fr fz16">更多</span>
                </div>
                <div class="conPart">
                    <ul>
                        <li v-for="(item,index) in newsList" :key="index">
                            <router-link :to="{path:'/agent/newsDetail',query:{id:item.id}}">
                                {{item.title}}
                                <span>{{item.time}}</span>

                            </router-link>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <el-row class="viewsBox quickBuy">
            <el-col :span="24" class="headTitle tac c666">快速购课</el-col>
        </el-row>
    </div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'agentDefault',
	data() {
		return {
			newsList: [
				{
					id: 1,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 10,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 13,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 12,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 111,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 14,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
				{
					id: 51,
					title: '阳光喔2018冬令营 “文化+娱乐”打造创意寒假',
					time: '04/18',
				},
			],
		};
	},

	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.tips {
	background: #e8e8e8;
	.tip,
	.news {
		.headPart {
			padding: 20px;
			font-size: 24px;
			text-align: center;
		}
		.conPart {
			padding: 30px 20px 35px;
			text-align: center;
			color: #333;
			min-height: 290px;
			p {
				font-size: 21px;
				margin: 30px 0;
			}
			ul {
				padding: 0 20px;
			}
			li {
				text-align-last: left;
				padding: 10px 0;
				border-bottom: 2px solid #e8e8e8;
				list-style: square;
				font-size: 16px;
				min-height: 20px;
				span {
					float: right;
                }
                &:hover{
                    background: #eee;
                }
			}
		}
	}
}
.quickBuy {
	margin-top: 20px;
	min-height: 600px;
	.headTitle {
		font-size: 24px;
		padding: 25px 0;
	}
}
</style>