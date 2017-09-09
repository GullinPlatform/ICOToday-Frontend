import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import RootLayout from 'layouts/RootLayout'

import Landing from 'views/Landing'
// import UserProjects from 'views/UserProjects'
import MyCreatedProjects from 'views/MyCreatedProjects'
import MyMarkedProjects from 'views/MyMarkedProjects'
import MyTeam from 'views/MyTeam'
import MySettings from 'views/MySettings'
import MyNewProject from 'views/MyNewProject'
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
      path: '/project/:id',
      component: Post,
      name: 'post'
    }, {
      path: '/team/:id',
      component: Team,
      name: 'team'
    }, {
      path: '/me/created',
      component: MyCreatedProjects,
      name: 'me_created'
    }, {
      path: '/me/marked',
      component: MyMarkedProjects,
      name: 'me_marked'
    }, {
      path: '/me/team',
      component: MyTeam,
      name: 'me_team'
    }, {
      path: '/me/settings',
      component: MySettings,
      name: 'me_settings'
    }, {
      path: '/me/new',
      component: MyNewProject,
      name: 'me_new_project'
    },
    //   {
    //   path: '/user/:id',
    //   component: UserProjects,
    //   name: 'user'
    // }, {
    //   path: '/user/:id/makred',
    //   component: UserProjects,
    //   name: 'user_marked'
    // },
      {
      path: '/team/:id',
      component: Team,
      name: 'team'
    }
      // {
      //   path: '/login',
      //   component: Question,
      //   name: 'login'
      // }
    ]
  }]
})
