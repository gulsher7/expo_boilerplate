import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

export const appEvents = async ({
    eventName = '',
    payload = {}
}) => {
    if (!analytics) return;
    if (analytics) {
        logEvent(analytics, eventName, payload)
    }
};