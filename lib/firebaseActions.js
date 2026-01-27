import { auth, db } from "@/lib/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

/* ===============================
   ➕ CREATE RESTAURANT + ADMIN
   =============================== */
export const addRestaurant = async ({
  name,
  email,
  password,
  location,
  phone,
  createdBy,
}) => {
  try {
    // ⚠️ This WILL switch auth session
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const adminUid = userCredential.user.uid;

    // Save restaurant
    await setDoc(doc(db, "restaurants", adminUid), {
      name,
      email,
      location,
      phone,
      isActive: true,
      adminUid,
      createdBy,
      createdAt: serverTimestamp(),
    });

    // Save user profile
    await setDoc(doc(db, "users", adminUid), {
      email,
      role: "admin",
      restaurantId: adminUid,
      createdAt: serverTimestamp(),
    });

    return adminUid;
  } catch (error) {
    console.error("Error in addRestaurant:", error);
    throw error;
  }
};

/* ===============================
   ✏️ UPDATE RESTAURANT
   =============================== */
export const updateRestaurant = async (restaurantId, data) => {
  try {
    const docRef = doc(db, "restaurants", restaurantId);

    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.error("Error in updateRestaurant:", error);
    throw error;
  }
};

/* ===============================
   📥 GET ALL RESTAURANTS
   =============================== */
export const getRestaurants = async () => {
  try {
    const snapshot = await getDocs(collection(db, "restaurants"));
    const data = [];

    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error in getRestaurants:", error);
    throw error;
  }
};

/* ===============================
   📄 GET SINGLE RESTAURANT
   =============================== */
export const getRestaurantById = async (restaurantId) => {
  try {
    const docRef = doc(db, "restaurants", restaurantId);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error in getRestaurantById:", error);
    throw error;
  }
};

/* ===============================
   🗑 DELETE RESTAURANT
   =============================== */
export const deleteRestaurant = async (restaurantId) => {
  try {
    await deleteDoc(doc(db, "restaurants", restaurantId));
    return true;
  } catch (error) {
    console.error("Error in deleteRestaurant:", error);
    throw error;
  }
};
