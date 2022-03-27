import { serverTimestamp } from "@firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { db } from ".";
import { AppReviewInterface, RideReviewInterface } from "./types";

async function addRideReview(data: RideReviewInterface) {
  await addDoc(collection(db, "ride_review"), {
    ...data,
    timestamp: serverTimestamp(),
  });
}

async function addAppReview(data: AppReviewInterface) {
  await addDoc(collection(db, "ride_review"), {
    ...data,
    timestamp: serverTimestamp(),
  });
}

export { addRideReview, addAppReview };
