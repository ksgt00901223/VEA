<!-- 订单条 -->
<template>
	<div class='orderItem'>
		<el-row class="headPart">
			<el-col :span="12" class="c333 fz16">
				<span class="">订单编号：{{item.orderNum}}</span>
			</el-col>
			<el-col :span="12" class="tar c333 fz16">
				<span>下单日期：{{item.time}}</span>
			</el-col>
		</el-row>
		<el-row class="bodyPart ">
			<el-col :span="3" class="cover">
				<div>
					<img :src="item.imgUrl" :alt="item.title">
				</div>
			</el-col>
			<el-col :span="14" class="title">
				<p>{{item.title}}</p>
			</el-col>
			<el-col :span="5" :offset="2" class="info">
				<div>单价：{{item.unitPrice}} 元</div>
				<div>数量： {{item.num}}套</div>
				<div>合计：{{item.totalPrice}} 元</div>
				<div class="btn">
					<el-button type="primary" round>取消订单</el-button>
					<el-button type="primary" round @click="payment">立即付款</el-button>

				</div>
			</el-col>
		</el-row>
		<prompt-payment v-show='promptPaymentShow' @show='isShowPay'></prompt-payment>

	</div>
</template>

<script>
//import aa from 'aa';
import promptPayment from '@/components/dialog/promptPayment';

export default {
	name: 'orderItem',
	props: {
		item: Object,
	},
	data() {
		return {
			promptPaymentShow: false,
		};
	},

	components: {
		promptPayment,
	},

	computed: {},

	methods: {
		payment() {
			this.promptPaymentShow = true;
		},
		isShowPay(i) {
			this.promptPaymentShow = i;
		},
	},
};
</script>
<style lang='less' scoped>
.orderItem {
	padding: 0 20px;
	//     width:832px;
	// height:175px;
	border-radius: 10px;
	box-shadow: 4px 0px 9px rgba(0, 0, 0, 0.07);
	.headPart {
		padding: 10px 0;
		border-bottom: 1px solid #e8e8e8;
		span {
			padding: 0 10px;
		}
	}
	.bodyPart {
		padding: 10px 0;
		.cover {
			div {
				width: 80px;
				height: 100px;
				background: #eee;
				margin: 0 auto;
				overflow: hidden;
				img {
					height: 100%;
					width: 100%;
				}
			}
		}
		.title {
			font-size: 20px;
			color: #333;
		}
		.info {
			div {
				padding: 5px;
				font-size: 16px;
			}
			.btn {
				button {
					padding: 5px;
				}
			}
		}
	}
}
</style>