import user from './states/user'
import profileActions from './actions/profile'
import GlobalHook from 'use-global-hook';
import getInitialProfileState from './states/profile';
import quizState from '@/store/states/quiz';
import quizActions from '@/store/actions/quiz';

const initialState = {

  profile: getInitialProfileState(),
  quiz: quizState,
  user

}

const actions = {

  profile: profileActions,
  quiz: quizActions

}

const useGlobal = GlobalHook( initialState, actions )

export default useGlobal