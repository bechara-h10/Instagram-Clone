import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {
  GET_POSTS,
  SET_LOADING_STATUS,
  SET_USER,
  LIKE_POST,
} from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.log(error));
  };
}

export function getPostsAPI() {
  return (dispatch) => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("actor.date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const payload = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(getPosts(payload));
    });
    return () => {
      unsubscribe();
    };
  };
}

export function addPostsAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      dispatch(setLoading(true));
      const imageRef = ref(storage, `images/${payload.image.name}`);
      const file = payload.image;
      const uploadTask = uploadBytesResumable(imageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            snapshot.bytesTransferred / snapshot.totalBytes / 100;
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}`);
          }
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(imageRef);
          await addDoc(collection(db, "posts"), {
            actor: {
              email: payload.user.email,
              name: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            sharedImg: downloadURL,
            comments: 0,
            likes: 0,
            likedBy: [],
            caption: payload.caption,
            location: payload.location,
          });
        }
      );
      dispatch(setLoading(false));
    }
  };
}

export function likePostAPI(postId, user) {
  return async (dispatch) => {
    const postRef = doc(db, "posts", postId);
    try {
      const postSnap = await getDoc(postRef);
      if (!postSnap.exists()) {
        console.log("Post not found");
        return;
      }
      const postDoc = postSnap.data();
      let likedByArray = postDoc.likedBy || [];
      const userIndex = likedByArray.indexOf(user.email);
      if (userIndex !== -1) {
        likedByArray = likedByArray.filter((email) => email !== user.email);
      } else {
        likedByArray.push(user.email);
      }
      await updateDoc(postRef, {
        likes: likedByArray.length,
        likedBy: likedByArray,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
