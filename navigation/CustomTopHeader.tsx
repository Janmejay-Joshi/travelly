import React from "react";
import { View, Text } from "../components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import useColorScheme from "../hooks/useColorScheme";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function CustomTopHeader() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        width: Layout.window.width,
        height: 60,
        paddingHorizontal: 18,
        display: "flex",
        position: "absolute",
        top: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        marginTop: 30,
        backgroundColor: "#FFFFFF00",
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: Colors.baseColors.white,
          padding: 10,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
          zIndex: 10000,
        }}
      >
        <TabBarIcon
          name="menu"
          title="Home"
          color={Colors[colorScheme].textDark}
        />
        <View
          style={{
            height: 16,
            borderRadius: 10,
            width: 16,
            marginRight: 8,
            backgroundColor: Colors.baseColors.secondary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 7,
              borderRadius: 4,
              width: 7,
              backgroundColor: Colors.baseColors.pureWhite,
            }}
          ></View>
        </View>
        <Text
          style={{
            fontSize: 18,
            // fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            color: "#868686",
          }}
        >
          {"Your Current Location"}
        </Text>
      </View>
    </View>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
  title: string;
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginRight: 15 }}
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer);
      }}
    >
      <MaterialIcons size={31} {...props} />
    </TouchableOpacity>
  );
}
