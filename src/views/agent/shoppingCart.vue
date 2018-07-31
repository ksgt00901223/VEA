<!-- 我的购物车 -->
<template>
  <div class='shoppingCart viewsBox por'>
      <el-row class="headPart">
          <list-head title="我的购物车" ></list-head>
      </el-row>
      <div class="bodyPart">
          
          <div style="width:850px;margin: 0 auto">
              <cart-table :shoppingList='shoppingList' :tableType='1'></cart-table>
          </div>
      </div>
  </div>
</template>

<script>
 import cartTable from '@/components/list/cartTable';
 import listHead from '@/components/list/listHead';
export default {
  name:'shoppingCart',
  data () {
    return {
        shoppingList: [
				// {
				// 	name: '王小虎',
				// 	title: '体验课程k1-k2',
				// 	unitPrice: 100,
				// 	num: 1,
				// 	totalPrice: 0,
				// 	imgUrl: 'http://img3.imgtn.bdimg.com/it/u=4207866837,1215025918&fm=27&gp=0.jpg',
				// },
				// {
				// 	name: '王大虎',
				// 	title: '体验课程k1-k2',
				// 	unitPrice: 1100,
				// 	num: 1,
				// 	totalPrice: 1100,
				// 	imgUrl: 'http://img3.imgtn.bdimg.com/it/u=4207866837,1215025918&fm=27&gp=0.jpg',
				// },
				// {
				// 	name: '王老虎',
				// 	title: '体验课程k1-k2',
				// 	unitPrice: 10,
				// 	num: 1,
				// 	totalPrice: 10,
				// 	imgUrl: 'http://img3.imgtn.bdimg.com/it/u=4207866837,1215025918&fm=27&gp=0.jpg',
				// },
			],
    };
  }, 
 
  components: {
      cartTable,
      listHead,
  },

  created () {
	this.$axios.get('/cart',{
	params : {
		token:this.GLOBAL.token
	}
		
	})
	.then(res=>{
		console.log('获取购物车ok');
		const o = res.data;
		this. shoppingList=o.data;
		console.log(o.data);
		
	})
	.catch(err=>{
		console.log(err);
	});  
	
  },
  methods: {}
}

</script>
<style lang='less' scoped>
.shoppingCart{
    padding: 0 20px 35px;
   
}
</style>