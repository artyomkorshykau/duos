import GlobalHook from "use-global-hook";
import * as actions from "./actions";
//тестовые данные
import FAKEDATA from "./FAKEDATA";
import STEPS from "./FAKEQUIZDATA"

export const initialUserStates = {

  // user_id: null,
  // user_name: "",
  // user_lastname: "",
  // user_avatar: "",
  // user_role: "",
  // userData: {},

  //тестовые данные
  user_id: 1,
  user_name: FAKEDATA.userName,
  user_lastname: FAKEDATA.userLastName,
  user_avatar: FAKEDATA.userAvatar,
  user_role: FAKEDATA.userRole,

}

const initialState = {

  ...initialUserStates,
  quizData: STEPS

};

const useGlobal = GlobalHook( initialState, actions );

export default useGlobal;