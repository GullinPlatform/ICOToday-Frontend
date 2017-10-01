import Vue from 'vue'
import Router from 'vue-router'

import RootLayout from 'layouts/RootLayout'
import Landing from 'views/Landing'

import RegisterFollowUp from 'views/RegisterFollowUp'
import EmailVerify from 'views/EmailVerify'
import InvitedRegister from 'views/InvitedRegister'
import ForgetPassword from 'views/ForgetPassword'
import ResetPassword from 'views/ResetPassword'

import MyBase from 'views/my_components/MyBase'
import MyExpertApplication from 'views/my_components/MyExpertApplication'
import MyFeed from 'views/my_components/MyFeed'
import MyMarkedProjects from 'views/my_components/MyMarkedProjects'
import MyProfile from 'views/my_components/MyProfile'
import MySettings from 'views/my_components/MySettings'
import MyWallet from 'views/my_components/MyWallet'
import NeedVerify from 'views/my_components/NeedVerify'

import CompanyNewProject from 'views/my_components/CompanyNewProject'
import CompanyProject from 'views/my_components/CompanyProject'
import CompanyTeam from 'views/my_components/CompanyTeam'
import CompanyWallet from 'views/my_components/CompanyWallet'
import CompanyPromotion from 'views/my_components/CompanyPromotion'

import UserBase from 'views/user_components/UserBase'
import UserFeed from 'views/user_components/UserFeed'
import UserMarkedProjects from 'views/user_components/UserMarkedProjects'
import UserTeam from 'views/user_components/UserTeam'

import Post from 'views/Post'
import PostRatingDetail from 'views/PostRatingDetail'
import CompanyPage from 'views/CompanyPage'

import TokenSale from 'views/static_pages/TokenSale'
import UserGuide from 'views/static_pages/UserGuide'
import TermsAndPolicy from 'views/static_pages/TermsAndPolicy'

import NotificationsFeed from 'views/NotificationsFeed'

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
      path: '/register/followup',
      component: RegisterFollowUp,
      name: 'register_followup'
    }, {
      path: '/project/:id',
      component: Post,
      name: 'post'
    }, {
      path: '/project/:id/rating',
      component: PostRatingDetail,
      name: 'post_rating_detail'
    }, {
      path: '/me',
      component: MyBase,
      children: [
        {
          path: '/me/expert/application',
          component: MyExpertApplication,
          name: 'me_expert_apply'
        }, {
          path: '/me/feed',
          component: MyFeed,
          name: 'me'
        }, {
          path: '/me/marked',
          component: MyMarkedProjects,
          name: 'me_marked'
        }, {
          path: '/me/profile',
          component: MyProfile,
          name: 'me_profile'
        }, {
          path: '/me/settings',
          component: MySettings,
          name: 'me_settings'
        }, {
          path: '/me/wallet',
          component: MyWallet,
          name: 'me_wallet'
        }, {
          path: '/me/company/newproject',
          component: CompanyNewProject,
          name: 'company_new_project'
        }, {
          path: '/me/company/project',
          component: CompanyProject,
          name: 'company_project'
        }, {
          path: '/me/company/team',
          component: CompanyTeam,
          name: 'company_team'
        }, {
          path: '/me/company/wallet',
          component: CompanyWallet,
          name: 'company_wallet'
        },{
          path: '/me/company/promotion',
          component: CompanyPromotion,
          name: 'company_promotion'
        }, {
          path: '/me/unverified',
          component: NeedVerify,
          name: 'me_need_verify'
        },
      ]
    }, {
      path: '/user/:id',
      component: UserBase,
      children: [
        {
          path: '/feed',
          component: UserFeed,
          name: 'user'
        }, {
          path: '/marked',
          component: UserMarkedProjects,
          name: 'user_marked'
        }, {
          path: '/team',
          component: UserTeam,
          name: 'user_team'
        },
      ]
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
      path: '/company/:id',
      component: CompanyPage,
      name: 'company'
    }, {
      path: '/notifications',
      component: NotificationsFeed,
      name: 'notifications'
    }
    ]
  }]
})
