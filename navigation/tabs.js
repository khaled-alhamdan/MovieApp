import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";
import { COLORS, icons } from "../constants";

import { TabIcon } from "../component";
import MoviePage from "../screens/MoviePage";
import MovieReviews from "../screens/MovieReviews";
import MovieList from "../screens/MovieList";

const Tab = createBottomTabNavigator();
// Create Home stackNavigator
const HomeStack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
// Create Profile stackNavigator
const ProfileStack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Profile"}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Friends" component={Friends} />
    </ProfileStack.Navigator>
  );
};
// Create Movie stackNavigator
const MovieStack = createStackNavigator();
const MovieNavigator = () => {
  return (
    <MovieStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"MovieList"}
    >
      <MovieStack.Screen name="MovieList" component={MovieList} />
      <MovieStack.Screen name="MoviePage" component={MoviePage} />
      <MovieStack.Screen name="Movie Reviews" component={MovieReviews} />
    </MovieStack.Navigator>
  );
};

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: "transparent",
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={MovieNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.play_button} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.add} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
