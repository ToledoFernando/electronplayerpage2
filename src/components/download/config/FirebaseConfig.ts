"use client";
import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

const fireStoreConfigData = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(fireStoreConfigData);

export const store = getStorage(app);

export const getFile = async () => {
  const name_app = process.env.NEXT_PUBLIC_NAME_APP;
  const storageRef = ref(store, name_app);
  const url = await getDownloadURL(storageRef);
  return url;
};
