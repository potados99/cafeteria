/**
 * This file is part of INU Cafeteria.
 *
 * Copyright (C) 2021 INU Global App Center <potados99@gmail.com>
 *
 * INU Cafeteria is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INU Cafeteria is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Main from './Main';
import React from 'react';
import Version from './Version';
import Notices from './Notices';
import Contacts from './Contacts';
import ServiceHelp from './ServiceManual';
import DirectInquiry from './DirectInquery';
import FrequentQuestions from './FrequentQuestions';
import TermsAndConditions from './TermsAndConditions';
import StackHeaderPresets from '../../components/utils/StackHeaderPresets';
import OpenSourceLicenses from './OpenSourceLicenses';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export type SupportNavigationParams = {
  SupportMain: undefined;
  SupportNotices: undefined;
  SupportVersion: undefined;
  SupportContacts: undefined;
  SupportServiceManual: undefined;
  SupportDirectInquiry: undefined;
  SupportFrequentQuestions: undefined;
  SupportTermsAndConditions: undefined;
  SupportOpenSourceLicenses: undefined;
};

export type SupportMainNavigation = StackNavigationProp<
  SupportNavigationParams,
  'SupportMain'
>;

const Stack = createStackNavigator<SupportNavigationParams>();

export default function SupportScreen() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={StackHeaderPresets.commonStackHeaderOptions}>
      <Stack.Screen
        name="SupportMain"
        component={Main}
        options={{title: '??????'}}
      />
      <Stack.Screen
        name="SupportContacts"
        component={Contacts}
        options={{title: '?????? ?????????'}}
      />
      <Stack.Screen
        name="SupportNotices"
        component={Notices}
        options={{title: '??????'}}
      />
      <Stack.Screen
        name="SupportVersion"
        component={Version}
        options={{title: '??????'}}
      />
      <Stack.Screen
        name="SupportDirectInquiry"
        component={DirectInquiry}
        options={{title: '1:1 ??????'}}
      />
      <Stack.Screen
        name="SupportFrequentQuestions"
        component={FrequentQuestions}
        options={{title: '?????? ?????? ??????'}}
      />
      <Stack.Screen
        name="SupportServiceManual"
        component={ServiceHelp}
        options={{title: '????????? ?????? ??????'}}
      />
      <Stack.Screen
        name="SupportTermsAndConditions"
        component={TermsAndConditions}
        options={{title: '????????????????????????'}}
      />
      <Stack.Screen
        name="SupportOpenSourceLicenses"
        component={OpenSourceLicenses}
        options={{title: '???????????? ????????????'}}
      />
    </Stack.Navigator>
  );
}
