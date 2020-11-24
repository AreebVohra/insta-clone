import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Profile" tabBarOptions={{ showLabel: false, activeTintColor: 'black', inactiveTintColor: 'gray' }}>
            <Tab.Screen
                name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="Discover" component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="search1" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name="plus-square-o" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="Notification" component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name="bell" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;