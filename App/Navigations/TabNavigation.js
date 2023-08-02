import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeNavigate from './HomeNavigate';
import SearchNavigate from './SearchNavigate';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeNavigate}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchNavigate}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => <Ionicons name='search' size={size} color={color} />,
        }}
      />
      {/* <Tab.Screen
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
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <FontAwesome name='user' size={size} color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
