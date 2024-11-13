// storeValue.js
const { db } = require('./firebase');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const docRef = await db.collection('myCollection').add(data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data saved successfully", id: docRef.id })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save data", details: error.message })
    };
  }
};
