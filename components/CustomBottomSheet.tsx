import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetFooter,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { getSearchLocation } from "../firebase/MapFunctions";

interface LatLngDelta {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function CustomBottomSheet(getDataFromSheet: any) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "75%"], []);
  const [searchLocation, setSearchLocation] = useState<string>("");

  const handleSubmit = async () => {
    if (searchLocation != "") {
      const data = await getSearchLocation(searchLocation);
      console.log(data);
      getDataFromSheet({
        latitude: data[0].latitude,
        longitude: data[0].longitude,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0042,
      });
      return data;
    }
    console.log(3);
  };

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter
        {...props}
        bottomInset={14}
        style={styles.footerContainer}
      >
        <Pressable
          style={[
            styles.boxContainer,
            {
              backgroundColor: Colors.baseColors.primary,
              paddingLeft: 0,
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            },
          ]}
          onPress={handleSubmit}
        >
          <Text
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: 16,
              color: Colors.baseColors.white,
            }}
          >
            {"Book Now"}
          </Text>
        </Pressable>
      </BottomSheetFooter>
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      footerComponent={renderFooter}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        backgroundColor: Colors.baseColors.white,

        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
      handleIndicatorStyle={{
        width: 75,
        height: 5,
        backgroundColor: Colors.baseColors.gray,
      }}
      handleStyle={{
        backgroundColor: Colors.baseColors.white,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <BottomSheetView
        style={{
          flex: 1,
          backgroundColor: Colors.baseColors.white,
          padding: 14,
        }}
      >
        <BottomSheetView>
          <Text
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: 22,
              lineHeight: 27,
            }}
          >
            {"Where do you want to go?"}
          </Text>
        </BottomSheetView>
        <BottomSheetTextInput
          placeholder="Search for a destination"
          placeholderTextColor={Colors.baseColors.gray}
          style={[
            styles.boxContainer,
            {
              backgroundColor: "#EEE",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: 16,
              color: Colors.baseColors.gray,
            },
          ]}
          onChangeText={(locationInput) => {
            setSearchLocation(locationInput);
          }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 14,
    paddingLeft: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 8,
  },
  footerContainer: {
    padding: 14,
  },
});
