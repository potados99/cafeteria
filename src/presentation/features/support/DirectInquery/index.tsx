import React from 'react';
import colors from '../../../res/colors';
import palette from '../../../res/palette';
import AskScreen from './AskScreen';
import {StyleSheet} from 'react-native';
import HistoryScreen from './HistoryScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type AskAndAnswersNavigationParams = {
  DirectInquiryAsk: undefined;
  DirectInquiryHistory: undefined;
};

export default function DirectInquiry() {
  const Tab = createMaterialTopTabNavigator<AskAndAnswersNavigationParams>();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        labelStyle: styles.label,
        indicatorStyle: styles.indicator,
        activeTintColor: colors.themeBlue,
        inactiveTintColor: colors.textDisabled,
      }}>
      <Tab.Screen
        name="DirectInquiryAsk"
        component={AskScreen}
        options={{title: '문의하기'}}
      />
      <Tab.Screen
        name="DirectInquiryHistory"
        component={HistoryScreen}
        options={{title: '지난 문의 내역'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    ...palette.shadowedTopBar,
  },
  label: {
    fontSize: 14,
    padding: 0,
  },
  indicator: {
    backgroundColor: colors.themeBlue,
    borderRadius: 1,
  },
});