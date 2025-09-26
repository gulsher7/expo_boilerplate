import { secureStorage } from '@/utils/secureStorage';
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

    const fcmToken = await secureStorage.getItem('FCM_TOKEN');
    if(!!fcmToken){
      return fcmToken;
    }
    const token = await getToken(messagingInstance);
    if(!!token){
      await secureStorage.setItem('FCM_TOKEN', token);
    } 
    return token;
  } catch (error) {
    console.log("error during generating token", error);
  }
};