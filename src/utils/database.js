import { db } from "./firebase";
import { ref, get, onValue, set,child} from "firebase/database";
import { async } from "@firebase/util";

export async function fetchWatchlist(user_id) {
    const snap = await get(ref(db,`watchlist/${user_id}`))
    return snap.exists() ?  snap.val() : null;
}

export async function listen(endpoint, callback) {
    return onValue(ref(db,endpoint), callback)
}


export async function updateWatchlist(user_id, data) {
  //  console.log(data);
    const snap = await set(ref(db,`watchlist/${user_id}/${data.mal_id}`),data)
    return 
}

export async function removeAnime(user_id, data) {
  //  console.log(data);
    const snap = await set(ref(db,`watchlist/${user_id}/${data.mal_id}`),null)
    return 
}

export async function getWatchListData(user_id){
  const snapshot =  await get(ref(db, `watchlist/${user_id}`))
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
    return
  }
}