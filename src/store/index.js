import GlobalHook from 'use-global-hook'
import quizState from '@/store/states/quiz'
import quizActions from '@/store/actions/quiz'
import dataState from '@/store/states/data'
import getInitialServiceState from './states/service'
import serviceActions from './actions/service'
import getInitialPublicationsState from '@/store/states/publications'
import publicationsActions from '@/store/actions/publications'
import getInitialSchoolState from '@/store/states/school'
import schoolActions from '@/store/actions/school'
import tax from '@/store/states/tax'
import info from '@/store/states/info'
import taxAgreeActions from '@/store/actions/tax'
import infoActions from '@/store/actions/info'
import profileActions from '@/store/actions/profile'
import userActions from '@/store/actions/user'
import userData from '@/store/states/user.js'
import { getInitialProfileState } from '@/store/states/profile.js'
import profileTabs from '@/store/states/profile.tabs.js'
import constructor from '@/store/states/constructor.js'
import tags from '@/store/states/tags.js'
import tagsActions from '@/store/actions/tags.js'
import constructorActions from '@/store/actions/constructor.js'

const initialState = {
  
  publications: getInitialPublicationsState(),
  profile: getInitialProfileState(),
  service: getInitialServiceState(),
  school: getInitialSchoolState(),
  quiz: quizState,
  tax: tax,
  info: info,
  user: userData,
  data: dataState,
  profileTabs: profileTabs,
  constructor: constructor,
  tags: tags
  
}

const actions = {
  
  profile: profileActions,
  service: serviceActions,
  publications: publicationsActions,
  school: schoolActions,
  quiz: quizActions,
  tax: taxAgreeActions,
  info: infoActions,
  user: userActions,
  tags: tagsActions,
  constructor: constructorActions
  
}

const useGlobal = GlobalHook( initialState, actions )

export default useGlobal
