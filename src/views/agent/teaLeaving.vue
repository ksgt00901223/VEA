<!-- 离职教师 -->
<template>
  <div class='teaLeaving viewsBox'>
    <el-row class="headPart vcenter border-bottom-grey">
      <el-col :span="6" class="title">离职教师课程分配</el-col>
      <el-col :span="6" class="screen">
        <el-select v-model="courseValue" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="6" class="search por ">
        <el-input v-model="searchValue" placeholder="请输入教师手机号" class="custom"></el-input>
        <el-button type="primary" round class="searchBtn poa">查询</el-button>

      </el-col>
    </el-row>
    <el-row class="bodyPart">
      <el-col :span="12" v-for="(item, index) in teaLsit" :key='index' class="teaPart">
        <display-card :item='item' :type=2></display-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import displayCard from '@/components/list/displayCard.vue';
export default {
	name: 'teaLeaving',
	data() {
		return {
			courseValue: '',
			searchValue: '',
			options: [
				{
					value: '选项1',
					label: '黄金糕',
				},
				{
					value: '选项2',
					label: '双皮奶',
				},
				{
					value: '选项3',
					label: '蚵仔煎',
				},
				{
					value: '选项4',
					label: '龙须面',
				},
				{
					value: '选项5',
					label: '北京烤鸭',
				},
			],
			teaLsit: [
				{
					name: '占三分',
					tel: '11111111111',
					distribution: true,
				},
				{
					name: '占三分',
					tel: '11111111111',
					distribution: false,
				},
				{
					name: '占三分',
					tel: '11111111111',
					distribution: true,
				},
				{
					name: '占三分',
					tel: '11111111111',
					distribution: false,
				},
			],
		};
	},

	components: {
		displayCard,
	},

	computed: {},

	methods: {},
};
</script>
<style lang="less">
.teaPart {
	&:nth-child(even) {
		.content {
			margin-left: 60px;
		}
	}
}
</style>
<style lang='less' scoped>
.teaLeaving {
	padding: 0 30px;
	.headPart {
		padding: 15px 0;
		.title {
			font-size: 21px;
		}
		.search {
		}
		.searchBtn {
			right: 0;
			top: 0;
		}
	}
	.bodyPart {
	}
}
</style>