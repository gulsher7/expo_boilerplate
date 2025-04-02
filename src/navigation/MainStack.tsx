import { HomeIcon, HomeInactiveIcon, ProfileInactiveIcon, SettingsIcon } from '@/assets/icons';
import {
  Home,
  Profile,
  Settings
} from '@/screens';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MyTabBar from './MyTabBar';
import { MainStackParamList } from './types';
import { useTheme } from '@/context/ThemeContext';

const Tab = createBottomTabNavigator<MainStackParamList>();

export const MainStack = () => {

  const { theme } = useTheme();
  const colors = Colors[theme];

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarLabelStyle: {
      fontSize: moderateScale(12),
      fontFamily: fontFamily.medium,
      color: colors.text,
    },
    tabBarStyle: {
      // backgroundColor: Colors.background,
      borderTopWidth: 1,
      // borderTopColor: Colors.border,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      id={undefined}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused ? <HomeIcon color={color} /> : <HomeInactiveIcon color={color} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color, focused }) => (
          focused ? <ProfileInactiveIcon color={color} /> : <ProfileInactiveIcon color={color} />
        ),
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({ color }) => (
          <SettingsIcon fill={colors.text} width={20} height={20} />
        )
      }} />
    </Tab.Navigator>
  );
}; 