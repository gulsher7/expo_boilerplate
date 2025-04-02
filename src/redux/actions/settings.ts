import { secureStorage } from "@/utils/secureStorage";
import { LanguageInterface, saveDefaultLanguage, saveDefaultTheme } from "../reducers/settings";
import store from "../store";
import { Language, ThemeMode } from "@/typings/global";
import i18next from "i18next";

const { dispatch } = store;

export const changeLanguageState = (language: LanguageInterface) => {
    secureStorage.setObject("LANGUAGE", language).then(() => {
        console.log("languagelanguage", language)
        i18next.changeLanguage(language.sortName);
        dispatch(saveDefaultLanguage({ name: language.name, sortName: language.sortName }))
    })
};

export const changeThemeState = (theme: ThemeMode) => {
    secureStorage.setItem("THEME", theme).then(() => {
        dispatch(saveDefaultTheme({ myTheme: theme }))
    })
};
