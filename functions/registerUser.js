// netlify/functions/registerUser.js
const { db } = require('./firebase');

exports.handler = async (event, context) => {
    // Parse request body
    const { uid, number, username, coin = 0 } = JSON.parse(event.body || '{}');

    if (!uid || !number || !username) {
        return {
            statusCode: 400,
            body: "Missing required fields.",
        };
    }

    try {
        // Reference to the user document in Firestore
        const userDocRef = db.collection('users').doc(uid);

        // Check if the user already exists
        const docSnapshot = await userDocRef.get();
        if (docSnapshot.exists) {
            return {
                statusCode: 400,
                body: "User already registered.",
            };
        }

        // Register the new user with provided data
        await userDocRef.set({
            number: number,
            coin: coin, // Use the provided coin value or default to 0
            username: username,
        });

        return {
            statusCode: 201,
            body: "User registered successfully.",
        };
    } catch (error) {
        console.error("Error registering user:", error);
        return {
            statusCode: 500,
            body: "Internal server error.",
        };
    }
};
