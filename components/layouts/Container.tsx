import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface IBottomTabBarProps {
	navigate: (arg: string) => void;
}

const BottomTabBar = (props: IBottomTabBarProps) => {
	const Links = ["Feed", "Search", "PostForm", "Account"];
	return (
		<View>
			{Links.map((Link) => {
				return (
					<TouchableOpacity onPress={() => props.navigate(`${Link}`)}>
						{Link}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

interface IContainerProps {
	children: any;
	navigate: (arg: string) => void;
}

export default (props: IContainerProps) => {
	return (
		<View>
			{props.children}
			<BottomTabBar navigate={props.navigate} />
		</View>
	);
};
