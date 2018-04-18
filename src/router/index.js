import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/views/courses'
import LessonDetail from '@/views/lessonDetail'
import Live from '@/views/live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'courses',
      component: Courses
    }, {
      path: '/lessonDetail',
      name: 'lessonDetail',
      component: LessonDetail
    }, {
      path: '/live',
      name: 'live',
      component: Live
    }
  ]
})
