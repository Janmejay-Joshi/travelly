import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetFooter,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function CustomBottomSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "75%"], []);

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
        >
          <Text
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            {"Book Now"}
          </Text>
        </Pressable>
      </BottomSheetFooter>
    ),
    []
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
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
