import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from 'firebase/database';

// const apiKey = process.env.API_KEY;
// const projectId = process.env.PROJECT_ID;
// const messagingSenderId = process.env.MESSAGING_SENDER_ID;

const firebaseConfig = {
    apiKey: "AIzaSyDyRB0Hbjwoms1UGwdY8_Idxsi9YNbm02M",
    // apiKey: apiKey,
    authDomain: "horas-f60ed.firebaseapp.com",
    databaseURL: "https://horas-f60ed-default-rtdb.firebaseio.com",
    projectId: "horas-f60ed",
    // projectId: projectId,
    storageBucket: "horas-f60ed.appspot.com",
    messagingSenderId: "586486381453",
    // messagingSenderId: messagingSenderId,
    appId: "1:586486381453:web:b387df746c4cc5c0d7dbc4",
    measurementId: "G-M4CSGN3D8H"
};

export async function getUpdates() {
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    try {
        if (!firebaseApp) { throw new Error('Missing Firebase app instance'); }

        const db = getDatabase(firebaseApp);
        const snapshot = await get(ref(db, 'updates/'));

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching updates:', error);
        throw error;
    }
}

export async function postUpdates(updatesData) {
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    try {
        if (!firebaseApp) { throw new Error('Missing Firebase app instance'); }

        const db = getDatabase(firebaseApp);
        await set(ref(db, 'updates/' + updatesData.id), updatesData);

        console.log('Updates saved successfully!');
    } catch (error) {
        console.error('Error saving updates:', error);
        throw error;
    }
}