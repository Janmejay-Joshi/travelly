import { serverTimestamp } from "@firebase/firestore";
import { geocodeAsync } from "expo-location";
import { addDoc, collection } from "firebase/firestore";
import { db } from ".";
import { RouteInterface } from "./types";

async function addRoute(data: RouteInterface) {
  await addDoc(collection(db, "routes"), {
    ...data,
    timestamp: serverTimestamp(),
  });
}

async function addLegend(data: RouteInterface) {
  await addDoc(collection(db, "routes"), {
    ...data,
    timestamp: serverTimestamp(),
  });
}

async function getSearchLocation(location: string) {
    const data = await geocodeAsync(location)
    return data
}

async function getRoutes() {}
async function getLegends() {}

export { addRoute, addLegend, getRoutes, getLegends, getSearchLocation};
