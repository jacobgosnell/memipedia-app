import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "../screens/SearchScreen";
import FeedScreen from "../screens/FeedScreen";

// Nested level of routing system
const AppStack = createStackNavigator(
	{
		Feed: FeedScreen,
		Search: SearchScreen,
	},
	{
		initialRouteName: "FeedScreen",
	}
);

export default createAppContainer(
	createSwitchNavigator(
		{
			App: AppStack,
		},
		{
			initialRouteName: "App",
		}
	)
);
