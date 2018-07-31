<!-- 教学简案 -->
<template>
    <div class='teachingCase viewsBox'>
        <el-row class="headPart">
            <el-col :span="14" class="title">
                体验课程产品-教学简案
            </el-col>
            <el-col :span="10" class="tar">
                <span class="p020 star">选择课程</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="bodyPart">
            <el-row class="row-bg">
                <el-col :span="8" class="item" v-for="(item, index) in caseList" :key='index'>
                    <div class="content r10">
                        <div class="con por">
                            <div class=" preview r10 poa"><img src="" alt=""></div>
                            <div class="poa edit">
                                <p>
                                    <el-button type="text">下载</el-button>
                                </p>
                                <p>
                                    <el-button type="text">预览</el-button>
                                </p>
                            </div>
                        </div>
                        <p class="title fz14 c333 tac">{{item.title}}</p>
                    </div>
                    <div class="time fz14 c33">
                        <span class="fl">{{item.time}}</span>
                        <span class="fr">{{item.size}}</span>
                    </div>
                </el-col>
                <!-- <el-col :span="6">8</el-col>
                <el-col :span="6">7</el-col> -->
            </el-row>
        </el-row>
    </div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'teachingCase',
	data() {
		return {
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
			value: '',
			caseList: [
				{
					imgurl: '',
					title: '文学思维（上）一单元（上）春',
					time: '2018-04-29 09：56',
					size: '1mb',
				},
				{
					imgurl: '',
					title: '文学思维（上）一单元（上）春',
					time: '2018-04-29 09：56',
					size: '1mb',
				},
				{
					imgurl: '',
					title: '文学思维（上）一单元（上）春',
					time: '2018-04-29 09：56',
					size: '1mb',
				},
				{
					imgurl: '',
					title: '文学思维（上）一单元（上）春',
					time: '2018-04-29 09：56',
					size: '1mb',
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
.teachingCase {
	padding: 0 35px 30px;
	min-height: 400px;
	.headPart {
		padding: 20px 0;
		border-bottom: 3px solid #e8e8e8;
		display: flex;
		align-items: center;
		.title {
			padding-left: 10px;
			border-left: 2px solid #5499fe;
			font-size: 21px;
			color: #333;
		}
	}
}
.item {
    margin-top: 35px;
    padding: 0 40px;
	.content {
		box-shadow: 7px 0px 9px rgba(76, 113, 246, 0.12);
		.con {
			height: 120px;
			// width: 210px;
			.preview {
				height: 104px;
				width: 160px;
				top: 50%;
				left: 50%;
				margin-top: -52px;
				margin-left: -80px;
				background: #000;
				transition: all 1s;
				img {
					width: 100%;
					height: 100%;
				}
				&:hover {
					top: -20px;
					left: 6px;
					margin: 0;
					box-shadow: 0px 0px 13px rgba(0, 87, 255, 0.91);
				}
				&:hover + .edit {
					display: block;
				}
			}
			.edit {
				right: 10px;
				top: 10px;
				display: none;
				transition: all 1s;
			}
			
		}.title {
				padding: 5px;
			}
	}
    .time {height: 15px;
    line-height: 15px;
    padding: 5px;
	}
}
</style>