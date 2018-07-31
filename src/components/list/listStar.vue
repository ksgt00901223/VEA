<!-- 带星星的列表项 -->
<template>
	<div class='listStar'>
		<el-row v-for='(item, index) in list' :key='index' class="listItem">
			<span class="listRadius poa">
			</span>
			<span class="order i poa">
				{{index+1}}
			</span>
			<span class="listAvatar poa">
				<!-- <img :src="list.avatarImg" alt=""> -->
			</span>
			<div class="listCon poa">
				<h5 class="tit">{{item.tit}}</h5>
				<p class="author">{{item.name}}</p>
			</div>
			<div class="listStarNum poa">
				<span>
					<img src="./img/zan.png" alt="zan">
				</span>
				<span>
					{{item.zan}}
				</span>
			</div>
		</el-row>

	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'listStar',
	props: {
		list: Array,
	},
	data() {
		return {
			isA: false,
			isB: false,
			isC: false,
		};
	},
	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.listStar {
	.listItem {
		position: relative;
		width: 308px;
		height: 55px;
		margin: 15px auto;
		background: #fff;
		border-radius: 10px;
		box-shadow: 12px 8px 16px rgba(255, 255, 255, 0.2);
		overflow: hidden;
		.listRadius {
			background: #f83600;
			width: 35px;
			height: 35px;
			border-radius: 0 0 26px;
			left: -4px;
			top: -4px;
		}
		.order {
			left: 7px;
			top: 2px;
			font-size: 20px;
			color: #fff;
		}
		.listAvatar {
			height: 40px;
			width: 40px;
			border: 1px solid #000;
			left: 35px;
			top: 6px;
		}
		.listCon {
			left: 90px;
			width: 165px;
			padding: 10px 0;
			.tit {
				font-style: italic;
				color: #333;
				font-size: 14px;
			}
			.author {
				font-size: 12px;
				color: #666;
			}
		}
		.listStarNum {
			height: 34px;
			width: 34px;
			right: 10px;
			top: 10px;
			text-align: center;
			cursor: pointer;
		}
	}
	.listItem:nth-child(1) .listRadius {

		background: -webkit-linear-gradient(left, #f83600, #f9d423); /* Safari 5.1 to 6.0 */
		background: -o-linear-gradient(right, #f83600, #f9d423); /* Opera 11.1 to 12.0 */
		background: -moz-linear-gradient(right, #f83600, #f9d423); /* Firefox 3.6 to 15 */
		background: linear-gradient(to right, #f83600, #f9d423); /* 标准语法 */
	}
	.listItem:nth-child(2) .listRadius {
		background: -webkit-linear-gradient(left, #BDC2E8, #E6DEE9); /* Safari 5.1 to 6.0 */
		background: -o-linear-gradient(right, #BDC2E8, #E6DEE9); /* Opera 11.1 to 12.0 */
		background: -moz-linear-gradient(right, #BDC2E8, #E6DEE9); /* Firefox 3.6 to 15 */
		background: linear-gradient(to right, #BDC2E8, #E6DEE9); /* 标准语法 */
	}
	.listItem:nth-child(3) .listRadius {
		background: #c79081;
		background: -webkit-linear-gradient(left, #C79081, #DFA579); /* Safari 5.1 to 6.0 */
		background: -o-linear-gradient(right, #C79081, #DFA579); /* Opera 11.1 to 12.0 */
		background: -moz-linear-gradient(right, #C79081, #DFA579); /* Firefox 3.6 to 15 */
		background: linear-gradient(to right, #C79081, #DFA579); /* 标准语法 */
	}
	.listItem:nth-child(4) .listRadius {
		background: #3890ee;
		background: -webkit-linear-gradient(left, #3890EE, #4FBEF1); /* Safari 5.1 to 6.0 */
		background: -o-linear-gradient(right, #3890EE, #4FBEF1); /* Opera 11.1 to 12.0 */
		background: -moz-linear-gradient(right, #3890EE, #4FBEF1); /* Firefox 3.6 to 15 */
		background: linear-gradient(to right, #3890EE, #4FBEF1); /* 标准语法 */
	}
	.listItem:nth-child(5) .listRadius {
		background: #3890ee;
		background: -webkit-linear-gradient(left, #3890EE, #4FBEF1); /* Safari 5.1 to 6.0 */
		background: -o-linear-gradient(right, #3890EE, #4FBEF1); /* Opera 11.1 to 12.0 */
		background: -moz-linear-gradient(right, #3890EE, #4FBEF1); /* Firefox 3.6 to 15 */
		background: linear-gradient(to right, #3890EE, #4FBEF1); /* 标准语法 */
	}
	
}
</style>