import React from 'react';
import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Estrenos from '../screens/Estrenos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator
      initialRoutename="Entretenimiento"
      screenOptions={{
        tabBarActiveTintColor: '#F6F6F6',
        tabBarActiveBackgroundColor: '#E94C45',
        tabBarInactiveTintColor: '#F6F6F6',
        tabBarInactiveBackgroundColor: '#181D33',
      }}>
      <Tab.Screen
        name="Películas"
        component={Peliculas}
        options={{
          tabBarLabel: 'Películas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="tv"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Estrenos"
        component={Estrenos}
        options={{
          tabBarLabel: 'Próximamente',
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="staro"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
);
}