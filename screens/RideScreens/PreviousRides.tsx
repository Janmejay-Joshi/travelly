import { FlatList, Pressable, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import React from "react";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import PreviousRideCard from "../../components/PreviousRideCard";

export default function PreviousRides({
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
          <Text style={styles.title}>{"Previous Rides"}</Text>
        </View>
        <View style={styles.mainContent}>
          <ScrollView>
            {/*TODO: Add FlatList*/}
            {[1, 2, 3, 4, 5, 6, 7].map((data, index) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("PrevRideDetails")}
                  key={index}
                >
                  <PreviousRideCard  />
                </Pressable>
              );
            })}
          </ScrollView>
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
});
