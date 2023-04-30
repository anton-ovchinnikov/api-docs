import {child, onValue, push, ref, set} from "firebase/database";
import {database} from "./database";


export function getAllMethods(setMethods) {
    const dbRef = ref(database);
    onValue(child(dbRef, '/methods'), (snapshot) => {
        const data = snapshot.val();
        setMethods(data);
    });
}

export async function addNewMethod(methodInfo) {
    const dbRef = ref(database);
    const methodsRef = push(child(dbRef, '/methods/'));
    await set(methodsRef, {...methodInfo});
}