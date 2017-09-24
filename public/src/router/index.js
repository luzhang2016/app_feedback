import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main'
import allQuestions from '@/views/allQuestions'
import submit from '@/views/submit'
import qas from '@/views/qas'
import qaDetail from '@/views/qaDetail'
import direction from '@/views/direction'


Vue.use(Router)

export default new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/all',
            name: 'allQuestions',
            component: allQuestions
        },
        {
            path: '/submit',
            name: 'submit',
            component: submit
        },
        {
            path: '/qas/:uuid',
            name: 'qas',
            component: qas,
        },
        {
            path: '/qaDetail/:uuid',
            name: 'qaDetail',
            component: qaDetail
        },
        {
            path: '/direction',
            name: 'direction',
            component: direction
        },
    ]
})