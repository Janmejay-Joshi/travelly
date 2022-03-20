import MapView, { MapViewProps } from "react-native-maps";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  LocationAccuracy,
} from "expo-location";

export function CustomMapView(props: MapViewProps) {
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
  const initialRegion = location?.coords && {
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0042,
  };

  return (
    <MapView
      {...props}
      initialRegion={initialRegion}
      style={[
        {
          width: '100%',
          height: '100%',
          backgroundColor: Colors.light.background,
        },
        props.style,
      ]}
    >
      {props.children}
    </MapView>
  );
}
