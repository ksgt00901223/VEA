<!-- 表头 -->
<template>
    <div class='listHead '>
        <el-row class="head">
            <el-col :span='18' class="headTitle">{{title}}</el-col>
            <el-col :span="6" class="fz14 newFolder hover" v-if="headType==1">
                <span class="add c">+</span>新建文件夹
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
	name: 'listHead',
	props: {
		title: String,
		headType: Number,
	},
	data() {
		return {};
	},

	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang='less' scoped>
.listHead {
	background: #fff;
	padding: 15px 0;
	border-bottom: 3px solid #e8e8e8;
	.head {
		border-left: 2px solid #5499fe;
		padding-left: 10px;
		.headTitle {
			font-size: 22px;
		}
		.newFolder {
			text-align: right;
			padding-right: 40px;
			.add {
				display: inline-block;
				width: 20px;
				height: 20px;
				line-height: 20px;
				font-size: 18px;
				text-align: center;
				color: #fff;
				background: #3a81f5;
			}
		}
	}
}
</style>