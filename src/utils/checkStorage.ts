/**
 * @file checkStorage.ts
 * @description Utility functions for managing and retrieving persisted application state from secure storage.
 * This module is responsible for initializing the app with user preferences stored in secure storage.
 */

import { changeFirstTime } from "@/redux/reducers/auth";
import { LanguageInterface, saveDefaultLanguage, saveDefaultTheme } from "@/redux/reducers/settings";
import store from "@/redux/store";
import i18next from "i18next";
import { secureStorage } from "./secureStorage";
const { dispatch } = store;

/**
 * Retrieves persisted application state from secure storage and initializes the Redux store.
 * 
 * @async
 * @function getLocalItem
 * @description This function runs at application startup to:
 *  1. Check if the app is running for the first time
 *  2. Load and apply the user's preferred language
 *  3. Load and apply the user's preferred theme
 * 
 * @throws {Error} Will log any errors encountered during retrieval or dispatch
 * @returns {Promise<void>}
 * 
 * @example
 * // Called in App.tsx useEffect
 * getLocalItem();
 */
export const getLocalItem = async () => {
    try {
        // Check if this is the first time the app has been run
        const isFirstTime = await secureStorage.getItem('IS_FIRST_TIME');
        
        // Get saved language preferences
        const language = await secureStorage.getObject<LanguageInterface>('LANGUAGE');
        
        // Get saved theme preferences
        const theme = await secureStorage.getItem('THEME');

        // Update first time flag in Redux store
        if (isFirstTime) {
            dispatch(changeFirstTime(true));
        }

        // Apply saved language if it exists
        if (language) {
            // Change i18next language
            i18next.changeLanguage(language.sortName);
            // Update Redux store with language preference
            dispatch(saveDefaultLanguage(language));
        }

        // Apply saved theme if it exists, otherwise set default light theme
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