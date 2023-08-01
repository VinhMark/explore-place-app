import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeNavigate from './HomeNavigate';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={HomeNavigate}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <FontAwesome name='user' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Fav'
        component={Fav}
        options={{
          tabBarLabel: 'Fav',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => <Ionicons name='search' size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
