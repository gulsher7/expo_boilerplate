export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  OTPVerification: {
    phoneNumber: string;
  };
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
}; 