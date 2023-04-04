import { addDoc, getDocs } from "firebase/firestore";
import { postagensCollection } from "./collections";

export async function addPost(data) {
  await addDoc(postagensCollection, data);
}

export async function getPost() {
  const snapshot = await getDocs(postagensCollection);
  let posts = [];
  snapshot.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  return posts;
}


    