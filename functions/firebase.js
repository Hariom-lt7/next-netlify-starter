const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // Replace \n with actual newlines
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://tournament-7de53.firebaseio.com"
  });
}

const db = admin.firestore();
module.exports = { db };
