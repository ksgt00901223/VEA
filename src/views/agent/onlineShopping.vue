<!-- 在线购课 -->
<template>
	<div class='onlineShopping viewsBox'>
		<el-row class="headPart">
			<list-head title="在线购课"></list-head>
		</el-row>
		<el-row>
			<el-col :span="2" :offset="22" class="tac p20 hover">
				<router-link :to="{path:'/agent/shoppingCart'}">
					<div>
						<i class="icon iconfont icon-cart cart"></i>
					</div>
					<div>购物车</div>

				</router-link>

			</el-col>
		</el-row>
		<el-row class="bodyPart">
			<el-col :span="12" v-for="(item, index) in courseList" :key='index' class="mb20">
				<course-item :item='item'></course-item>
			</el-col>
				<div class="poa tac" style="bottom:25px;width:100%">
					<el-pagination background layout="prev, pager, next" :page-size='16'
					@current-change="handleCurrentChange" :total="total">
				</el-pagination>
				</div>
		</el-row>

	</div>
</template>

<script>
import courseItem from '@/components/list/courseItem';
import listHead from '@/components/list/listHead';

export default {
	name: 'onlineShopping',
	data() {
		return {
			courseList: [
				
			],
			total:1//总数
		};
	},

	components: {
		courseItem,
		listHead,
	},

	created() {
		this.$axios.get('/course/all',{
		params : {
			token:this.GLOBAL.token
		}
		})
		.then(res=>{
			console.log('ok');
			const o = res.data;
			this.courseList=o.data.data;
			this.total=o.data.total;
			console.log(this.courseList);
			
		})
		.catch(err=>{
			console.log(err);
		});
	},

	methods: {
		handleCurrentChange(val){
			console.log('当前页数'+val);
			this.page(val)
		},
		page(page){
			this.$axios.get('/course/all?token='+this.GLOBAL.token,{
			params : {
			page:page
			}
			})
			.then(res=>{
				const o = res.data;
							this.courseList=o.data.data;

				console.log(o.data);
			})
			.catch(err=>{
				console.log(err);
			});
		}
	},
};
</script>
<style lang='less' scoped>
.onlineShopping {
	padding: 0 20px;
	.bodyPart {
		padding: 20px 20px 80px;
	}
	.cart {
		font-size: 36px;
	}
}
</style>