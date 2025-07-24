import { getMe } from "../../apis/users";
import { userRequest, userSuccess, userFailure } from "../slices/UserSlice";

const fetchUser = () => async (dispatch) => {
  try {
    dispatch(userRequest());
    const user = await getMe();
    if (user.status === 200) {
      dispatch(userSuccess(user.data.result));
    }
  } catch (error) {
    console.log("Error in fetchUser:", error);

    const message =
      error?.response?.data?.result || 
      error?.message ||               
      "Failed to fetch user";          

    dispatch(userFailure(message));
  }
};

export default fetchUser;
