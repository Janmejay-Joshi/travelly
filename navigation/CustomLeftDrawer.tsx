import React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function CustomLeftDrawer(props: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.Drawer}>
      <View style={{ flex: 1 }}>
        <View style={styles.Logo}></View>
        <TouchableOpacity
          style={styles.Container}
          onPress={() => {
            navigation.navigate("Profile");
            navigation.dispatch(DrawerActions.closeDrawer);
          }}
        >
          <Text style={styles.Username}>{"Saket"}</Text>
          <MaterialIcons size={31} name="chevron-right" />
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          <CustomDrawerItem title="Home" name="map" location="Home" />
          <CustomDrawerItem
            title="Your Rides"
            name="electric-rickshaw"
            location="PrevRides"
          />
          <CustomDrawerItem
            title="Payments"
            name="payments"
            location="Payments"
          />
        </View>
      </View>
      <View style={{ height: "24%", display: "flex", paddingBottom: 30 }}>
        <View
          style={[
            styles.BottomButton,
            { backgroundColor: Colors.baseColors.primary },
          ]}
        >
          <MaterialIcons
            size={20}
            color={Colors.baseColors.white}
            adjustsFontSizeToFit
            name="logout"
          />
          <Text style={styles.BottomButtonText}>{"Logout"}</Text>
        </View>

        <View
          style={[
            styles.BottomButton,
            { backgroundColor: Colors.baseColors.secondary },
          ]}
        >
          <MaterialIcons
            size={20}
            color={Colors.baseColors.white}
            adjustsFontSizeToFit
            name="switch-account"
          />
          <Text style={styles.BottomButtonText}>{"Switch to Driver"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Drawer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    height: Layout.window.height,
    backgroundColor: Colors.baseColors.white,
    paddingTop: 55,
    paddingLeft: 14,
  },
  Logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.baseColors.primary,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Username: {
    marginTop: 15,
    fontSize: 22,
    // fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.black,
  },
  BottomButton: {
    flex: 1,
    width: "70%",
    marginBottom: 16,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  BottomButtonText: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
    color: Colors.baseColors.white,
  },
});

function CustomDrawerItem(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  title: string;
  location: string;
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 17,
      }}
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer);
        navigation.navigate(props.location);
      }}
    >
      <MaterialIcons size={15} color={Colors.baseColors.secondary} {...props} />
      <Text
        style={{
          fontSize: 16,
          // fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          marginLeft: 8,
          color: Colors.baseColors.black,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
