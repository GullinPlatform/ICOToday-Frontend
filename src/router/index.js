import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import RootLayout from 'layouts/RootLayout'

// import Home from 'views/Home'
import Landing from 'views/Landing'
import UserProjects from 'views/UserProjects'
import UserCreatedProjects from 'views/UserCreatedProjects'
import UserMarkedProjects from 'views/UserMarkedProjects'
import UserTeam from 'views/UserTeam'
import UserSettings from 'views/UserSettings'
import UserNewProject from 'views/UserNewProject'
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
      path: '/me/created',
      component: UserCreatedProjects,
      name: 'me_created'
    }, {
      path: '/me/marked',
      component: UserMarkedProjects,
      name: 'me_marked'
    }, {
      path: '/me/team',
      component: UserTeam,
      name: 'me_team'
    }, {
      path: '/me/settings',
      component: UserSettings,
      name: 'me_settings'
    }, {
      path: '/me/new',
      component: UserNewProject,
      name: 'me_new_project'
    }, {
      path: '/user/:id',
      component: UserProjects,
      name: 'user'
    }, {
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
