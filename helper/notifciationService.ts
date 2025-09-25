import { AuthorizationStatus, getMessaging, getToken, requestPermission } from '@react-native-firebase/messaging';

const messagingInstance = getMessaging();

export async function requestUserPermission() {
  const authStatus = await requestPermission(messagingInstance);
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

const getFCMToken = async () => {
  try {
    const token = await getToken(messagingInstance);
    console.log("fcm token", token);
    return token;
  } catch (error) {
    console.log("error during generating token", error);
  }
};