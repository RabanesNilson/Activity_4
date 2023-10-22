import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './screen/Main';
import Map from './screen/Map';
import Profile from './screen/Profile';
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Main') {
                  iconName = 'home';
                } else if (route.name === 'Map') {
                  iconName = 'map';
                } else if (route.name === 'Profile') {
                  iconName = 'user-circle-o';
                }

                return <Icon name={iconName} color={color} size={size} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#e91e63',
              inactiveTintColor: '#ffffff',
              style: { backgroundColor: '#000000' },
            }}
          >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
