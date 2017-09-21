import Vue from 'vue'
import Router from 'vue-router'


import RootLayout from 'layouts/RootLayout'
import Landing from 'views/Landing'

import EmailVerify from 'views/EmailVerify'
import InvitedRegister from 'views/InvitedRegister'
import ForgetPassword from 'views/ForgetPassword'
import ResetPassword from 'views/ResetPassword'

import MyNewProject from 'views/MyNewProject'
import MyCreatedProjects from 'views/MyCreatedProjects'
import MyMarkedProjects from 'views/MyMarkedProjects'
import MyTeam from 'views/MyTeam'
import MyWallet from 'views/MyWallet'
import MySettings from 'views/MySettings'
import MyExpertApplication from 'views/MyExpertApplication'

import Post from 'views/Post'
import PostRatingDetail from 'views/PostRatingDetail'

import UserCreatedProjects from 'views/UserCreatedProjects'
import UserMarkedProjects from 'views/UserMarkedProjects'
import UserTeam from 'views/UserTeam'

import TokenSale from 'views/static_pages/TokenSale'
import UserGuide from 'views/static_pages/UserGuide'
import TermsAndPolicy from 'views/static_pages/TermsAndPolicy'
import CompanyPage from 'views/CompanyPage'

Vue.use(Router)

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
      path: '/me/wallet',
      component: MyWallet,
      name: 'me_wallet'
    }, {
      path: '/me/expert/application',
      component: MyExpertApplication,
      name: 'me_expert_apply'
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
      path: '/forget',
      component: ForgetPassword,
      name: 'forget_password'
    }, {
      path: '/reset',
      component: ResetPassword,
      name: 'reset_password'
    }, {
      path: '/tokensale',
      component: TokenSale,
      name: 'tokensale'
    }, {
      path: '/terms',
      component: TermsAndPolicy,
      name: 'terms'
    }, {
      path: '/faq',
      component: UserGuide,
      name: 'faq'
    }, {
      path: '/company',
      component: CompanyPage,
      name: 'company'
    }
    ]
  }]
})
