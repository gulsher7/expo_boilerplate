import { secureStorage } from "@/utils/secureStorage";
import { changeFirstTime, clearData } from "../reducers/auth";
import store from "../store";

const { dispatch } = store;

export const changeFirstTimeState = (isFirstTime: boolean) => {
    secureStorage.setItem("IS_FIRST_TIME", isFirstTime.toString()).then(() => {  
        dispatch(changeFirstTime(isFirstTime))
    })
};

export const clearDataAction = () => {
    secureStorage.clearAll();
    dispatch(clearData());
}