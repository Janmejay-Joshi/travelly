import { serverTimestamp } from "@firebase/firestore";
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

async function getRoutes() {}
async function getLegends() {}

export { addRoute, addLegend, getRoutes, getLegends};
