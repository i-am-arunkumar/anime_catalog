import { db } from "./firebase";
import { ref, get, onValue} from "firebase/database";

export async function fetch(endpoint) {
    const snap = await get(ref(db,endpoint))
    return snap.exists() ?  snap.val() : null;
}

export async function listen(endpoint, callback) {
    return onValue(ref(db,endpoint), callback)
}
