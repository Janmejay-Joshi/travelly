import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { CustomMapView } from "../components/FillMapView";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import CustomTopHeader from "../navigation/CustomTopHeader";

import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  LocationAccuracy,
} from "expo-location";

export default function TabTwoScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.High,
      });
      setLocation(location);
    })();
  }, []);

  console.log(location);
  const LatLng = location?.coords && {
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
  };
  return (
    <>
      <View style={styles.container}>
        <CustomMapView style={{ position: "absolute", top: 0 }}>
          <Marker
            coordinate={
              location?.coords.latitude && location?.coords.longitude
                ? {
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                  }
                : {
                    latitude: 0,
                    longitude: 0,
                  }
            }
          >
            <View
              style={{
                height: 26,
                borderRadius: 13,
                width: 26,
                marginRight: 8,
                backgroundColor: Colors.baseColors.secondary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 12,
                  borderRadius: 6,
                  width: 12,
                  backgroundColor: Colors.baseColors.pureWhite,
                }}
              ></View>
            </View>
          </Marker>
        </CustomMapView>
      </View>
      <CustomTopHeader />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.baseColors.pureWhite,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
