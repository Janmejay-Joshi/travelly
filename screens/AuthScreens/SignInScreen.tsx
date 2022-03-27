import { Pressable, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import React, { useRef, useState } from "react";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { auth, firebaseConfig } from "../../firebase";
import {
  ApplicationVerifier,
  PhoneAuthProvider,
  PhoneInfoOptions,
} from "firebase/auth";

export default function SignInScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const recaptchaVerifier = useRef<any>();
  const [phoneNumber, setPhoneNumber] = useState<string | PhoneInfoOptions>("");
  const [verificationId, setVerificationId] = useState<string>();

  async function sendOTP() {
    // The FirebaseRecaptchaVerifierModal ref implements the
    // FirebaseAuthApplicationVerifier interface and can be
    // passed directly to `verifyPhoneNumber`.
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+91${phoneNumber}`,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      console.log({
        text: "Verification code has been sent to your phone.",
      });
      navigation.navigate<any>("OTP", {
        verificationId,
      });
    } catch (err) {
      console.log({ text: `Error: ${err.message}`, color: "red" });
    }
  }

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // attemptInvisibleVerification={true}
      />
      <View style={[styles.navigation, { height: 50 }]} />
      <View style={styles.mainContent}>
        <Text style={styles.title}>{"My Phone Number is :"}</Text>
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
          <View
            style={{
              height: "100%",
              flex: 1,
              backgroundColor: Colors.baseColors.primary,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                color: Colors.baseColors.white,
                lineHeight: 19,
                marginHorizontal: 8,
              }}
            >
              {"+91"}
            </Text>
            <MaterialIcons
              size={16}
              name="arrow-downward"
              color={Colors.baseColors.white}
            />
          </View>
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
            placeholder="Mobile number"
            keyboardType="number-pad"
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            onChangeText={(phoneNumber) => {
              setPhoneNumber(phoneNumber);
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
          onPress={() => {
            sendOTP();
          }}
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
