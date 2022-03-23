import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import React from "react";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function PreviousRideCard() {
  return (
    <View style={styles.RideContainer}>
      <View
        style={{
          borderRadius: 40,
          height: 40,
          width: 40,
          backgroundColor: Colors.baseColors.black,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="local-taxi"
          color={Colors.baseColors.white}
          size={30}
        />
      </View>
      <Text style={styles.RideTitle}>{"Trip to Ahemdabad"}</Text>
      <Text style={styles.RideCost}>{"₹400"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  RideContainer: {
    display: "flex",
    width: "100%",
    height: 100,
    padding: 13,
    backgroundColor: Colors.baseColors.pureWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 14,
    borderRadius: 8,
  },
  RideTitle: {
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 22,
    color: Colors.baseColors.black,
  },
  RideCost: {
    marginLeft: 8,
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.gray,
  },
});
