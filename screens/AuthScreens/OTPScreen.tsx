import { Pressable, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import {
  ApplicationVerifier,
  PhoneAuthProvider,
  PhoneInfoOptions,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function OTPScreen({
  route,
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const verificationId = route.params?.verificationId;
  const [verificationCode, setVerificationCode] = useState<string>("");

  const verifyOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);

      console.log({
        text: "Phone authentication successful 👍",
      });
      navigation.navigate("Home");
    } catch (err) {
      console.log({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={{
            marginRight: 12,
            height: 50,
            width: 50,
            backgroundColor: Colors.baseColors.primary,
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <MaterialIcons
            size={25}
            color={Colors.baseColors.white}
            name="arrow-back"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>{"Enter OTP :"}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 45,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            marginTop: 14,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              flex: 3,
              paddingHorizontal: 12,
              height: "100%",

              fontSize: 16,
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              color: Colors.baseColors.gray,
            }}
            placeholder="OTP"
            keyboardType="numeric"
            textContentType="oneTimeCode"
            onChangeText={(verificationCode) => {
              setVerificationCode(verificationCode);
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            width: 230,
            height: 60,
            backgroundColor: Colors.baseColors.primary,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
          onPress={verifyOTP}
        >
          <Text
            style={{
              marginRight: 8,

              fontSize: 16,
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              color: Colors.baseColors.white,
              lineHeight: 19,
            }}
          >
            {"Next"}
          </Text>
          <MaterialIcons
            name="arrow-forward"
            color={Colors.baseColors.white}
            size={26}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.baseColors.white,
    padding: 14,
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: "20%",
  },
  title: {
    fontSize: 32,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    color: Colors.baseColors.black,
    lineHeight: 48,
    letterSpacing: 32 * -0.06,
  },
  mainContent: {
    marginTop: 28,
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
});
