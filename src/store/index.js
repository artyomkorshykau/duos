import user from "./states/user"
import profileActions from "./actions/profile"
import GlobalHook from "use-global-hook"
import getInitialProfileState from "./states/profile"
import quizState from "@/store/states/quiz"
import quizActions from "@/store/actions/quiz"
import getInitialServiceState from "./states/service"
import serviceActions from "./actions/service"

const initialState = {
  profile: getInitialProfileState(),
  service: getInitialServiceState(),
  quiz: quizState,
  user,
}

const actions = {
  profile: profileActions,
  service: serviceActions,
  quiz: quizActions,
}

const useGlobal = GlobalHook(initialState, actions)

export default useGlobal
