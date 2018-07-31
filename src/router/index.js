import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';
import specialCourse from '@/views/specialCourse';
//教师
import teacher from '@/views/teacher/teacher';
import teaDefault from '@/views/teacher/teaDefault';
import teaPersonal from '@/views/teacher/teaPersonal';
// import teachingPPT from '@/views/teacher/teachingPPT';
import teaRanking from '@/views/teacher/teaRanking';
//导航--公用
// import fileList from '@/components/list/fileList.vue';

// //导航--教师 
// import teachingCase from '@/views/teacher/teachingCase';
// import teaPPT from '@/views/teacher/teaPPT';
// import handCard from '@/views/teacher/handCard';
// import lectureVideo from '@/views/teacher/lectureVideo';
// import performVideo from '@/views/teacher/performVideo';
// //导航--学生
// import studyCase from '@/views/teacher/studyCase';
// import studyBrocade from '@/views/teacher/studyBrocade';
// import classAfter from '@/views/teacher/classAfter';
// import classBefore from '@/views/teacher/classBefore';
// //导航教学辅助
// import teachingEvaluation from '@/views/teacher/teachingEvaluation';
// import studentWork from '@/views/teacher/studentWork';
// import classWork from '@/views/teacher/classWork';
//我的
// import myTeachingCase from '@/views/teacher/myTeachingCase';
// import myTeachingPPT from '@/views/teacher/myTeachingPPT';
// import myTeachingBrocade from '@/views/teacher/myTeachingBrocade';
// import myTeachingVideo from '@/views/teacher/myTeachingVideo';


//代理商
import agent from '@/views/agent/agent';
import agentDefault from '@/views/agent/agentDefault';
import teaManagement from '@/views/agent/teaManagement';
import addTeacher from '@/views/agent/addTeacher';
import teaLeaving from '@/views/agent/teaLeaving';
import agentInfo from '@/views/agent/agentInfo';
import teaInfo from '@/views/agent/teaInfo';
import courseAllot from '@/views/agent/courseAllot';
import orderManagement from '@/views/agent/orderManagement';
import onlineShopping from '@/views/agent/onlineShopping';
import shoppingCart from '@/views/agent/shoppingCart';
import buyNow from '@/views/agent/buyNow';

import newsDetail from '@/components/news/newsDetail';
import fileList1 from '@/components/list/fileList1';
import folderList1 from '@/components/list/folderList1';


Vue.use(Router);

export default new Router({
  mode: 'history', //url中的#
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/specialCourse',
      name: 'specialCourse',
      component: specialCourse,
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher,
      children: [{
          path: '/teacher',
          name: 'teaDefault',
          component: teaDefault,
        },
        
        // {
        //   path: '/teacher/teachingPPT',
        //   name: 'teachingPPT',
        //   component: teachingPPT,
        // },
        {
          path: '/teacher/ranking',
          name: 'ranking',
          component: teaRanking,
        },
        {
          path: '/teacher/personal',
          name: 'personal',
          component: teaPersonal,
        },
        {
          path: '/teacher/newsDetail',
          name: 'teaNewsDetail',
          component: newsDetail,
        },
        //导航--教师
        {
          path: '/teacher/teachingCase',
          name: 'teachingCase',
          // component: teachingCase,
                    component: fileList1,

        },
        {
          path: '/teacher/myppt',
          name: 'ppt',
          // component: teaPPT,
                    component: fileList1,

        },
        {
          path: '/teacher/handCard',
          name: 'handCard',
          // component: handCard,
                    component: fileList1,

        },
        {
          path: '/teacher/handCard1',
          name: 'handCard1',
          component: fileList1,
        },
        {
          path: '/teacher/lectureVideo',
          name: 'lectureVideo',
          // component: lectureVideo,
                    component: fileList1,

        },
        {
          path: '/teacher/performVideo',
          name: 'performVideo',
          // component: performVideo,
                    component: fileList1,

        },
        //导航-学生
        {
          path: '/teacher/studyCase',
          name: 'studyCase',
          // component: studyCase,
                    component: fileList1,

        },
        {
          path: '/teacher/studyBrocade',
          name: 'studyBrocade',
          // component: studyBrocade,
                    component: fileList1,

        },
        {
          path: '/teacher/classAfter',
          name: 'classAfter',
          // component: classAfter,
                    component: fileList1,

        },
        {
          path: '/teacher/classBefore',
          name: 'classBefore',
          // component: classBefore,
                    component: fileList1,

        },
        //导航-教学辅助
        {
          path: '/teacher/teachingEvaluation',
          name: 'teachingEvaluation',
          // component: teachingEvaluation,
                    component: fileList1,

        },
        {
          path: '/teacher/studentWork',
          name: 'studentWork',
          // component: studentWork,
                    component: fileList1,

        },
        {
          path: '/teacher/classWork',
          name: 'classWork',
          // component: classWork,
                    component: fileList1,

        },
        //我的
        {
          path: '/teacher/myTeachingCase',
          name: 'myTeachingCase',
          // component: myTeachingCase,
          component: folderList1,
        },
        {
          path: '/teacher/myTeachingPPT',
          name: 'myTeachingPPT',
          // component: myTeachingPPT,
                    component: folderList1,

        },
        {
          path: '/teacher/myTeachingBrocade',
          name: 'myTeachingBrocade',
          // component: myTeachingBrocade,
                    component: folderList1,

        },
        {
          path: '/teacher/myTeachingVideo',
          name: 'myTeachingVideo',
          // component: myTeachingVideo,
                    component: folderList1,

        },
      ]
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent,
      children: [

        {
          path: '/agent',
          name: 'agentDefault',
          component: agentDefault
        },
        {
          path: '/agent/teaManagement',
          name: 'teaManagement',
          component: teaManagement
        },
        {
          path: '/agent/addTeacher',
          name: 'addTeacher',
          component: addTeacher
        },
        {
          path: '/agent/teaLeaving',
          name: 'teaLeaving',
          component: teaLeaving
        },
        {
          path: '/agent/agentInfo',
          name: 'agentInfo',
          component: agentInfo
        },
        {
          path: '/agent/teaInfo',
          name: 'teaInfo',
          component: teaInfo
        },
        {
          path: '/agent/courseAllot',
          name: 'courseAllot',
          component: courseAllot
        },
        {
          path: '/agent/newsDetail',
          name: 'agentNewsDetail',
          component: newsDetail
        },
        {
          path: '/agent/orderManagement',
          name: 'orderManagement',
          component: orderManagement
        },
        {
          path: '/agent/onlineShopping',
          name: 'onlineShopping',
          component: onlineShopping
        },
        {
          path: '/agent/shoppingCart',
          name: 'shoppingCart',
          component: shoppingCart
        },
        {
          path: '/agent/buyNow',
          name: 'buyNow',
          component: buyNow
        },

      ]
    },
  ],
});
