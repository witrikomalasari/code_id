import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '@screens/Detail/Detail';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import React, {ComponentProps, FC, Fragment} from 'react';

export type NavigatorParamList = {
  Login: undefined;
  Beranda: undefined;
  Home: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

interface IAppStack {}

const AppStack: FC<IAppStack> = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}
      initialRouteName="Home">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      theme={CodeIDTheme}
      {...props} //to stop navigation persistence
    >
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator';

const exitRoutes = ['Home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const CodeIDTheme = {
  ...DefaultTheme,
  DarkTheme: false,
  colors: {
    ...DefaultTheme.colors,
  },
};
