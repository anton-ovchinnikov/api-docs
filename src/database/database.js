import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    databaseURL: "PLACE URL",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);