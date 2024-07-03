import GlobalHook from "use-global-hook";
import * as actions from "./actions";

export const initialUserStates = {

  user_id: null,
  user_name: "",
  user_lastname: "",
  user_role: 0,
  userData: {},

}

const initialState = {

  ...initialUserStates,

};

const useGlobal = GlobalHook( initialState, actions );

export default useGlobal;