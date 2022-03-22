import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set, onValue } from "firebase/database";

import { firebaseConfig } from 'env';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getDatabase();
const auth = firebase.auth();

export {
    db,
    auth,
    ref,
    set,
    onValue
};