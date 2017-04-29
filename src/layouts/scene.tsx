import * as React from "react";
import { View } from "react-native";
import NavigationBar from "../components/navigation-bar";

export const scene = (route: any, navigator: any) => {
  const Component = route.component;
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar
        backgroundStyle={{ backgroundColor: "#eee" }}
        navigator={navigator}
        route={route}
        title={route.title}
        titleColor="#333"
      />
      <Component
        navigator={navigator}
        route={route}
        {...route.passProps}
      />
    </View>
  );
};
