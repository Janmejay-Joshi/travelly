import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import React from "react";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import PreviousRideCard from "../../components/PreviousRideCard";

export default function PreviousRideDetails({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.navigation}>
          <TouchableOpacity
            style={{ marginRight: 12 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons size={31} name="arrow-back" />
          </TouchableOpacity>
          <Text style={styles.title}>{"Ride Details"}</Text>
        </View>
        <View style={styles.mainContent}>
          <View>
            <PreviousRideCard />
          </View>

          <View style={{ flex: 1, width: "100%", marginVertical: 24 }}>
            <Text style={styles.sectionTitle}>{"Trip Details"}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"From: "}</Text>
                <Text style={styles.valueText}>{"Vadodra"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"To: "}</Text>
                <Text style={styles.valueText}>{"Ahemdabad"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Fare: "}</Text>
                <Text style={styles.valueText}>{"₹400"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Mode: "}</Text>
                <Text style={styles.valueText}>{"Cash"}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, width: "100%", marginBottom: "10%" }}>
            <Text style={styles.sectionTitle}>{"Driver Details"}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Name: "}</Text>
                <Text style={styles.valueText}>{"Jhon Doe"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Car: "}</Text>
                <Text style={styles.valueText}>{"WagonR"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Vehcile No: "}</Text>
                <Text style={styles.valueText}>{"MP04 CG 5499"}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.feildText}>{"Color: "}</Text>
                <Text style={styles.valueText}>{"White"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: Colors.baseColors.pureWhite,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    elevation: 7,
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: Colors.baseColors.white,
    padding: 14,
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.black,
  },
  mainContent: {
    marginTop: 28,
    flex: 1,
    display: "flex",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    color: Colors.baseColors.gray,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Colors.baseColors.pureWhite,
    borderRadius: 8,
    width: "100%",
    marginTop: 12,
    padding: 13,
  },
  dataContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.baseColors.pureWhite,
  },
  feildText: {
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.gray,
  },
  valueText: {
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.black,
  },
});
