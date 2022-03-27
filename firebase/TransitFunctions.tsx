import { doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { getDoc, setDoc } from "firebase/firestore";
import { geohashForLocation } from "geofire-common";
import { db } from ".";
import { TransitInterface } from "./types";

function UpdateGeoLocation(transit_id: string, lat: number, lng: number) {
  const hash = geohashForLocation([lat, lng]);

  const userLocation = doc(db, "transit_location", transit_id);
  updateDoc(userLocation, {
    geohash: hash,
    lat: lat,
    lng: lng,
    timestamp: serverTimestamp(),
  }).then(() => {
    // ...
  });
}

async function setTransit(data: TransitInterface) {
  await setDoc(doc(db, "transits", data.registration_number), {
    ...data,
  });
}

async function getTransitInfo(transit_ref: string) {
  const transitInfo = await getDoc(doc(db, "transit", transit_ref));
  return transitInfo.data;
}

async function updateTransitInfo(transit_ref: string, data: TransitInterface) {
  await updateDoc(doc(db, "transit", transit_ref), {
    ...data,
  });
}

export { getTransitInfo, updateTransitInfo, setTransit };
