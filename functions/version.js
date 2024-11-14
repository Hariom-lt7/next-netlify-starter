// .netlify/functions/getVersion.js

const VERSION = '1';  // Set your app version here

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: VERSION,  // Returning the version as plain text
  };
};
