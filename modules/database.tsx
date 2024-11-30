import { database } from "../firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import { onValue } from "firebase/database";
import { Game } from "../models/Game";

export function writeUserData(userId, name, email, imageUrl = "") {
    set(ref(database, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl,
    });
}

export async function getUsersInfo(userIds) {
    try {
        const usersInfo = [];
        const usersRef = ref(database, 'users');

        for (const userId of userIds) {
            const userSnapshot = await get(child(usersRef, userId));

            if (userSnapshot.exists()) {
                usersInfo.push({ id: userId, ...userSnapshot.val() });
            } else {
                console.log(`User with ID ${userId} does not exist.`);
            }
        }

        return usersInfo;
    } catch (error) {
        console.error("Error fetching user information:", error);
    }
}


export function createGameRoom(creator) {
    return set(ref(database, "rooms/" + "test_room"), {
        players: [creator],
    });
}

export function updateGameRoom(gameObj) {
    let roomCode = gameObj.game_code;
    return set(ref(database, "rooms/" + roomCode), gameObj);
}

export function gameRoomPlayerSubscriber(roomCode, action = (subscriber) => {}) {
    let playersRef = ref(database, "rooms/" + roomCode + "/players");
    return onValue(playersRef, action);
}

export function insertDbo(gameCode, dbo) {
    return set(ref(database, "games/" + gameCode), dbo);
}

export function gameRoomSubscriber(action = () => {}) {
    let gameRoomRef = ref(database, "rooms");
    return onValue(gameRoomRef, action);
}

export function gameSubscriber(gameCode, action = (snapshot) => {}) {
    let gameRoomRef = ref(database, "games/" + gameCode);
    return onValue(gameRoomRef, action);
}

// export function updateGame(gameCode, gameObj) {
//     return set(ref(database, "games/" + gameCode), gameObj);
// }

export function updateGame(gameObj:Game) {
    let gameCode = gameObj.game_code;
    return set(ref(database, "games/" + gameCode), gameObj);
}