import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AppStack from './android/app/src/Arquitectura/presentation/navigation/AppStack';
import AuthStack from './android/app/src/Arquitectura/presentation/navigation/AuthStack';
import { COLORS } from "./android/app/src/Arquitectura/presentation/component/Constant/Color";
import Navigation from './android/app/src/Arquitectura/application/services/Navigation';

import Auth from './android/app/src/Arquitectura/application/services/Auth';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from './android/app/src/Arquitectura/application/Redux/reducer/user';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  const dispatch = useDispatch();

  const {userData, login} = useSelector(state => state.User);

  const [loginChk, setloginChk] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let data = await Auth.getAccount();
    if (data != null) {
      dispatch(setUser(data));
      setloginChk(false);
    } else {
      setloginChk(false);
    }
  };

  if (loginChk) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          headerMode="none"
          detachInactiveScreens={false}
          initialRouteName="Auth"
          screenOptions={{
            cardStyle: {backgroundColor: COLORS.white},
            gestureEnabled: true,
            backgroundColor: COLORS.button,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          {!login ? (
            <Stack.Screen name="Auth" component={AuthStack} />
          ) : (
            <Stack.Screen name="AppStack" component={AppStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}