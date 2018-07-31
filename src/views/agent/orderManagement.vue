<!-- 订单管理 -->
<template>
    <div class='orderManagement viewsBox por'>
        <el-row class="headPart">
            <el-col :span="8" class="tar"><span @click='changeTag(1)' :class="active==1?'line_':''">全部订单</span></el-col>
            <el-col :span="8" :offset="8" class="tal "><span @click="changeTag(2)" :class="active==2?'line_':''">待付款</span></el-col>
           
        </el-row>
        <div class="bodyPart">
            <el-col :span="24" class="mb20" v-for="(item, index) in orderList" :key="index">
                <order-item :item='item'></order-item>
            </el-col>

        </div>
    </div>
</template>

<script>
//import aa from 'aa';
import orderItem from '@/components/list/orderItem';
export default {
	name: 'orderManagement',
	data() {
		return { 
			orderList: [
				{
					title: 'kkkkkkkksss',
					unitPrice: 100,
					num: 55,
                    totalPrie: 111,
                    orderNum:888888888,
                    time:'208-10-15',
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530149404&di=ec91f7736a9faa8a353793c398ad370d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201309%2F09%2F20130909172852_Q4RSf.thumb.700_0.jpeg'
				},
				{
					title: 'kkkkkkkksss',
					unitPrice: 100,
					num: 55,
                    totalPrie: 111,
                     orderNum:888888888,
                                         imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530149404&di=ec91f7736a9faa8a353793c398ad370d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201309%2F09%2F20130909172852_Q4RSf.thumb.700_0.jpeg',

                    time:'208-10-15'
				},
				{
					title: 'kkkkkkkksss',
					unitPrice: 100,
					num: 55,
                    totalPrie: 111,
                     orderNum:888888888,
                                                              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530149404&di=ec91f7736a9faa8a353793c398ad370d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201309%2F09%2F20130909172852_Q4RSf.thumb.700_0.jpeg',

                    time:'208-10-15'
				},
				{
					title: 'kkkkkkkksss',
					unitPrice: 100,
					num: 55,
                    totalPrie: 111,
                     orderNum:888888888,
                                                              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530149404&di=ec91f7736a9faa8a353793c398ad370d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201309%2F09%2F20130909172852_Q4RSf.thumb.700_0.jpeg',

                    time:'208-10-15'
				},
            ],
            active:1
		};
	},

	components: {
		orderItem,
	},

	computed: {},

	methods: {
        changeTag(i){
            this.active=i;
        }
    },
};
</script>
<style lang='less' scoped>
.orderManagement {
	padding: 0 20px 35px;
	.headPart {
        height: 100px;
        padding: 20px;
        
        span{
                padding: 20px;
                font-size: 20px;
                cursor: pointer;
            }
	}
}
</style>