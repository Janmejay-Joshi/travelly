import { Pressable, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { CustomMapView } from "../components/FillMapView";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import CustomTopHeader from "../navigation/CustomTopHeader";
import CustomBottomSheet from "../components/CustomBottomSheet";

import { useEffect, useRef, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  LocationAccuracy,
  geocodeAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

interface LatLngDelta {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function HomeScreen() {
  const [location, setLocation] = useState<LatLngDelta>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0042,
  });

  const [errorMsg, setErrorMsg] = useState<string>("");
  const mapRef = useRef();

  const getDataFromSheet = (location: LatLngDelta) => {
    console.log('""da"');
    console.log(location);
    setLocation(location);
  };

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
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0042,
      });
    })();
  }, []);

  function repositonToLocation() {
    console.log(location);
    mapRef.current.animateToRegion(location, 500);
  }

  return (
    <>
      <View style={styles.container}>
        <CustomMapView ref={mapRef} style={{ position: "absolute", top: 0 }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
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
      <Pressable
        style={{
          position: "relative",
          bottom: "31.5%",
          height: 42,
          backgroundColor: Colors.baseColors.secondary,
          width: 42,
          borderRadius: 42,
          left: Layout.window.width - 60,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={repositonToLocation}
      >
        <MaterialIcons
          name="my-location"
          color={Colors.baseColors.white}
          size={28}
        />
      </Pressable>
      <CustomBottomSheet setLocation={getDataFromSheet} />
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
