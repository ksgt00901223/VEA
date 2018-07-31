<!-- 立即购买-->
<template>
    <div class='buyNow viewsBox por'>
        <el-row class="headPart">
            <list-head title="立即购买"></list-head>
        </el-row>
        <div class="bodyPart">
            <div style="width:850px;margin: 0 auto">
                <cart-table :shoppingList='shoppingList' :tableType='2'></cart-table>
            </div>
        </div>
        <!-- <prompt-payment @show='isShowPay'></prompt-payment> -->
    </div>
</template>

<script>
import cartTable from '@/components/list/cartTable';
import listHead from '@/components/list/listHead';
//  import promptPayment from '@/components/dialog/promptPayment';

export default {
	name: 'buyNow',
	data() {
		return {
			shoppingList: [
				{
					name: '王小虎',
					title: '体验课程k1-k2',
					unitPrice: 100,
					num: 1,
					totalPrice: 0,
					imgUrl: 'http://img3.imgtn.bdimg.com/it/u=4207866837,1215025918&fm=27&gp=0.jpg',
				},
			],
			courseId: 0,
			// promptPaymentShow:false
		};
	},

	components: {
		cartTable,
		listHead,
		// promptPayment,
	},
	created() {
		this.courseId = this.$route.query.courseId;
		console.log(this.courseId);
	},
	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.buyNow {
	padding: 0 20px 35px;
	.bodyPart {
		padding: 20px 0 35px;
	}
}
</style>