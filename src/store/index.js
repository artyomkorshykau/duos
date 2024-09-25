import GlobalHook from 'use-global-hook'
import quizState from '@/store/states/quiz'
import dataState from '@/store/states/data'
import tax from '@/store/states/tax'
import info from '@/store/states/info'
import userData from '@/store/states/user.js'
import profileTabs from '@/store/states/profile.tabs.js'
import tags from '@/store/states/tags.js'
import popups from '@/store/states/popups.js'
import * as actions from './actions'

const initialState = {
  
  publications: {},
  profile: {},
  service: {},
  school: {},
  quiz: quizState,
  tax: tax,
  info: info,
  user: userData,
  data: dataState,
  profileTabs: profileTabs,
  constructor: {},
  tags: tags,
  popups: popups
  
}


const useGlobal = GlobalHook( initialState, actions )

export default useGlobal
