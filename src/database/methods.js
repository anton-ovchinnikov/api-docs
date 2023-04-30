import {onValue, child, ref} from "firebase/database";
import {database} from "./database";


export function getAllMethods(setMethods) {
    const dbRef = ref(database);
    onValue(child(dbRef, '/methods'), (snapshot) => {
        const data = snapshot.val();
        setMethods(data);
    });
}