import user from "./states/user"
import profileActions from "./actions/profile"
import GlobalHook from "use-global-hook"
import getInitialProfileState from "./states/profile"
import quizState from "@/store/states/quiz"
import quizActions from "@/store/actions/quiz"
import getInitialServiceState from "./states/service"
import serviceActions from "./actions/service"
import getInitialPublicationsState from "@/store/states/publications";
import publicationsActions from "@/store/actions/publications";
import getInitialSchoolState from "@/store/states/school";
import schoolActions from "@/store/actions/school";

const initialState = {
  publications: getInitialPublicationsState(),
  profile: getInitialProfileState(),
  service: getInitialServiceState(),
  school: getInitialSchoolState(),
  quiz: quizState,
  user,
}

const actions = {
  profile: profileActions,
  service: serviceActions,
  publications: publicationsActions,
  school: schoolActions,
  quiz: quizActions,
}

const useGlobal = GlobalHook(initialState, actions)

export default useGlobal
