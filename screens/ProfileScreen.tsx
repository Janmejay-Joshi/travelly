import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React from "react";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { getUserInfo } from "../firebase/UserFunctions";

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const data = getUserInfo("916265779089");
  console.log(data);
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
          <Text style={styles.title}>{"Profile"}</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.ProfilePic}></View>
          <View style={styles.PersonalDetails}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 28,
              }}
            >
              <Text
                style={[styles.title, { fontWeight: "bold", fontSize: 16 }]}
              >
                {"Personal Details"}
              </Text>
              <Text
                style={[
                  styles.title,
                  { fontSize: 14, color: Colors.baseColors.gray },
                ]}
              >
                {"Edit"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.baseColors.pureWhite,
                width: "100%",
                borderRadius: 8,
                padding: 5,
                marginTop: 14,
              }}
            >
              <View style={styles.DetailsContainer}>
                <MaterialIcons
                  name="person"
                  size={20}
                  color={Colors.baseColors.secondary}
                />
                <Text style={styles.DetailsText}>{"Saket Khare"}</Text>
              </View>
              <View style={styles.seperator} />
              <View style={styles.DetailsContainer}>
                <MaterialIcons
                  name="phone"
                  size={20}
                  color={Colors.baseColors.secondary}
                />
                <Text style={styles.DetailsText}>{"+91 6265779089"}</Text>
              </View>
              <View style={styles.seperator} />
              <View style={styles.DetailsContainer}>
                <MaterialIcons
                  name="home-filled"
                  size={20}
                  color={Colors.baseColors.secondary}
                />
                <Text style={styles.DetailsText}>
                  {"B/29 Ayodhaya Puri, Kodaria"}
                </Text>
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
  ProfilePic: {
    backgroundColor: Colors.baseColors.gray,
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  PersonalDetails: {
    flex: 1,
    display: "flex",
    width: "100%",
  },
  DetailsContainer: {
    display: "flex",
    width: "100%",
    padding: 8,
    backgroundColor: Colors.baseColors.pureWhite,
    flexDirection: "row",
  },
  DetailsText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.black,
  },
  seperator: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: Colors.baseColors.muted,
  },
});
