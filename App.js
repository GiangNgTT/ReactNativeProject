import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Home from './src/screens/Home';
import FirstPage from './src/screens/Home/FirstPage';
import MyMapView from './src/screens/MapView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => {
            return {
              animation: 'fade_from_bottom',
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Text>Back</Text>
                  </TouchableOpacity>
                );
              },
            };
          }}>
          <Stack.Screen
            name={'FirstPage'}
            component={FirstPage}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={'Home'}
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen
            options={({route, navigation}) => {
              return {
                headerTitleAlign: 'center',
                title: route?.params?.headerTitle,
              };
            }}
            name={'MapView'}
            component={MyMapView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
