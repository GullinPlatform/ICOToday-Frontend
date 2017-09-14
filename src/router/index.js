import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import RootLayout from 'layouts/RootLayout'

import Landing from 'views/Landing'

import EmailVerify from 'views/EmailVerify'
import InvitedRegister from 'views/InvitedRegister'

import MyCreatedProjects from 'views/MyCreatedProjects'
import MyMarkedProjects from 'views/MyMarkedProjects'
import MyTeam from 'views/MyTeam'
import MySettings from 'views/MySettings'
import MyNewProject from 'views/MyNewProject'

import Post from 'views/Post'
import PostRatingDetail from 'views/PostRatingDetail'

import UserCreatedProjects from 'views/UserCreatedProjects'
import UserMarkedProjects from 'views/UserMarkedProjects'
import UserTeam from 'views/UserTeam'

import TokenSalse from 'views/TokenSale'
import TermsAndPolicy from 'views/TermsAndPolicy'

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
      path: '/project/:id/rating',
      component: PostRatingDetail,
      name: 'post_rating_detail'
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
    }, {
      path: '/user/:id/created',
      component: UserCreatedProjects,
      name: 'user_created'
    }, {
      path: '/user/:id/makred',
      component: UserMarkedProjects,
      name: 'user_marked'
    }, {
      path: '/user/:id/team',
      component: UserTeam,
      name: 'user_team'
    }, {
      path: '/verify',
      component: EmailVerify,
      name: 'email_verify'
    }, {
      path: '/invited',
      component: InvitedRegister,
      name: 'invited_register'
    }, {
      path: '/tokensale',
      component: TokenSalse,
      name: 'tokensale'
    }, {
      path: '/terms',
      component: TermsAndPolicy,
      name: 'terms'
    }

    ]
  }]
})
