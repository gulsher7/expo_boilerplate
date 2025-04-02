import { changeFirstTime } from "@/redux/reducers/auth";
import { LanguageInterface, saveDefaultLanguage, saveDefaultTheme } from "@/redux/reducers/settings";
import store from "@/redux/store";
import i18next from "i18next";
import { secureStorage } from "./secureStorage";
const { dispatch } = store;

export const getLocalItem = async () => {
    try {
        const isFirstTime = await secureStorage.getItem('IS_FIRST_TIME');
        const language = await secureStorage.getObject<LanguageInterface>('LANGUAGE');
        const theme = await secureStorage.getItem('THEME');

        if (isFirstTime) {
            dispatch(changeFirstTime(true));
        }

        if (language) {
            i18next.changeLanguage(language.sortName);
            dispatch(saveDefaultLanguage(language));
        }

        if (theme) {
            dispatch(saveDefaultTheme({ myTheme: theme }));
        } else {
            // Set default theme if none exists
            const systemTheme = 'light';
            await secureStorage.setItem('THEME', systemTheme);
            dispatch(saveDefaultTheme({ myTheme: systemTheme }));
        }
    } catch (error) {
        console.error(error);
    }
}           