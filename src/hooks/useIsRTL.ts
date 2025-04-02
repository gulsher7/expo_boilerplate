import { useTranslation } from 'react-i18next';

/**
 * Hook to determine if the current layout direction is RTL (Right-to-Left)
 * 
 * @returns {boolean} True if the current layout is RTL, false otherwise
 */
const useIsRTL = (): boolean => {
    const { i18n } = useTranslation();

    // Primarily use the language direction from i18next
    // This ensures we follow the language setting rather than system settings
    const isRTL = i18n.dir() === 'rtl';

    return isRTL;
};

export default useIsRTL;
