import { doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import {
  arrayUnion,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { geohashForLocation } from "geofire-common";
import { db } from ".";
import { RideInterface, UserInterface } from "./types";

function UpdateGeoLocation(user_id: string, lat: number, lng: number) {
  const hash = geohashForLocation([lat, lng]);

  const userLocation = doc(db, "user_location", user_id);
  updateDoc(userLocation, {
    geohash: hash,
    lat: lat,
    lng: lng,
    timestamp: serverTimestamp(),
  }).then(() => {
    // ...
  });
}

async function addRide(user_ref: string, ride: RideInterface) {
  await updateDoc(doc(db, "users", user_ref, "rides"), {
    rides: arrayUnion({ ...ride }),
  });
}

async function setUser(data: UserInterface) {
  await setDoc(doc(db, "users", data.phone_number.slice(1)), {
    ...data,
  });
}

async function getUserInfo(user_ref: string) {
  const userInfo = await getDoc(doc(db, "users", user_ref));
  return userInfo.data;
}

async function updateUserInfo(user_ref: string, data: UserInterface) {
  await updateDoc(doc(db, "users", user_ref), {
    ...data,
  });
}

export { getUserInfo, updateUserInfo, addRide, setUser };
