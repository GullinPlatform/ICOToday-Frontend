import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

// import AuthLayout from 'layouts/AuthLayout'
// import DefaultLayout from 'layouts/DefaultLayout'
import RootLayout from 'layouts/RootLayout'

// import Home from 'views/Home'
import Landing from 'views/Landing'
import UserProjects from 'views/UserProjects'
import UserVerify from 'views/UserVerify'
import UserSettings from 'views/UserSettings'
import UserNewQuestion from 'views/UserNewQuestion'
import Post from 'views/Post'
import Team from 'views/Team'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: RootLayout,
    children: [{
      path: '/',
      component: Landing,
      name: 'landing'
    }, {
      path: '/post/:id',
      component: Post,
      name: 'post'
    }, {
      path: '/team/:id',
      component: Team,
      name: 'team'
    }, {
      path: '/me',
      component: UserProjects,
      name: 'me'
    }, {
      path: '/me/marked',
      component: UserProjects,
      name: 'me_marked'
    }, {
      path: '/me/verify',
      component: UserVerify,
      name: 'me_verify'
    }, {
      path: '/me/settings',
      component: UserSettings,
      name: 'me_settings'
    }, {
      path: '/me/new',
      component: UserNewQuestion,
      name: 'me_new_question'
    }, {
      path: '/user/:id',
      component: UserProjects,
      name: 'user'
    },
      {
        path: '/user/:id/makred',
        component: UserProjects,
        name: 'user_marked'
      }
      // {
      //   path: '/login',
      //   component: Question,
      //   name: 'login'
      // }
    ]
  }]
})
